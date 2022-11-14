// Desafio
// Nesse desafio, dados dois números, verifique se eles são iguais. Caso sejam, retorne "Sao iguais!”. Caso contrário, retorne "Nao sao iguais!” sem as aspas. 

// Entrada
// As entradas serão dois valores, um em cada linha, representados por A e B, que sempre serão números inteiros. 

// Saída
// A saída deverá retornar a frase "Sao iguais!" caso A e B sejam o mesmo valor. Caso contrário,  retorne "Nao sao iguais!", sem as aspas

const { gets, print } = require("./aux-num");

let A = gets();
let B = gets();

verificarNumeros(A, B);

function verificarNumeros() {
  if (A === B) {
    print(`São iguais!`);
  } else {
    print(`Não são iguais!`);
  }
}

