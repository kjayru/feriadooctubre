import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor() { }

  ngOnInit() {

     $("#burger").on("click",function() {
      $(this).toggleClass( "active" );

      $("#mobile_menu_item").toggleClass("active");

     });

     $("#mobile_menu_item").on("click",function() {
      $(this).toggleClass( "active" );

      $("#burger").toggleClass("active");

     });



  }


  callModal(){
    const modal = document.getElementById('modal_juego');
    modal.classList.add('active');
  }
}
