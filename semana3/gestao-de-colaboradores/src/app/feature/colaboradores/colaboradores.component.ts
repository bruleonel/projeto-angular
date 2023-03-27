import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent implements OnInit {

  titulo = "Lista de Colaboradores";

  colaborador1 = {
    id: 1,
    nome: "Nathan Carlos Exercicio",
    salario: 4500,
    cargo: "Dev PI"
  }

  colaborador2 = {
    id: 2,
    nome: "Bruna Leonel",
    salario: 3500,
    cargo: "Dev Júnior Front End"
  }

  colaborador3 = {
    id: 3,
    nome: "Giulianno Leonel",
    salario: 4500,
    cargo: "QA"
  }

  colaborador4 = {
    id: 4,
    nome: "Daiane Lima",
    salario: 3500,
    cargo: "Dev Jr. Front End "
  }

  colaborador5 = {
    id: 5,
    nome: "Julia Leonel",
    salario: 1500,
    cargo: "Menor Aprendiz"
  }

  colaborador6 = {
    id: 6,
    nome: "Romano Pasqualotto",
    salario: 4500,
    cargo: "Dev Pleno"
  }

  colaborador7 = {
    id: 7,
    nome: "Janete de Conto",
    salario: 3500,
    cargo: "Tech Lider"
  }

  colaborador8 = {
    id: 8,
    nome: "Zaira de Conto",
    salario: 3500,
    cargo: "Tech Lider"
  }

  colaborador9 = {
    id: 9,
    nome: "Amanda Lima",
    salario: 5500,
    cargo: "Dev Senior"
  }

    colaborador10 = {
    id: 10,
    nome: "Nathalie de Moura",
    salario: 4500,
    cargo: "Dev Pleno"
  }

  constructor() { }

  ngOnInit(): void {

  }
}
