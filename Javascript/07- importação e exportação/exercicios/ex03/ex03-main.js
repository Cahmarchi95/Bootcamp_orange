/*3) Faça um programa que receba a quantidade de números e seus respectivos valores.

Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
        */

const { gets, print } = require("./ex03-aux");

const numerosLista = gets();
let numerosPares = [];

for (let i = 0; i < numerosLista; i++) {
  const numeros = gets();
 if (numeros % 2 === 0){
    numerosPares.push(numeros);
 }
  }

  print(`Números pares: ${numerosPares}`);