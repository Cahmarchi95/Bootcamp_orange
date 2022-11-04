//funções que serão exportadas

const entradas = [5, 50, 10, 98, 23];
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
