import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  titulo = "Produtos";

  produto1 = {
    descricao: "Paleta de sombra",
    preco: 159.90,
    quantidade: 1,
    imagem: "https://th.bing.com/th/id/R.f5c2b6ccf5f0daf928a53fb4616e5359?rik=ThqFoG19Eec8iQ&riu=http%3a%2f%2fpe.globedia.com%2fimagenes%2fnoticias%2f2015%2f3%2f11%2fmac-eyes-coleccion-paletas-sombras-primavera-2015_5_2224566.jpg&ehk=UUg4PiKJsnQj%2bFnvxZtsznk7hwSXmixerqWwsP8SPYQ%3d&risl=&pid=ImgRaw&r=0"
  };

  constructor() {} // Ajuda com o services
  ngOnInit(): void {}

  precoComDesconto(preco: number) {
    return preco * 0.90;
  }

  comprar() {
    alert("Produto comprado!")
  }
}
