const express = require("express");
const path = require("path");

const app = express();
const routerPrincipal = require("./routes/principal");
const routerPedidos = require("./routes/pedidos");

const ports = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", routerPrincipal);
app.use("/pedidos", routerPedidos);

app.listen(ports, () => {
  console.log(`Servidor ouvindo na porta ${ports}`);
});
