/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

const { gets, print } = require("./ex02-aux");

const quantidadeDeNumeros = gets();

let maiorValor = 0;
let menorValor = -1;

for (let i = 0; i < quantidadeDeNumeros; i++) {
  const numeros = gets();
  if (numeros > maiorValor) {
    maiorValor = numeros;
  }
  else if (numeros > menorValor){
    menorValor = numeros;
  }
}

print(`Maior número: ${maiorValor}`);
print(`Menor número: ${menorValor}`);
