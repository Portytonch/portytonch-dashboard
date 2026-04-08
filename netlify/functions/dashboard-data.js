export async function handler(event, context) {
  const authHeader = event.headers.authorization;

  if (!authHeader) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "No autorizado" })
    };
  }

  const data = [
    { mensaje: "Datos protegidos funcionando correctamente" }
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}
