export async function onRequestPost({ request, env }) {
  try {
    const { email, password, passwordConfirm, name } = await request.json();
    const pbUrl = env.POCKETBASE_URL || 'http://64.176.16.231:8090';
    
    const createResponse = await fetch(`${pbUrl}/api/collections/users/records`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, passwordConfirm, name })
    });
    
    const createData = await createResponse.json();
    
    if (!createResponse.ok) {
      const errorMsg = createData.data?.email?.message || createData.message || 'No se pudo crear la cuenta';
      return new Response(JSON.stringify({ error: errorMsg }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const loginResponse = await fetch(`${pbUrl}/api/collections/users/auth-with-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identity: email, password })
    });
    
    const loginData = await loginResponse.json();
    
    if (!loginResponse.ok) {
      return new Response(JSON.stringify({ 
        error: 'Cuenta creada pero no se pudo iniciar sesión. Por favor inicia sesión.',
        created: true 
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response(JSON.stringify({
      success: true,
      token: loginData.token,
      user: loginData.record
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Register error:', error);
    return new Response(JSON.stringify({ error: 'Error del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
