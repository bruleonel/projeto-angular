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


/* Crie um tipo para representar os professores, contendo nome e uma lista de cada 
um.*/

interface Professor { 
    nome: string;
    materias: Materias[];
}

/* 7- Crie os objetos Allan e Natan utilizando os tipos dos exercício 5 e 6  Nathan
= Angular e git, Alan = Angular, typescript e git*/

export const alan: Professor = {
    nome: "Alan",
    materias: [Materias.Angular, Materias.Git, Materias.Typescript]
}

const nathan: Professor = {
    nome: "Nathan",
    materias: [Materias.Angular, Materias.Git]
}

/* 8- Declare e popule um array com objetos do exercício anterior */

const professor: Professor[] = [alan, nathan]

/* 9- Faça uma função que recebe um argumento de um array de professor e retorne um 
novo array de strings contendo somente nome de professores */

const nomeProfessor = (professor: Professor) => professor.nome
function retornaNomeProfessor(professor: Professor[]): string[] {
    return professor.map(nomeProfessor)
}

console.log(retornaNomeProfessor(professor));
/* 10- Faça uma função que recebe um argumento de um array de professores e retorne
um array de materiais */

function retornaMateriasProfessor(professor: Professor[]): Materias[] {
    return professor.map(p => p.materias).reduce<Materias[]>((accumulator, materias) => {
        return accumulator.concat()
    }, [])
}

console.log(retornaMateriasProfessor(professor));

/* 11- Faça uma função que recebe um argumento de um array de professores e retorne
o primeiro professor encontrado que dê aula de typescript*/

/* */

