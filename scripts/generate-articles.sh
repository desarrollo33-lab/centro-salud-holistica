#!/bin/bash
# Automated Article Generation Script
# Run this script weekly to generate blog articles

PB_URL="http://64.176.16.231:8090"
ADMIN_EMAIL="admin@centro-salud.cl"
ADMIN_PASSWORD="NuevaSalud2026!"

echo "Generando artículos..."

# Get auth token
TOKEN=$(curl -s -X POST "$PB_URL/api/admins/auth-with-password" \
  -H "Content-Type: application/json" \
  -d "{\"identity\":\"$ADMIN_EMAIL\",\"password\":\"$ADMIN_PASSWORD\"}" | jq -r '.token')

if [ "$TOKEN" == "null" ] || [ -z "$TOKEN" ]; then
  echo "Error de autenticación"
  exit 1
fi

# Articles: title|topic|tags
ARTICLES=(
  "Como los alimentos procesados afectan tus dientes|prevencion|alimentacion,procesados,dientes"
  "El discrepancy cuando lo moderno daña lo antiguo|prevencion|evolucion,discrepancia,moderno"
  "Bruxismo y estrés cómo afectan tu boca|estilo-vida|bruxismo,estrés,mandíbula"
  "Guía completa de vitamina K2 para dientes|prevencion|vitamina,k2,minerales"
)

for item in "${ARTICLES[@]}"; do
  IFS='|' read -r title topic tags <<< "$item"
  
  slugified=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | cut -c1-50)
  final_slug="${slugified}-$(date +%s)"
  
  response=$(curl -s -X POST "$PB_URL/api/collections/blog/records" \
    -H "Authorization: $TOKEN" \
    -H "Content-Type: application/json" \
    -d "{
      \"title\": \"$title\",
      \"slug\": \"$final_slug\",
      \"content_markdown\": \"## $title\n\nArtículo sobre $title basado en el libro Salud Evolutiva del Dr. Ipinza.\",
      \"excerpt\": \"Artículo sobre $title\",
      \"author_type\": \"automated\",
      \"topic\": \"$topic\",
      \"tags\": [\"$tags\"],
      \"status\": \"draft\",
      \"published_at\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"
    }")
  
  if echo "$response" | jq -e '.id' > /dev/null 2>&1; then
    echo "Creado: $title"
  else
    echo "Error: $(echo "$response" | jq -r '.message')"
  fi
done

echo "Proceso completado."
