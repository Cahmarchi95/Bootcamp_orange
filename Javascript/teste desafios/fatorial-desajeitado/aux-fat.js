//FATORIAL DESAJEITADO

const entradas = [10];
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
