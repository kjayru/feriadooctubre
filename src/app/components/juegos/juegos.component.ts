
import { Component } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html'
})
export class JuegosComponent  {

  constructor() { }

 jugar() {
      const modal = document.getElementById('modal_juego');
      modal.classList.add('active');
 }
}
