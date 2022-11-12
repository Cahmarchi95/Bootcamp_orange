//FIZZBUZZ MAIN

// Você receberá um número onde:
// Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ;
// Se o número for apenas múltiplo de 3 -> "Fizz" ;
// Se o número for apenas múltiplo de 5 -> "Buzz";
// Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido;

const { gets, print } = require("./fizz-aux");

let resultado = gets();

fizzBuzz(resultado);

function fizzBuzz(resultado) {
  if (resultado % 3 === 0 && resultado % 5 === 0) {
    print("FizzBuzz");
  } else if (resultado % 3 === 0) {
    print("Fizz");
  } else if (resultado % 5 === 0) {
    print("Buzz");
  } else {
    print(`${resultado}`);
  }
}
