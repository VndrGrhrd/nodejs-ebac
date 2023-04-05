const express = require("express");

const app = express();
const routerPrincipal = require("./routes/principal");
const routerPedidos = require("./routes/pedidos");

const ports = 3000;

app.use("/", routerPrincipal);
app.use("/pedidos", routerPedidos);

app.listen(ports, () => {
  console.log(`Servidor ouvindo na porta ${ports}`);
});
