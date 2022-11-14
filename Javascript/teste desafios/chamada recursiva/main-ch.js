// Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.
// Será  impresso o somatório de N até 0, como no exemplo a baixo:
// EXEMPLO DE ENTRADA : 10
// 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0 = 55.
// EXEMPLO DE SAÍDA: 55

//node ./chamada\ recursiva/main-ch.js

const { gets, print } = require("./aux-ch");

const n = gets();

somatorio(n);

function somatorio() {
  let resultado = 1;
  for (let i = n; i > 1; i--) {
    resultado = resultado + i;
  }

  print(resultado);
}
