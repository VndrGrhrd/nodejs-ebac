const express = require("express");
const path = require("path");

const routerPrincipal = require("./routes/principal");
const routerPedidos = require("./routes/pedidos");
const routerPerfil = require("./routes/perfil");
const { conection } = require("./models");

const app = express();
const ports = 3000;

// eslint-disable-next-line no-undef
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", routerPrincipal);
app.use("/pedidos", routerPedidos);
app.use("/perfil", routerPerfil);

app.listen(ports, () => {
  conection();
  console.log(`Servidor ouvindo na porta ${ports}`);
});
