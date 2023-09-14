import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  titulo:string = ""

  @Input()
  texto:string= ""

  @Input()
  cardImg:string = ""
  @Input()
  cardTitulo:string = ""
  @Input()
  cardTexto:string = ""
  
  @Input()
  AsideImg:string = ""

  @Input()
  AsideTexto:string = ""
}
