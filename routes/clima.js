// Ruta para autenticar
const jsonServer = require("json-server");
const server = jsonServer.create();
const auth = require("../middleware/auth");

// /clima

//Obtener clima
server.get("/", auth);

module.exports = server;
