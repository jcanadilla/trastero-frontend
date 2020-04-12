import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-categoria-badge',
  templateUrl: './categoria-badge.component.html',
  styleUrls: ['./categoria-badge.component.scss']
})
export class CategoriaBadgeComponent implements OnInit {

  @Input()
  texto: string
  @Input()
  color: string
  @Input()
  posicion: string

  constructor() { }

  ngOnInit(): void {
    console.log(this.texto)
    console.log(this.color)
    console.log(this.posicion)
  }

}
