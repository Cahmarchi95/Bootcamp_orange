//desafio preço

/*const precoEtiqueta = 100.0;
const condicaoPagamento = `3x`;

if (condicaoPagamento === `débito`) {
  const desconto = (precoEtiqueta * 10) / 100;
  const precoFinal = precoEtiqueta - desconto;
  console.log(`O valor a ser pago é R$ ${precoFinal}`);
} else if (condicaoPagamento === `dinheiro`) {
  const desconto = (precoEtiqueta * 15) / 100;
  const precoFinal = precoEtiqueta - desconto;
  console.log(`O valor a ser pago é R$ ${precoFinal}`);
} else if (condicaoPagamento === `pix`) {
  const desconto = (precoEtiqueta * 15) / 100;
  const precoFinal = precoEtiqueta - desconto;
  console.log(`O valor a ser pago é R$ ${precoFinal}`);
} else if (condicaoPagamento === `2x`) {
  const precoFinal = precoEtiqueta;
  console.log(`O valor a ser pago é R$ ${precoFinal}`);
} else {
  const juros = (precoEtiqueta * 10) / 100;
  const precoFinal = precoEtiqueta + juros;
  console.log(`O valor a ser pago é R$ ${precoFinal}`);
}*/

//forma alternativa de resolução
const precoEtiqueta = 100.0;
const condicaoPagamento = `4`;

if (condicaoPagamento === `1`) {
  console.log(precoEtiqueta - precoEtiqueta * 0.1);
} else if (condicaoPagamento === `2`) {
  console.log(precoEtiqueta - precoEtiqueta * 0.15);
} else if (condicaoPagamento === `3`) {
  console.log(precoEtiqueta);
} else {
  console.log(precoEtiqueta + precoEtiqueta * 0.1);
}
