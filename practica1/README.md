# API de Publicaciones con Autenticación y Roles

Este proyecto es una API REST con Node.js, Express, TypeScript y MongoDB. Incluye autenticación JWT, control de acceso basado en roles y la posibilidad de gestionar usuarios y publicaciones.


## Instalación y Configuración

1. **Clona el repositorio:**
   
   git clone https://github.com/LuisArturo21/Tareas.git
   cd practica1
   
2. **Instala las dependencias:**
   
   npm install
   
3. **Configura las variables de entorno:**
   - Se incluye un archivo `.env.example` con las variables necesarias.
   - Copia este archivo como `.env` y modifica el valor de `MONGO_URI` según tu configuración local.
   
4. **Inicia el servidor en modo desarrollo:**
   
   npm run dev


## Pruebas en Postman

Para probar los endpoints en **Postman**, sigue los pasos detallados a continuación.

### 1. Registro de Usuario
- **Endpoint:** `POST` http://localhost:3000/auth/registro
- **Cuerpo (JSON):**
  
  {
    "nombre": "MAkako",
    "email": "makako@gmail",
    "contraseña": "pakakopassword",
    "rol": "admin"
    }

- **Respuesta esperada:** Usuario registrado

### 2. Inicio de Sesión
- **Endpoint:** `POST`   http://localhost:3000/auth/login
- **Cuerpo (JSON):**
  
  {
    "email": "makako@gmail",
    "contraseña": "pakakopassword"
  }
  
- **Respuesta esperada:**
  
  {
    "token": "eyJhbGciOiJI..."
  }
  
- Guarda el token, lo necesitarás para los siguientes endpoints.

### 3. Crear Usuario (Admin requerido)
- **Endpoint:** `POST /usuarios`  http://localhost:3000/users/usuarios
- **Authorization:** `Authorization: Bearer Token {TOKEN_ADMIN}`
- **Cuerpo (JSON):**
  ```json
  {
    "nombre": "MAkako2",
    "email": "makak2o@gmail",
    "contraseña": "pakakopassword",
    "rol": "admin"
   }
  ```

### 4. Obtener Lista de Usuarios (Admin requerido)
- **Endpoint:** `GET /usuarios`  http://localhost:3000/users/usuarios
- **Headers:** `Authorization: Bearer Token {TOKEN_ADMIN}`

### 5. Obtener un Usuario por ID (Admin requerido)
- **Endpoint:** `GET /usuarios/{id}`  http://localhost:3000/users/usuarios/?id=67db77106d7dbeca787efbc5
- **Headers:** `Authorization: Bearer Token {TOKEN_ADMIN}`

### 6. Actualizar Usuario por ID (Admin requerido)
- **Endpoint:** `PUT /usuarios/{id}`  http://localhost:3000/users/usuarios/67dcc74915846de00244837c
- **Headers:** `Authorization: Bearer Token {TOKEN_ADMIN}`
- **Cuerpo (JSON):**
  
  {
    "nombre": "Nuevo Nombre"
  }
  

### 7. Eliminar Usuario por ID (Admin requerido)
- **Endpoint:** `DELETE /usuarios/{id}`   http://localhost:3000/users/usuarios/67dcc74915846de00244837c
- **Headers:** `Authorization: Bearer Token {TOKEN_ADMIN}`

### 8. Crear Publicación (Admin requerido)
- **Endpoint:** `POST /publicaciones`   http://localhost:3000/publicaciones/publicaciones
- **Headers:** `Authorization: Bearer Token {TOKEN_ADMIN}`
- **Cuerpo (JSON):**
 
 {
  "titulo": "Mi primera publicación",
  "contenido": "Este es el contenido de mi publicación.",
  "fecha": "2025-03-20T00:00:00.000Z",
  "autor": "67db77106d7dbeca787efbc5"
}

### 9. Listar Publicaciones (Admin requerido)
- **Endpoint:** `GET /publicaciones` http://localhost:3000/publicaciones/publicaciones
- **Headers:** `Authorization: Bearer Token {TOKEN_ADMIN}`

---

## Tecnologías Utilizadas
- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **TypeScript**
- **JWT para Autenticación**
- **Bcrypt para Hash de Contraseñas**