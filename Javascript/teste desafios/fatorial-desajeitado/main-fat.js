// A entrada consiste em um valor inteiro positivo N.
// A saída consiste em retornar o valor do seu fatorial desajeitado de N, conforme exemplo abaixo.
// Exemplo 1:
// Entrada	Saída
//   4	      7
// Explicação: 7 = (4 * 3 / 2) + 1 
//  as operações ainda são aplicadas usando a ordem usual de operações aritméticas (*/+-)
// Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11

const {gets, print } = require("./aux-fat");

let n = gets();
let list = [];
let fatorialDeN = 0;

while (n >= 0) {
  list[n] = n;
  n--;
}
list.shift(); //remove o zero do array
list.reverse(); // inverte a ordem dos números para decrescente


 if (list.length >= 4) {
   fatorialDeN = Math.floor((list[0] * list[1]) / list[2]);
  fatorialDeN = fatorialDeN + list[3];
  list.splice(0, 4); 
  //Usando o .splice() para remover os números que já foram utilizados no array(list), assim priorizando os que faltam a calcular;
  while (list.length >= 4) {
    fatorialDeN = fatorialDeN - Math.floor((list[0] * list[1]) / list[2]);
    fatorialDeN = fatorialDeN + list[3];
    list.splice(0, 4);
  }
  if (list.length == 3) {
    fatorialDeN = fatorialDeN - Math.floor((list[0] * list[1]) / list[2]);
    list.splice(0, 2);
  }

  if (list.length == 2) {
    fatorialDeN = fatorialDeN - Math.floor(list[0] * list[1]);
    list.splice(0, 2);
  }

  if (list.length == 1) {
    fatorialDeN = fatorialDeN - Math.floor(list[0]);
    list.splice(0, 2);
  }
}

print(fatorialDeN)

