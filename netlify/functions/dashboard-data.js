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
🔹 Paso 4: guardar

Baja y haz clic en:

👉 Commit changes

⚠️ MUY IMPORTANTE

Después de esto, Netlify debe detectar automáticamente la función.

Pero para eso debes tener esto configurado:

👉 En tu repo crea otro archivo:
netlify.toml
Add file → Create new file
Nombre:
netlify.toml
Contenido:
[functions]
  directory = "netlify/functions"
Commit changes
🚀 Paso 5: redeploy

Ve a Netlify:

👉 Deploys → Trigger deploy → Deploy site

🧪 Cómo probar

Abre en tu navegador:

https://TU-SITIO.netlify.app/.netlify/functions/dashboard-data

👉 Debe salir algo como:

{"mensaje":"Datos protegidos funcionando correctamente"}
🔥 Si esto funciona

Ya tienes:

✅ Backend funcionando
✅ Endpoint protegido
✅ Base para seguridad real

👉 Siguiente paso (muy importante)

Cuando confirmes que esto funciona, hacemos:

👉 validación real del usuario (JWT)
👉 para que NADIE sin login pueda acceder

Dime cuando tengas esto listo y lo cerramos como un sistema seguro de verdad 💪
