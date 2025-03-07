📂 Instrucciones para la Tarea 2

🚀 Clonar el repositorio

git clone <URL_DEL_REPOSITORIO>
cd tarea2

📦 Instalar dependencias

npm install

🔧 Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto.

Copia el contenido de .env.example en .env.

Modifica el archivo .env y establece una clave secreta segura para JWT_SECRET. También puedes configurar el puerto (PORT) si deseas usar uno diferente al predeterminado (3000).

Ejemplo de archivo .env:

JWT_SECRET=MiClaveSuperSecreta2024!
PORT=3000

▶️ Ejecutar el servidor

npm run dev

📩 Probar la API en Postman

1️⃣ Iniciar sesión (/login)

Método: POST

URL: http://localhost:3000/login

Body (raw, JSON):

{
  "email": "test@example.com",
  "password": "contrasena123"
}

✅ Respuesta esperada (éxito):

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Copia el token, lo necesitarás en el siguiente paso.

2️⃣ Obtener perfil (/perfil)

Método: GET

URL: http://localhost:3000/perfil

Headers:

Authorization: Bearer <TOKEN_JWT>

(Sustituye <TOKEN_JWT> por el token obtenido en el paso anterior.)

✅ Respuesta esperada (éxito):

{
  "email": "test@example.com",
  "password": "contrasena123"
}

📌 Nota: La API no está conectada a una base de datos, por lo que puedes usar cualquier credencial de usuario en el endpoint de inicio de sesión.