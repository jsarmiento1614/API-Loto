// instancio todas las dependencias a usar en el API.
var express = require('express');
var sql = require('mssql');
var cors = require('cors');
var bodyparser = require('body-parser');
var env = require('dotenv');


// Almaceno toda la funcionalidad del espress en la variable app.
var app = express();


const result = env.config();

// Ejecuto las funciones
app.use(cors());
app.use(bodyparser());
app.use(bodyparser.urlencoded({
    extended: true
}));


// creao una variable que almacenara la funcion de configuracion de acceso a la base detos.
const sqlConfig = {
    server: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT),
    debug: true,
    options: {
        encrypt: false,
        // instanceName: process.env.DB_INSTANCE_NAME
    }
}

// Crear la funcion que me atrapará errores.
app.use(function (err, req, res, next) {
    console.log(err);
    res.send({
        success: false,
        message: err
    });
});

// Escucho el puerto para levantar el servidor
app.listen(parseInt(process.env.APP_PORT), () => {
    console.log("Esta corriendo el servidor!!!")
    console.log(result.parsed);
    console.log(sqlConfig);
});

require("./request/user")(app, sql, sqlConfig);