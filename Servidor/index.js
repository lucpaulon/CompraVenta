// Importamos express
var express = require("express");
// Importamos body-parser, una extensión que nos permitirá recibir campos de una request del tipo POST
var bodyParser = require("body-parser");
// Inicializamos express en otra variable
var app = express();
//Cargamos el módulo de mongoose
var mongoose = require('./database');
// Decimos que utilizaremos bodyparser. Esto permite recibir peticiones POST con un cuerpo (EJ: un formulario)
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json());



//Configuramos el puerto que tendrá nuestro servidor
let puerto = 1234;

// Especificamos la base hacia donde nos conectaremos
// let direccionBaseDatos = 'mongodb://localhost:27017/nombre_base';
// Si están en su entorno local, la variable sería algo así
// En este caso nos conectaremos a una base remota
let direccionBaseDatos = "mongodb://localhost"; 


// Ejecutamos el método connect de la variable que contiene a Mongoose

app.listen(process.env.PORT || puerto, () => {
    console.log("Servidor corriendo en puerto: " + puerto);
});


