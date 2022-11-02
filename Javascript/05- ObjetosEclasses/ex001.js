//EX01
/*class Carro {
  marca;
  cor;
  gastoPorKm;
  constructor(marca, cor, gastoPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoPorKm = gastoPorKm;
  }
  valordoPercurso(percursoKm, precoCombustivel) {
    return precoCombustivel * percursoKm * this.gastoPorKm;
  }
}*/

//const gol = new Carro("fiat", "vermelho", 1 / 12);
//console.log(gol.valordoPercurso(100, 5));
//const siena = new Carro("fiat", "prata", 1 / 10);
//console.log(siena.valordoPercurso(50, 5));

//EX02

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / (this.altura * this.altura);
  }

  classificarImc() {
    const imc = this.calcularImc();
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      return "Acima do peso";
    } else if (imc >= 30 && imc < 40) {
      return "Obeso";
    } else {
      return "Obesidade grave";
    }
  }
}

//const jose = new Pessoa("José", 70, 1.75);
//console.log(jose);
//console.log(jose.calcularImc());
const carol = new Pessoa("Carol", 55, 1.72);
//console.log(carol.calcularImc());
console.log(carol.classificarImc());
