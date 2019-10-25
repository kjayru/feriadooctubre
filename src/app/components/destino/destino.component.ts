import { SlickCarouselModule, SlickCarouselComponent } from 'ngx-slick-carousel';
import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { OfertasService } from './../../services/ofertas.service';

declare var $: any;

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html'
})

export class DestinoComponent  {
  deviceInfo = null;
  isMobile = null;
  isTablet = null;
  isDesktopDevice = null;


  slideConfig = {
    dots: false,
  	arrows: false,
  	speed: 300,
  	slidesToShow: 3,
  	variableWidth: true,
  	responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            focusOnSelect: true,
            infinite: false,
            arrows: false
          }

        }
    ]
  };

  constructor( private deviceService: DeviceDetectorService, private ofertas: OfertasService, private router2: Router) {
    this.epicFunction();
    this.getpath();
  }

  epicFunction() {

    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();

  }
  getOferta(id: string) {
      this.router2.navigate(['ofertas/', id]);
      this.getpath();
  }
  getDestin(id: string) {
      this.router2.navigate(['destinos/', id]);
      this.getpath();

  }

  getpath() {
    let path =  window.location.href;

     $(".wrapper-lugares-item").removeClass("active");
     if(path.includes('lambayeque')) {
      $("#lambayeque").addClass("active");
      $(".slick-track").css("transform","translate3d(39px, 0px, 0px)");
    }
    if(path.includes('la-libertad')) {
      $("#la-libertad").addClass("active");
      $(".slick-track").css("transform","translate3d(-159px, 0px, 0px)");
    }
    if(path.includes('ucayali')) {
      $("#ucayali").addClass("active");
      $(".slick-track").css("transform","translate3d(-357px, 0px, 0px)");
    }
    if(path.includes('junin')) {
      $("#junin").addClass("active");
      $(".slick-track").css("transform","translate3d(-555px, 0px, 0px)");
    }
    if(path.includes('arequipa')) {
      $("#arequipa").addClass("active");
      $(".slick-track").css("transform","translate3d(-753px, 0px, 0px)");
    }
    if(path.includes('moquegua')) {
      $("#moquegua").addClass("active");
      $(".slick-track").css("transform","translate3d(-951px, 0px, 0px)");
    }
  }
}
