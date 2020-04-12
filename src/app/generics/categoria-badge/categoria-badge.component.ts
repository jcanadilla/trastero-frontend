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
  posicion: string //'top left', 'top right', 'bottom left', 'bottom right', 'top start', 'top end', 'bottom start', 'bottom end'

  constructor() { }

  ngOnInit(): void {
  }

}
