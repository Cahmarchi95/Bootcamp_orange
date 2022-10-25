const precoCombust = 5.79;
const gastoCombustKm = 12;
const distanciaKm = 1580;

const valorViagem = (precoCombust * distanciaKm) / gastoCombustKm;

console.log(`O valor da viagem é R$ ${valorViagem.toFixed(2)} `);
