import { RespuestaService } from './../../services/respuesta.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-pregunta',
  templateUrl: './card-pregunta.component.html'
})
export class CardPreguntaComponent  {
  @Input() preguntas: any = {};
  @Output()
  propagar = new EventEmitter<string>();

  loading: boolean;



  constructor(private _respuesta: RespuestaService) { }

  respuesta(answer_id: string, id: string,$event) {

    this.loading = true;
    this._respuesta.getRespuesta(answer_id, id).subscribe( (data: string) => {
      this.propagar.emit(data);

      if (data == '0') {
        const listaunica = document.getElementById("listaunica");
        listaunica.classList.add("error");
      }
      $event.target.classList.add("error");
      this.loading = false;
    });

  }


}
