import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Creado por <b>Raquel Díaz</b> y <b>Javi Cañadilla</b>
    </span>
  `,
})
export class FooterComponent {
}
