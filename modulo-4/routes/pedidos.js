const express = require("express");

const { Pedido } = require("../models");

const router = express.Router();

router.get("/", (_, res) => {
  Pedido.find({}).then((pedidos) => {
    res.render("pedidos/index", {
      nome: "Pizzaria Ebac",
      Pedido: pedidos,
    });
  });
});

module.exports = router;
