//MATRIZ PAR ÍMPAR MAIN
// Entrada
// A entrada são arrays de tamanho variado que possuem somente números inteiros.
// Saída
// A saída deverá retornar todos os valores pares para o começo do array, seguido pelos ímpares, conforme exemplo abaixo:
//Entrada     //Saída
//4,3,1,2  	  2,4,3,1

let array = [4, 3, 1, 2];
let numerosPares = [];
let numerosImpares = [];
let arrayOrdenado = [];

function verficarNumeros() {
  for (i = 0; i < array.length; i++) {
    let numero = array[i];
    if (numero % 2 === 0) {
      numerosPares.push(numero);
    } else {
      numerosImpares.push(numero);
    }
  }
}

verficarNumeros(array);

arrayOrdenado = numerosPares.reverse().concat(numerosImpares);

console.log(arrayOrdenado);

// resposta com menos código
// let arr = gets().split('');
// let arrVazio = [];

// for (let i = 0; i < arr.length; i++){
//   if(arr[i] % 2 === 0){
//     arrVazio.unshift(arr[i])
//   } else {
//     arrVazio.push(arr[i])
//   }
// }

// print(arrVazio)
