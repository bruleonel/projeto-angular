import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-prouct-list',
  templateUrl: './prouct-list.component.html',
  styleUrls: ['./prouct-list.component.scss']
})
export class ProuctListComponent implements OnInit {

  products: Array<Product> = [
    {
      id: 1,
      description: 'Iphone 11',
      price: 3500,
      imagem: "https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/64/1164876_smartphone-apple-iphone-11-64gb-4gb-ram-camera-dupla-frontal-12mp-tela-6-1-preto-ms_m9_638016079378850811.jpg"
    },
    {
      id: 2,
      description: 'Iphone 12',
      price: 4000,
      imagem: "https://m.media-amazon.com/images/I/41kBmL3zaZL._AC_SX522_.jpg"
    },
    {
      id: 3,
      description: 'Iphone 13',
      price: 4500,
      imagem: "https://a-static.mlcdn.com.br/800x560/apple-iphone-13-pro-128gb-prateado-tela-61-12mp-ios/magazineluiza/233010200/219a5403c142ce1fd9dece5a760a2163.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }
}
