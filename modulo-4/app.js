const express = require("express");
const path = require("path");

const app = express();
const routerPrincipal = require("./routes/principal");
const routerPedidos = require("./routes/pedidos");
const routerPerfil = require("./routes/perfil");

const ports = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", routerPrincipal);
app.use("/pedidos", routerPedidos);
app.use("/perfil", routerPerfil);

app.listen(ports, () => {
  console.log(`Servidor ouvindo na porta ${ports}`);
});
