/**
 * Contact form handler — Cloudflare Pages Function
 *
 * Sends contact form submissions via email using Cloudflare Email Workers
 * or falls back to logging (for initial setup).
 *
 * Expected POST body:
 *   { name, email, phone, country, service, message }
 *
 * Environment variables (set in Cloudflare Dashboard → Pages → Settings):
 *   CONTACT_EMAIL   — destination email (e.g. "info@saludevolutiva.cl")
 *   CONTACT_FROM    — sender name (default: "Formulario Web")
 *
 * Rate limiting: Simple IP-based throttle (1 request per 30s per IP)
 */

const RATE_LIMIT_WINDOW = 30_000; // 30 seconds
const ipCache = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const lastRequest = ipCache.get(ip);
  if (lastRequest && now - lastRequest < RATE_LIMIT_WINDOW) {
    return true;
  }
  ipCache.set(ip, now);
  // Cleanup old entries every 100 requests
  if (ipCache.size > 100) {
    for (const [key, val] of ipCache) {
      if (now - val > RATE_LIMIT_WINDOW * 2) ipCache.delete(key);
    }
  }
  return false;
}

function sanitize(str) {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, 1000);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function onRequestPost({ request, env }) {
  // Rate limiting
  const ip = request.headers.get("cf-connecting-ip") || "unknown";
  if (rateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: "Demasiadas solicitudes. Intenta de nuevo en 30 segundos." }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }

  // Parse body
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Datos inválidos." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone);
  const country = sanitize(body.country);
  const service = sanitize(body.service);
  const message = sanitize(body.message);

  // Validation
  if (!name || name.length < 2) {
    return new Response(
      JSON.stringify({ error: "El nombre es obligatorio." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  if (!email || !validateEmail(email)) {
    return new Response(
      JSON.stringify({ error: "Ingresa un email válido." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  if (!message || message.length < 10) {
    return new Response(
      JSON.stringify({ error: "El mensaje debe tener al menos 10 caracteres." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const contactEmail = env.CONTACT_EMAIL || "contacto@saludevolutiva.cl";

  // Build plain text email body
  const textBody = [
    `Nuevo mensaje de contacto — Centro de Salud Evolutiva`,
    ``,
    `Nombre:    ${name}`,
    `Email:     ${email}`,
    `Teléfono:  ${phone || "No proporcionado"}`,
    `País:      ${country || "No proporcionado"}`,
    `Servicio:  ${service || "No especificado"}`,
    ``,
    `Mensaje:`,
    message,
    ``,
    `---`,
    `IP: ${ip}`,
    `Fecha: ${new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" })}`,
  ].join("\n");

  // Try sending via Cloudflare Email Workers (if configured)
  // Cloudflare Email Routing can forward to CONTACT_EMAIL
  // For production, integrate with Resend, SendGrid, or MailChannels

  // Option 1: MailChannels (free on Cloudflare Workers)
  if (env.MAILCHANNELS_ENABLED === "true") {
    try {
      const mcResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.MAILCHANNELS_API_KEY || ""}`,
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: contactEmail, name: "Centro Salud Evolutiva" }] }],
          from: { email: "noreply@saludevolutiva.cl", name: "Formulario Web" },
          subject: `[Contacto] ${name} — ${service || "Consulta general"}`,
          content: [{ type: "text/plain", value: textBody }],
        }),
      });

      if (!mcResponse.ok) {
        console.error("MailChannels error:", await mcResponse.text());
        // Fall through to log-only mode
      } else {
        return new Response(
          JSON.stringify({ success: true, message: "Mensaje enviado correctamente." }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      }
    } catch (err) {
      console.error("MailChannels fetch error:", err);
    }
  }

  // Option 2: Resend (if API key configured)
  if (env.RESEND_API_KEY) {
    try {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Centro Salud Evolutiva <noreply@saludevolutiva.cl>",
          to: [contactEmail],
          subject: `[Contacto] ${name} — ${service || "Consulta general"}`,
          text: textBody,
        }),
      });

      if (resendResponse.ok) {
        return new Response(
          JSON.stringify({ success: true, message: "Mensaje enviado correctamente." }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      }
      console.error("Resend error:", await resendResponse.text());
    } catch (err) {
      console.error("Resend fetch error:", err);
    }
  }

  // Fallback: Log the message (useful during development)
  console.log("=== CONTACT FORM SUBMISSION ===");
  console.log(textBody);
  console.log("=== END ===");

  return new Response(
    JSON.stringify({
      success: true,
      message: "Mensaje recibido. Te contactaremos en 24-48 horas.",
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
