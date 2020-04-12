import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import * as moment from 'moment';

@Component({
  selector: 'ngx-fecha-caducidad-renderer',
  templateUrl: './fecha-caducidad-renderer.component.html',
  styleUrls: ['./fecha-caducidad-renderer.component.scss']
})
export class FechaCaducidadRendererComponent implements ViewCell, OnInit {

  fechaCaducidad: moment.Moment;
  renderFechaCaducidad: string;
  tiempoHastaCaducar: string;

  @Input() value: any;
  @Input() rowData: any;


  constructor() { }

  ngOnInit(): void {
    moment.locale(navigator.language);
    const hoy = moment();
    this.fechaCaducidad = moment(this.value);
    this.renderFechaCaducidad = this.fechaCaducidad.format('ll')
    this.tiempoHastaCaducar = hoy.to(this.fechaCaducidad);
  }

}
