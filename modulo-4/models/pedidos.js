const { Schema } = require("mongoose");

const pedidos = new Schema({
  cliente: {
    nome: {
      type: String,
      require: true,
    },
    sobrenome: {
      type: String,
      require: true,
    },
    pizzas: [
      {
        sabor: {
          type: String,
          require: true,
        },
        quantidade: {
          type: Number,
          require: true,
        },
        tamanho: {
          type: String,
          require: true,
          enum: ["Pequeno", "Médio", "Grande"],
        },
      },
    ],
    pagamento: {
      type: String,
      require: true,
      enum: ["PIX", "Dinhero", "Cartão Credito"],
    },
    total: {
      type: Number,
      require: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
});

module.exports = pedidos;
