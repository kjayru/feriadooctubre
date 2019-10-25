import { RegistroService } from './../../services/registro.service';
import { PreguntasService } from './../../services/preguntas.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../models/usuario';


declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
  answers: any[] = [];
  result: boolean;
  loading: boolean;
  model = new Usuario();
  submitted = false;
  error = {};
  respuesta: any = {};
  gracias: boolean;
  nrSelect = "Dni";

  formulario = document.getElementById('modal_form');
  exito = document.getElementById('modal_exito');

  constructor(private preguntas: PreguntasService, private registro: RegistroService) {
    this.preguntas.getPregunta().subscribe((data: any) => {
      this.answers = data;
    });
  }

  ngOnInit(){
    $('#tipodocumento option[value="Dni"]').attr("selected",true);
  }


  jugar() {
    const modal = document.getElementById('modal_juego');
    modal.classList.add('active');
  }

  closemodal() {
    const modal = document.getElementById('modal_juego');
    modal.classList.remove('active');

    const listaPreguntas = document.querySelectorAll('.question');

    Array.from(listaPreguntas).forEach((link, i) => {
      link.classList.remove('activo');
    });

    document.getElementById('ques0').classList.add('activo');
    document.getElementById("modal_exito").classList.remove("active");
    document.getElementById("modal_preguntas").classList.remove("inactive");
    $(".wrapper-modal-form").hide();
  }


  procesaPropagar(mensaje) {

    if (mensaje === 1) {
      this.result = true;
      const listaPreguntas = document.getElementById('modal_preguntas');
      listaPreguntas.classList.add('inactive');

    } else {
      this.result = false;
      const opcion1 = document.getElementById('opcion1');
      const opcion2 = document.getElementById('opcion2');

      opcion1.classList.add('inactive');
      opcion2.classList.add('active');

    }

  }

  nuevaPregunta() {


    const listaPreguntas = document.querySelectorAll('.question');
    let j = 0;

    Array.from(listaPreguntas).forEach((link, i) => {

      if (link.classList.contains('activo')) {
         j = i + 1;
         link.classList.remove('activo');
         return false;
      }

    });


    if(j === 0){
       document.getElementById('ques0').classList.add('activo');
      }
    if(j === 1){
        document.getElementById('ques1').classList.add('activo');
      }
    if(j === 2){
        document.getElementById('ques2').classList.add('activo');
      }
    if(j === 3){
        document.getElementById('ques3').classList.add('activo');
      }
    if(j === 4){
        document.getElementById('ques4').classList.add('activo');
      }
    if(j === 5){
        document.getElementById('ques5').classList.add('activo');
      }


  }

  nuevaJuego() {

    const opcion2 = document.getElementById('opcion2');
    opcion2.classList.remove('active');

    const listaunica = document.getElementById('listaunica');
    listaunica.classList.remove('error');

    const listop = document.querySelectorAll('.op');
    Array.from(listop).forEach(link => {

      link.classList.remove('error');
    });

    const opcion1 = document.getElementById('opcion1');
    opcion1.classList.remove('inactive');


    const listaPreguntas = document.querySelectorAll('.question');
    let j = 0;

    Array.from(listaPreguntas).forEach((link, i) => {

      if (link.classList.contains('activo')) {
         j = i+1;

         link.classList.remove('activo');


         return false;
      }

    });

    console.log(j);
    if(j === 0){
       document.getElementById('ques0').classList.add('activo');
      }
    if(j === 1){
        document.getElementById('ques1').classList.add('activo');
      }
    if(j === 2){
        document.getElementById('ques2').classList.add('activo');
      }
    if(j === 3){
        document.getElementById('ques3').classList.add('activo');
      }
    if(j === 4){
        document.getElementById('ques4').classList.add('activo');
      }
    if(j === 5){
        document.getElementById('ques5').classList.add('activo');
      }

  }

  onSubmit() {
    this.submitted = true;
    this.gracias = true;
    this.loading = true;
    return this.registro.refForm(this.model).subscribe(
      data => {
        this.model = data;
        this.respuesta = data;

        if (this.respuesta.rpta === "ok") {
              this.gracias = true;
              document.getElementById("modal_exito").classList.add("active");

              document.getElementById("modal_form").classList.remove("active");
              this.loading = false;
          }
      },
      error => {
        this.error = error;
        this.loading = false;
      }

    );
  }


}
