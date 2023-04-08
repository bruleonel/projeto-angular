import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  titulo = "Maquiagem";

  exibeProduto = true;

  dataHoje = new Date;

  produto1 = {
    descricao: "Máscara para cílios Waterproof Fabulous Eyes",
    preco: 433.90,
    quantidade: 1,
    imagem: "https://www.carolinaherrera.com/cdn-cgi/image/q=80,format=auto,fit=contain,width=200/medias/sys_master/images/ha7/h16/9557159673886/9557159608350/9557159608350.jpg"
  };

  produtos: Array<Produto> = [
    {
      descricao: "Máscara para cílios Waterproof Fabulous Eyes",
      preco: 433.90,
      quantidade: 0,
      imagem: "https://www.carolinaherrera.com/cdn-cgi/image/q=80,format=auto,fit=contain,width=200/medias/sys_master/images/ha7/h16/9557159673886/9557159608350/9557159608350.jpg",
      disponivel: false
    },
    {
      descricao: "Base The Soft Fluid",
      preco: 890,
      quantidade: 24,
      imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT0xubtZBwhOsUr6E22XGRVDPIBJQsd816E8aXNf_7TbDxgaAH2MPxbXrsc6qKO3-C4oWpliNvxs_BbrffCFUTnQqPUJYV4L4qHE9YQya2QIJeVhARbTbjHFw&usqp=CAE",
      disponivel: true
    },
    {
      descricao: "Blush L'ORCHIDÉE 3 CORAIL",
      preco: 159.90,
      quantidade: 16,
      imagem: "https://th.bing.com/th/id/R.f5c2b6ccf5f0daf928a53fb4616e5359?rik=ThqFoG19Eec8iQ&riu=http%3a%2f%2fpe.globedia.com%2fimagenes%2fnoticias%2f2015%2f3%2f11%2fmac-eyes-coleccion-paletas-sombras-primavera-2015_5_2224566.jpg&ehk=UUg4PiKJsnQj%2bFnvxZtsznk7hwSXmixerqWwsP8SPYQ%3d&risl=&pid=ImgRaw&r=0",
      disponivel: true
    },
    {
      descricao: "Batom líquido Velvet",
      preco: 259,
      quantidade: 29,
      imagem: "https://www.carolinaherrera.com/cdn-cgi/image/q=80,format=auto,fit=contain,width=200/medias/?context=bWFzdGVyfGltYWdlc3wzNDUyOTB8aW1hZ2UvanBlZ3xoOTkvaDgxLzkzODMyMjQ4MzYxMjZ8YmI1NTVjMTllYjM4YTdmZWY0YmJhNmQzN2Y0MDU4YmRmNjc4NDYxYjgwNDExMDcyNmM5ZmUxMWZiYzM2NjA4MA",
      disponivel: true
    },
    {
      descricao: "Good Girl Mini Bálsamo Labial",
      preco: 503,
      quantidade: 1,
      imagem: "https://www.carolinaherrera.com/cdn-cgi/image/q=80,format=auto,fit=contain,width=200/medias/sys_master/images/images/h9f/ha8/9331522306078/9331522306078.jpg",
      disponivel: true
    },
    {
      descricao: "Paleta Sefhora - - -",
      preco: 129,
      quantidade: 0,
      imagem: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwc269b50f/images/Color%20BR/SC/Lan%C3%A7amento%2023/Paletas%20de%20Rosto/528443%20COLOR%20SHIFTER%20FACE%20-%20ROSE%20FANTASY%20ouvert_RVB_1000px.jpg?sw=400&sh=400&sm=fit",
      disponivel: false
    },
    {
      descricao: "Paleta Dior Backstage",
      preco: 503,
      quantidade: 1,
      imagem: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw57851fc5/images/hi-res-BR/3348901395052_1500px.jpg?sw=556&sh=680&sm=fit",
      disponivel: true
    },
    {
      descricao: "Fabulous Skin Highlighter ",
      preco: 459,
      quantidade: 4,
      imagem: "https://www.carolinaherrera.com/cdn-cgi/image/q=80,format=auto,fit=contain,width=200/medias/sys_master/images/images/h64/h13/9152085360670/9152085360670.jpg",
      disponivel: true
    }
  ]
  constructor() {} // Ajuda com o services
  ngOnInit(): void {
    for (const iterator of this.produtos) {

    }
  }

  precoComDesconto(preco: number) {
    return preco * 0.90;
  }

  obterDesconto() {

    return this.produto1.preco = this.produto1.preco * 0.90;
  }

  comprar() {
    alert("Produto comprado!")
  }


  passouMouse() {
    alert("Aproveite o desconto!")
  }

  pressionouTecla(event: any) {
    console.log(event.target.value);
  }

  exibeProdutoSimNao() {
    this.exibeProduto = !this.exibeProduto;
  }
}
