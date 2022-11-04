//arquivo que receberá as funções exportadas
// node ./07-\ importação\ e\ exportação/main.js

const { gets, print } = require("./funcoes-auxiliares");

/* Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1-100.
Faça um pograma que receba os 5 números sorteados e mostre o maior número.

Dados de entrada:
5
50
10
98
23

Saída:
98
*/

let maiorValor = 0;
const quantidadeDeAlunos = gets();

for (let i = 0; i < quantidadeDeAlunos; i++) {
  const numeroSorteado = gets();
  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}

print(maiorValor);
