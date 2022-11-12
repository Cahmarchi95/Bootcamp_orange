const entradas = [3,18];
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
