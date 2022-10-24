/*const num = 4;
const divisivelPor5 = (num % 5) === 0;

if (num === 0) {
  console.log("o número é inválido");
} else if (divisivelPor5) {
  console.log("sim");
} else {
  console.log("não");
}*/

//desafio

const precoEtanol = 5.79;
const precoGasolina = 6.66;
let tipoCombustivel = `etanol`;
const gastoCombustKm = 10;
const distanciaKm = 100;

if (tipoCombustivel === `gasolina`) {
  const precoViagem = (precoGasolina * distanciaKm) / gastoCombustKm;
  console.log(
    `O valor da viagem com combustível gasolina é de R$ ${precoViagem.toFixed(
      2
    )} `
  );
} else {
  const precoViagem = (precoEtanol * distanciaKm) / gastoCombustKm;
  console.log(
    `O valor da viagem com combustível etanol é de R$ ${precoViagem.toFixed(
      2
    )} `
  );
}
