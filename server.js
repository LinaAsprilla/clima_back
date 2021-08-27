require("dotenv").config({ path: "variables.env" });
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("weather.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

//Parseo del Body
server.use(jsonServer.bodyParser);

server.options("*", cors());

server.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

//Importar rutas
server.use("/auth", require("./routes/token"));
server.use("/clima", require("./routes/clima"));

// Middlewares predeterminados (logger, static, cors y no-cache)
server.use(middlewares);
//Enrutador Express
server.use(router);

// Arrancar la app
server.listen(4000, () => {
  console.log(
    "JSON Server is running",
    "http://localhost:4000/",
    "http://localhost:4000/Clima"
  );
});
