const mongoose = require("mongoose");
const Pedido = require("pedidos");

const conection = () => {
  mongoose.connect(
    "mongodb+srv://vando124:RaLpw5pmc16LRwKi@cluster-ebac.ygarzzz.mongodb.net/test",
    { dbName: "pizaria-ebac" }
  );
};

module.exports = { conection, Pedido };
