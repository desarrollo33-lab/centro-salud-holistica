export async function onRequestPost({ request, env }) {
  try {
    const { identity, password } = await request.json();
    const pbUrl = env.POCKETBASE_URL || 'http://64.176.16.231:8090';
    
    const response = await fetch(`${pbUrl}/api/collections/users/auth-with-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identity, password })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      return new Response(JSON.stringify({ error: data.message || 'Credenciales inválidas' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response(JSON.stringify({
      success: true,
      token: data.token,
      user: data.record
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ error: 'Error del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
