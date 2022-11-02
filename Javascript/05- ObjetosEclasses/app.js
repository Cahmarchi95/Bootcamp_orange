//Objetos (chave e valor)

/*const pessoa = {
  nome: "Caroline M Petherson",
  idade: 27,
  cidade: "São Paulo",
  descrever: function () {
    console.log(
      `Meu nome é ${this.nome} , tenho ${this.idade} anos e moro em ${this.cidade}`
    );
  },
};

//incrementar o objeto dinamicamente
//pessoa.altura = 1.72;

//deletar propriedade de forma dinamica
//delete pessoa.nome;

//chamando a função
//pessoa.descrever();

//acessar através de uma string um atributo do objeto (é só utilizar o mesmo nome);
//console.log(pessoa["cidade"]);

//classe é uma definição do que deve ser um objeto (Pessoa)
//instância é uma ocorrência daquele objeto (carol)

//Classe é um modelo geral que fica dinâmico podendo usar a mesma classe para várias pessoas diferentes por exemplo.

class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
    this.anoDeNascimento = 2022 - idade;
  }

  descrever() {
    console.log(
      `Meu nome é ${this.nome} , tenho ${this.idade} anos e moro em ${this.cidade}`
    );
  }
} */

/*atribuindo valores para a classe
const carol = new Pessoa();
carol.nome = "Caroline";
carol.idade = 27;
carol.cidade = "São Paulo";
console.log(carol);
carol.descrever();

//usando o constructor
const carol = new Pessoa("Caroline", 27, "São Paulo");
carol.descrever();
console.log(carol);*/

//Exercício comparando idades

class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} , tenho ${this.idade} anos`);
  }
}

function comparandoIdades(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`A ${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`A ${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  }
}

const mari = new Pessoa("Mariane", 27);
const carol = new Pessoa("Caroline", 27);

comparandoIdades(mari, carol);
