import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-nombre-producto-renderer',
  templateUrl: './nombre-producto-renderer.component.html',
  styleUrls: ['./nombre-producto-renderer.component.scss']
})
export class NombreProductoRendererComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: any;
  @Input() rowData: any;


  constructor() { }

  ngOnInit(): void {
    console.log(this.value);
    this.renderValue = this.value.nombre;
  }

}
