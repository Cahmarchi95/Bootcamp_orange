//Tabuada

/*const num = 10
let resultado = 0
let i = 0

for (let i = 0; i <= 10; i++) {
    resultado = (num * i);
    console.log(`${num} X ${i} = ${resultado} `)
    
}*/

//Imprimir números pares em uma lista

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let par = [];
for (let i = 0; i < numeros.length; i++) {
  const num = numeros[i];
  if (num % 2 === 0) {
    let par = num
    console.log(`Os números pares são: ${par}`);
  }
}
