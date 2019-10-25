import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html'
})
export class DescuentosComponent implements OnInit  {

  slideConfig = {
    dots: false,
  	arrows: true,
  	speed: 300,
  	slidesToShow: 3,
  	variableWidth: true,
  	responsive: [
      {
        breakpoint: 1025,
        settings: {
        arrows: false,
        }
      },
      {
        breakpoint: 769,
        settings: {
          centerPadding: '40px',
          arrows: false,
          slidesToShow: 1,
        }
      }
    ]
  };

  constructor() { }

  ngOnInit() {
    $(".wrapper-lugares-item").on('click', function() {

      $(".wrapper-lugares-item").removeClass("active");
      $(this).addClass("active");
    });
  }
}
