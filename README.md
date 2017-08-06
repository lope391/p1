# Proyecto 1 Topicos de Telematica
By: Lope Carvajal --- lcarva12@eafit.edu.co

## 1.Descripción
Aplicación de estilo foro donde se gestionan publicaciónes con imagenes y comentarios.
La base de la aplicación fue generada con el IDE PHPstorm.

## 2.Analisis
### 2.1 Requisitos Funcionales
1. Poder crear una cuenta e ingresar a la pagina con ella.
2. Poder crear un nuevo campamento solo si ha ingresado a la plataforma.
3. Poder comentar en un post solo si ha ingresado a la plataforma.
4. Poder buscar entre todos los campamentos por su nombre.
5. Lista todos los campamentos en su pagina respectiva.
### 2.2 Tecnologías de Desarrollo y Ejecución
* Lenguaje de Programación: Javascript
* Framework web backend: NodeJS - Express
* Framework web frontend: --
* Base de datos: MongoDB
* Web App Server: NodeJS Embeded
* Web Server: NGINX
### 2.3 Ambientes de Desarrollo, Pruebas y Producción
#### 2.3.1 Desarrollo
  * Sistema Operativo: Windows 10 pro 64bit
  * Lenguaje de Programación: Javascript
  * Framework web Backend: Node.js 8.2.1 -- Express.js 4.15.2
  * Framework web Frontend: --
  * Web App Server: Embebido
  * Web Server: --
  * Base de Datos: MongoDB 3.4.6
  * Editor: PHPstorm
#### 2.3.2 Pruebas
  DCA:
  * Sistema Operativo: Linux Centos 7.1
  * Lenguaje de Programación: Javascript
  * Framework web Backend: Node.js 8.2.1 -- Express.js 4.15.2
  * Framework web Frontend: --
  * Web App Server: Embebido
  * Web Server: NGINX
  * Link: 10.131.137.204 
  * Base de Datos: MongoDB 3.4.6
  La versión de node se manejó con nvm a la versión actual que es 8.2.1
#### 2.3.3 Producción
  * Proveedores: Heroku mLab
  * Link: https://sleepy-cove-17547.herokuapp.com/
  * Lenguaje de Programación: Javascript
  * Framework web Backend: Node.js 8.2.1 -- Express.js 4.15.2
  * Framework web Frontend: --
  * Web App Server: Embebido
  * Web Server: NGINX
  * Base de Datos: MongoDB 3.2.1
  
## 3.Diseño
### 3.1 Modelo de Datos
    
    campground: {
        name: String,
        image: String,
        description: String,
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            }
        ],
        author: {
            id: {
                type: mongoose.Schema.Types.ObjectId
            },
            username : String
        }
    }

    comment: {
        text: String,
        author: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: String
        }
    }

    user: {
        username: String,
        password: String
    }
    
