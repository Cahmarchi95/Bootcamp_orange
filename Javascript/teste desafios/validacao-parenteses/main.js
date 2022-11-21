//VALIDAÇÃO DE PARÊNTESES
// Dada uma string com apenas os seguintes caracteres '(', ')', '{', '}', '[', ']' determine se uma determinada string é válida.

// Entrada
// Uma string é considerada válida se:

// Caracteres de abertura devem ser fechadas pelo mesmo tipo. Abertura devem ser fechados com uma chave correspondente. Uma string vazia é considerada válida.

// Saída
// A saída corresponde a um valor Booleano como no exemplo abaixo:

// Entrada	Saída
// [ ]

// true
// ( )

// true
// [ )

// false

const string = ")";

function isValid(s) {
  const stack = ["(", ")", "{", "}", "[", "]"];
  for (let i = 0; i < stack.length; i += 2) {
    if (s[0] == stack[1] && s[s.length - 1] == stack[i + 1]) return true;
  }
  return false;
}

console.log(isValid(string));
