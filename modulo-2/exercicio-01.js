const carros = [
  {
    modelo: "Gol",
    marca: "Volkswagen",
    cor: "branco",
    corHexa: "#fff",
    anoFabricacao: "2010",
    placa: "ABC51D9",
  },
  {
    modelo: "Fiesta",
    marca: "Ford",
    cor: "preto",
    corHexa: "#000",
    anoFabricacao: "2015",
    placa: "ZYZ23R8",
  },
  {
    modelo: "Palio",
    marca: "Fiat",
    cor: "Cinza",
    corHexa: "#ccc",
    anoFabricacao: "2018",
    placa: "HGJ56M1",
  },
  {
    modelo: "T-Cross",
    marca: "Volkswagen",
    cor: "branco",
    corHexa: "#fff",
    anoFabricacao: "2022",
    placa: "DCF3R43",
  },
  {
    modelo: "Meriva",
    marca: "GM",
    cor: "vermelho",
    corHexa: "#0000ff",
    anoFabricacao: "2007",
    placa: "YOU52S7",
  },
];

const carrosOrdenados = carros.sort((a, b) => {
  // Se o modelo interado B for menor comparado ao A, retorna 1 posição na lista
  if (a.modelo < b.modelo) {
    return -1;
  }

  //   Se o modelo interado B não for maior que o A, mas o modelo  A for maior que o B avança 1 posição na lista
  else if (a.modelo > b.modelo) {
    return 1;
  }

  //  se não atendeu as condições acima fica onde está
  else {
    return 0;
  }
});

console.log(carrosOrdenados);
// eslint-disable-next-line no-undef
module.exports = { carros };
