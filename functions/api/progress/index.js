export async function onRequestGet({ request, env }) {
  const authHeader = request.headers.get('Authorization');
  
  if (!authHeader) {
    return new Response(JSON.stringify({ error: 'No autenticado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  try {
    const response = await fetch('https://venue-glenn-elected-paris.trycloudflare.com/api/collections/user_progress/records?perPage=100', {
      headers: { 
        'Authorization': authHeader
      }
    });
    
    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Error al obtener progreso' }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('Progress error:', error);
    return new Response(JSON.stringify({ error: 'Error del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
