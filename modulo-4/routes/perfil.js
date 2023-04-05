const express = require("express");

const router = express.Router();

router.get("/", (_, res) => {
  res.render("perfil/index", {
    nome: "Vanoir gerhard",
    idade: 33,
  });
});

module.exports = router;
