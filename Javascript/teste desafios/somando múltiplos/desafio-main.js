//Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.
// a = 5
// n = 20
// 5,15,20 = saída 50
//armazenar os múltiplos de a

const { gets, print } = require("./desafio-aux");

const a = gets()
const n = gets()
let multiplo = a

somarMultiplos(n)

function somarMultiplos(n){
    let multiplosDeA = 0;
    for (let a = 0; a <= n; a++) {
        if(a % multiplo === 0){
        
            multiplosDeA += a
        }
        
    }

   print(multiplosDeA)
}