### 3.2 Servicios Web

    /* URI: /
      METODO: GET
      DATA REQUEST:
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS home.
      Servicio Web: Muestra el home de la pagina.
      */
      
    /* URI: /users
      METODO: GET
      DATA REQUEST: --
      DATA RESPONSE: String De respuesta confirmada.
      Servicio Web: Respuesta de prueba.
      */
      
    /* URI: /users
      METODO: POST
      DATA REQUEST:
      x-www-urlencoded
      body:{
        username: String,
        password: String
      }
      DATA RESPONSE: Datos HTML EJS Vista 
      Servicio Web: Crea un nuevo usuario con la información del body y lo loggea a la pagina.
      */
      
    /* URI: /users/new
      METODO: GET
      DATA REQUEST: 
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS nuevo usuario.
      Servicio Web: Muestra la forma para crear un usuario nuevo.
      */
      
    /* URI: /users/login
      METODO: GET
      DATA REQUEST: 
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS login.
      Servicio Web: Muestra la forma para ingresar a la pagina con un usuario existente.
      */
      
    /* URI: /users/login
      METODO: POST
      DATA REQUEST:
      x-www-urlencoded
      body:{
        username: String,
        password: String
      }
      DATA RESPONSE: Datos HTML EJS campamentos.
      Servicio Web: Intenta ingresar al usuario a la plataforma con los contenidos del body.
      */
      
    /* URI: /users/logout
      METODO: GET
      DATA REQUEST: 
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS campamentos.
      Servicio Web: Hace un log out del usuario actual.
      */
      
    /* URI: /campgrounds
      METODO: GET
      DATA REQUEST: 
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS campamentos.
      Servicio Web: Muestra todos los campamentos guardados.
      */
      
    /* URI: /campgrounds
      METODO: POST
      DATA REQUEST:
      body:{
        campname: String,
        campimg: String,
        desc: String
      }
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS campamentos.
      Servicio Web: Añade un nuevo campamento a la base de datos solo si se ha ingresado con una cuenta valida con la información del body.
      */
      
    /* URI: /campgrounds/new
      METODO: GET
      DATA REQUEST: 
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS nuevo campamento.
      Servicio Web: Muestra la forma para agregar un campamento solo si se ha ingresado con una cuenta valida.
      */
      
    /* URI: /campgrounds/:id
      METODO: GET
      DATA REQUEST: 
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS Campamento identificado.
      Servicio Web: Muestra un campamento especifico y los comentarios que tenga.
      */
      
    /* URI: /campgrounds/:id/edit
      METODO: GET
      DATA REQUEST: 
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS editar Campamento identificado.
      Servicio Web: Muestra la forma para editar un campamento solo si le pertenece al usuario que este loggeado.
      */
      
    /* URI: /campgrounds/:id
      METODO: PUT
      DATA REQUEST:
      body:{ 
      campg: { 
        name: String,
        image: String,
        description: String } 
        }
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS campamentos.
      Servicio Web: Actualiza los datos del campamento identificado con la información del body solo si le pertenece al usuario.
      */
      
    /* URI: /campgrounds/:id
      METODO: DELETE
      DATA REQUEST:
      body:{ 
        campname: String,
        campimg: String,
        desc: String
      }
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS campamentos.
      Servicio Web: Elimina el campamento identificado solo si le pertenece al usuario.
      */
      
    /* URI: /campgrounds/:id/comments
      METODO: POST
      DATA REQUEST:
      body:{
        comm: { text: String }
      }
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS Campamento identificado.
      Servicio Web: Crea un nuevo comentario asociado al usuario loggeado y lo añade al arreglo de comentarios del campamento identificado.
      */
      
    /* URI: campgrounds/:id/comments/new
      METODO: GET
      DATA REQUEST: 
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS nuevo comentario.
      Servicio Web: Muestra la forma para agregar un nuevo comentario.
      */
      
    /* URI: /campgrounds/:id/:comment_id/edit
      METODO: GET
      DATA REQUEST: 
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS editar Comentario.
      Servicio Web: Muestra la forma para editar un comentario solo si le pertenece al usuario loggeado.
      */
      
    /* URI: /campgrounds/:id/:comment_id
      METODO: PUT
      DATA REQUEST:
      body:{
        comment: { text: String }
      }
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS Campamento identificado.
      Servicio Web: Edita el comentario identificado con la información del body solo si este le pertenece al usuario loggeado.
      */
      
    /* URI: /campgrounds/:id/:comment_id
      METODO: DELETE
      DATA REQUEST:
      user:{
        _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
        username: String
      }
      DATA RESPONSE: Datos HTML EJS Campamento Identificado.
      Servicio Web: Elimina el comentario identificado solo si este le pertenece al usuario loggeado.
      */

    /* URI: /search?key=""
          METODO: GET
          DATA REQUEST:
          user:{
            _id: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
            username: String
          }
          DATA RESPONSE: Datos HTML EJS Busqueda.
          Servicio Web: Busca entre los campamentos utilizando el atributo "key" del query
          */
