//exercícios funções
// node ./04-\ Funcoes/exs.js

//Função para dizer o nome
/*function sayMyName(name) {

console.log(`Hi ${name}`); 
}
sayMyName("Caroline");
sayMyName("Mariane");

//verificar maior de 18
function maior18(idade) {
  if (idade >= 18) {
    console.log("Maior de idade")
  } else {
     console.log("Menor de idade");
  }
}

maior18(25);
maior18(17);*/

// transformar em funções exercício juros

function aplicarDesconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}

function aplicarJuros(valor, juros) {
  return valor + valor * (juros / 100);
}

(function () {
  const precoEtiqueta = 100;
  const condicaoPagamento = 3;

  if (condicaoPagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
  } else if (condicaoPagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
  } else if (condicaoPagamento === 3) {
    console.log(precoEtiqueta);
  } else {
    console.log(aplicarJuros(precoEtiqueta, 10));
  }
})();
