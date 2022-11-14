//OS NÚMEROS SÃO IGUAIS

const entradas = [5,5];
let i = 0;

function gets() {
  const entrada = entradas[i];
  i++;
  return entrada;
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print };
