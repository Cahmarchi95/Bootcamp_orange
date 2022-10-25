//desafio média

const nota_1 = 7;
const nota_2 = 7;
const nota_3 = 8;
const media = (nota_1 + nota_2 + nota_3) / 3;
console.log(media.toFixed(2));

if (media < 5) {
  console.log("Reprovado");
} else if (media >= 5 && media <= 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}
