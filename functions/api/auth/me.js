export async function onRequestGet({ request, env }) {
  const authHeader = request.headers.get('Authorization');
  
  if (!authHeader) {
    return new Response(JSON.stringify({ authenticated: false }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  try {
    const pbUrl = env.POCKETBASE_URL || 'http://64.176.16.231:8090';
    const response = await fetch(`${pbUrl}/api/collections/users/auth-refresh`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': authHeader
      }
    });
    
    if (!response.ok) {
      return new Response(JSON.stringify({ authenticated: false }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const data = await response.json();
    
    return new Response(JSON.stringify({
      authenticated: true,
      user: data.record,
      token: data.token
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Auth check error:', error);
    return new Response(JSON.stringify({ authenticated: false }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
