/* Crie um tipo para representar um objeto que contenha suas informações de nome, 
profissão, idade e uma lista de assuntos de interesse.*/

interface Pessoa { 
    nome: string;
    profissão: string;
    idade: number;
    interesses: string[];
}

/* Crie um objeto utilizando o tipo descrito no exercío 1 e o popule de acordo com 
suas informações*/

const alunos: Pessoa = { 
    nome: "Bruna",
    profissão: "desenovedora",
    idade: 31,
    interesses: ["Familia","Ciclismo"]
}


/* Faça uma função que receba como argumento um  objeto do tipo do exercício 1, e 
retorne somente a lista de assunto do objeto.
 Coloque a tipagem  tanto no argumento da função do exercício 3 quanto no tipo de 
retorno dela. */

function interesse(pessoa: Pessoa): string[] {
    return pessoa.interesses
}


/* Crie um enum para representar as matérias do curso (angular, typescript, e git)*/

enum Materias { 
    Angular = "Angular",
    Typescript = "Typescrit",
    Git = "Git"
}


/* */

interface Professor { 
    nome: string;
    materias: Materias;
}

/* */

/* */

/* */

/* */

/* */

