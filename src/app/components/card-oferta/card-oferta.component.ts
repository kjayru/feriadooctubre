import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-oferta',
  templateUrl: './card-oferta.component.html'
})
export class CardOfertaComponent  {
  @Input() items: any[] = [];

  constructor(private router: Router) {

   }

}
