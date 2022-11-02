//arrays (lista)
//  node ./06-\ Arrays\ e\ estruturas\ de\ repeticao/app.js

/*const alunos = ["João", "Vitor", "Marina"];

//add um aluno com push
alunos.push("Caroline");

// add um aluno pelo índice em uma posição já pré-determinada
alunos[4] = "Mariane";

console.log(alunos);

//para remover itens, método pop (ultimo da lista)
alunos.pop();
console.log(alunos);
//(remover o primeiro da lista)
alunos.shift()
console.log(alunos);*/

//Média
const notas = [5, 7, 8, 2, 5, 8];

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  somaNotas = somaNotas + nota;
}

const media = somaNotas / notas.length;
console.log(media.toFixed(1));
