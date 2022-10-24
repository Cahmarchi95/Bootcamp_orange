const precoEtanol = 5.79;
const precoGasolina = 6.66;
const gastoCombustKm = 10;
const distanciaKm = 100;
const tipoCombust = `gasolina`;

if (tipoCombust === `etanol`) {
  const valorViagem = (precoEtanol * distanciaKm) / gastoCombustKm;
  console.log(
    `O valor da viagem com o combustível etanol é de R$ ${valorViagem.toFixed(
      2
    )} `
  );
} else {
  const valorViagem = (precoGasolina * distanciaKm) / gastoCombustKm;
  console.log(
    `O valor da viagem com o combustível etanol é de R$ ${valorViagem.toFixed(
      2
    )} `
  );
}
