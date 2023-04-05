// eslint-disable-next-line no-undef
const { carros } = require("./exercicio-01.js");

function veiculosEmRodizio(diaSemana) {
  const carroEmRodizio = [];

  carros.forEach((carro) => {
    const finalPlaca = parseInt(carro.placa.slice(-1, carro.placa.length));

    if ((finalPlaca === 1 || finalPlaca == 2) && diaSemana === 1) {
      carroEmRodizio.push(carro);
    } else if ((finalPlaca === 3 || finalPlaca == 4) && diaSemana === 2) {
      carroEmRodizio.push(carro);
    } else if ((finalPlaca === 5 || finalPlaca == 6) && diaSemana === 3) {
      carroEmRodizio.push(carro);
    } else if ((finalPlaca === 7 || finalPlaca == 8) && diaSemana === 4) {
      carroEmRodizio.push(carro);
    } else if ((finalPlaca === 9 || finalPlaca == 0) && diaSemana === 5) {
      carroEmRodizio.push(carro);
    }
  });
  return carroEmRodizio;
}

// PROPOSTA 1 - RETORNA OS VEICULOS POR DIA DA SEMANA
console.log("\n\n\n\n PROPOSTA 1 - RETORNA OS VEICULOS POR DIA DA SEMANA \n");

let contador = 0;
while (contador <= 6) {
  const veiculos2 = veiculosEmRodizio(contador);
  let srtingDiaSemana = "";
  switch (contador) {
    case 1:
      srtingDiaSemana = "Segunda Feira";
      break;
    case 2:
      srtingDiaSemana = "Terça Feira";
      break;
    case 4:
      srtingDiaSemana = "Quarta feira";
      break;
    case 5:
      srtingDiaSemana = "Sexta feira";
      break;
  }

  if (contador === 0 || contador === 6) {
    console.log("Sábados e Domingos: Não tem rodízio \n");
  } else {
    console.log(`No dia ${srtingDiaSemana} os veiculos em rodizio são:`);
    console.log(veiculos2.length > 0 ? veiculos2 : "Sem veiculos no rodizio");
  }

  contador++;
}

// PROPOSTA 2 - RETORNA OS VEICULOS DA DATA ATUAL
console.log("\n\n\n\n PROPOSTA 2 - RETORNA OS VEICULOS DA DATA ATUAL \n");
const dataAtual = new Date();
const diaSemana = parseInt(dataAtual.getDay());
// confeço pegei do exemplo no site do mozila,
const options = { weekday: "long" };
const srtDiaSemana = new Intl.DateTimeFormat("pt-Br", options).format(
  dataAtual
);

const veiculos = veiculosEmRodizio(diaSemana);

if (diaSemana === 0 || diaSemana === 6) {
  console.log("Sábados e Domingos: Não tem rodízio \n");
} else {
  console.log(`No dia ${srtDiaSemana} os veiculos em rodizio são:`);
  console.log(veiculos.length > 0 ? veiculos : "Sem veiculos no rodizio");
}
