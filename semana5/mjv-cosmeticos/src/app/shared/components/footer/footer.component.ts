import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  telefone = "11123456789";
  constructor() {} // Ajuda com o services
  ngOnInit(): void { }
}
