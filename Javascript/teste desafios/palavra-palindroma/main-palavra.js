// Neste desafio você deverá construir uma função que recebe uma String e identifique se a mesma é um palíndromo, ou seja, se a String é igual a ela mesma invertida.
// A entrada consiste em um palavra.
// Saída
// Para cada String informada, terá uma saída de valor Booleano: TRUE, caso a palavra seja um palíndromo, ou FALSE caso a palavra NÃO seja um palíndromo.

const { gets, print } = require("./aux-palavra");

let palavra = gets();
let palavraInvertida = "";

checaPalindromo();

function checaPalindromo() {
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }

  if (palavraInvertida === palavra) {
    print("TRUE");
  } else {
    print("FALSE");
  }
}
