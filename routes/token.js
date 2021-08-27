// Ruta para autenticar
const jsonServer = require("json-server");
const server = jsonServer.create();
const tokenController = require("../controller/tokenController");

//auth

//Crear token
server.post("/", tokenController.crearToken);

module.exports = server;
