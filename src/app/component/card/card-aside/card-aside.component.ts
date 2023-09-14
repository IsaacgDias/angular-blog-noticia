import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-aside',
  templateUrl: './card-aside.component.html',
  styleUrls: ['./card-aside.component.css']
})
export class CardAsideComponent {
 @Input()
 asideImg:string = ""

 @Input()
 asideTexto:string = ""
}
