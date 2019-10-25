import { OfertasService } from './../../services/ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { MetaServiceService } from 'src/app/services/meta-service.service';

declare var $: any;

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html'
})
export class OfertasComponent implements OnInit {

  resultados: any = {};
  slideConfig: any;
  loading: boolean;

  constructor(private router: ActivatedRoute,
              private ofertas: OfertasService,
              private router2: Router,
              private titleService: Title,
              private meta: Meta,
              private metaService: MetaServiceService
              ) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getOffer(params.id);
      this.loading = false;
    });
   // this.getpath();

  }

  getHome() {
    this.router2.navigate(['']);
    $("LINK[rel='canonical']").remove();
    this.metaService.createCanonicalURL("http://www.ytuqueplanes.com/feriado-largo-octubre");
  }


  getOffer(id: string) {
    this.loading = true;
    this.ofertas.getQuery(id).subscribe( data => {

      this.resultados = data;
      this.loading = false;
    });
    console.log("oferta 4");
    this.getpath();
  }

  getOferta(id: string) {
    this.loading = true;

    this.ofertas.getQuery(id).subscribe( data => {
      this.resultados = data;
      this.loading = false;
      this.router2.navigate(['ofertas/', id]);
    });
   // this.getpath();

  }

  jugar() {
    const modal = document.getElementById('modal_juego');
    modal.classList.add('active');
 }

 getDestin(id: string) {
  this.router2.navigate(['destinos/', id]);
  //this.getpath();

}

 ngOnInit() {

    $(".wrapper-lugares-item").on('click',function(){

      $(".wrapper-lugares-item").removeClass("active");
      $(this).addClass("active");
    });


    this.slideConfig = {
      centerMode: false,
      dots: false,
      arrows: true,
      speed: 300,
      infinite: false,
      slidesToShow: 5,
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

  }


  getpath() {
    let path =  window.location.href;

    $(".wrapper-lugares-item").removeClass("active");

    $("LINK[rel='canonical']").remove();
    if(path.includes('lambayeque')) {
      $("#lambayeque").addClass("active");

      this.titleService.setTitle("Ofertas para Lambayeque durante este feriado largo ✈🇵🇪");
      this.meta.updateTag({name: 'description', content: 'Aprovecha las mejores ofertas para Lambayeque gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});

      this.meta.updateTag({property: 'og:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/lambayeque'});
      this.meta.updateTag({property: 'og:title', content:'Las mejores ofertas para este feriado largo en lambayeque gracias YTQP ✈'});
      this.meta.updateTag({property: 'og:description', content:'Aprovecha las mejores ofertas para Lambayeque gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});
      this.meta.updateTag({property: 'og:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

      this.meta.updateTag({name: 'twitter:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/lambayeque'});
      this.meta.updateTag({name: 'twitter:title', content:'Las mejores ofertas para este feriado largo en lambayeque gracias YTQP ✈'});
      this.meta.updateTag({name: 'twitter:description', content:'Aprovecha las mejores ofertas para Lambayeque gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});
      this.meta.updateTag({name: 'twitter:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

      this.metaService.createCanonicalURL("http://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/lambayeque");
    }
    if(path.includes('la-libertad')) {

      $("#la-libertad").addClass("active");

      this.titleService.setTitle("Ofertas para la Libertad durante este feriado largo ✈🇵🇪 ");
      this.meta.updateTag({name: 'description', content: 'Aprovecha las mejores ofertas para La Libertad gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});

      this.meta.updateTag({property: 'og:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/la-libertad'});
      this.meta.updateTag({property: 'og:title', content:'Las mejores ofertas para este feriado largo en la Libertad gracias YTQP ✈'});
      this.meta.updateTag({property: 'og:description', content:'Aprovecha las mejores ofertas para la Libertad gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});
      this.meta.updateTag({property: 'og:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

      this.meta.updateTag({name: 'twitter:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/la-libertad'});
      this.meta.updateTag({name: 'twitter:title', content:'Las mejores ofertas para este feriado largo en la Libertad gracias YTQP ✈'});
      this.meta.updateTag({name: 'twitter:description', content:'Aprovecha las mejores ofertas para la Libertad gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});
      this.meta.updateTag({name: 'twitter:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

      this.metaService.createCanonicalURL("http://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/la-libertad");
    }

    if(path.includes('ucayali')) {
      $("#ucayali").addClass("active");

      this.titleService.setTitle("Ofertas para Ucayali durante este feriado largo ✈🇵🇪 ");
      this.meta.updateTag({name: 'description', content: 'Aprovecha las mejores ofertas para Ucayali gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});

      this.meta.updateTag({property: 'og:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/ucayali'});
      this.meta.updateTag({property: 'og:title', content:'Las mejores ofertas para este feriado largo en Ucayali gracias YTQP ✈'});
      this.meta.updateTag({property: 'og:description', content:'Aprovecha las mejores ofertas para Ucayali gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});
      this.meta.updateTag({property: 'og:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

      this.meta.updateTag({name: 'twitter:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/ucayali'});
      this.meta.updateTag({name: 'twitter:title', content:'Las mejores ofertas para este feriado largo en la Libertad gracias YTQP ✈'});
      this.meta.updateTag({name: 'twitter:description', content:'Aprovecha las mejores ofertas para la Libertad gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});
      this.meta.updateTag({name: 'twitter:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

      this.metaService.createCanonicalURL("http://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/ucayali");
    }
    if(path.includes('junin')) {
      $("#junin").addClass("active");

      this.titleService.setTitle("Ofertas para Junín durante este feriado largo ✈🇵🇪 ");
      this.meta.updateTag({name: 'description', content: 'Aprovecha las mejores ofertas para Junín gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});

      this.meta.updateTag({property: 'og:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/junin'});
      this.meta.updateTag({property: 'og:title', content:'Las mejores ofertas para este feriado largo en Junín gracias YTQP ✈'});
      this.meta.updateTag({property: 'og:description', content:'Aprovecha las mejores ofertas para Junín gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});
      this.meta.updateTag({property: 'og:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

      this.meta.updateTag({name: 'twitter:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/junin'});
      this.meta.updateTag({name: 'twitter:title', content:'Las mejores ofertas para este feriado largo en Junín gracias YTQP ✈'});
      this.meta.updateTag({name: 'twitter:description', content:'Aprovecha las mejores ofertas para Junín gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});
      this.meta.updateTag({name: 'twitter:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

      this.metaService.createCanonicalURL("http://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/junin");

    }
    if(path.includes('arequipa')) {
      $("#arequipa").addClass("active");

      this.titleService.setTitle("Ofertas para Arequipa durante este feriado largo ✈🇵🇪 ");
      this.meta.updateTag({name: 'description', content: 'Aprovecha las mejores ofertas para Arequipa gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});

      this.meta.updateTag({property: 'og:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/arequipa'});
      this.meta.updateTag({property: 'og:title', content:'Las mejores ofertas para este feriado largo en Arequipa gracias YTQP ✈'});
      this.meta.updateTag({property: 'og:description', content:'Aprovecha las mejores ofertas para Arequipa gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});
      this.meta.updateTag({property: 'og:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

      this.meta.updateTag({name: 'twitter:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/arequipa'});
      this.meta.updateTag({name: 'twitter:title', content:'Las mejores ofertas para este feriado largo en Arequipa gracias YTQP ✈'});
      this.meta.updateTag({name: 'twitter:description', content:'Aprovecha las mejores ofertas para Arequipa gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});
      this.meta.updateTag({name: 'twitter:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

      this.metaService.createCanonicalURL("http://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/arequipa");
    }
    if(path.includes('moquegua')) {
      $("#moquegua").addClass("active");

      this.titleService.setTitle("Ofertas para Moquegua durante este feriado largo ✈🇵🇪 ");
      this.meta.updateTag({name: 'description', content: 'Aprovecha las mejores ofertas para Moquegua gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});

      this.meta.updateTag({property: 'og:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/moquegua'});
      this.meta.updateTag({property: 'og:title', content:'Las mejores ofertas para este feriado largo en Moquegua gracias YTQP ✈'});
      this.meta.updateTag({property: 'og:description', content:'Aprovecha las mejores ofertas para Moquegua gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});
      this.meta.updateTag({property: 'og:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

      this.meta.updateTag({name: 'twitter:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/moquegua'});
      this.meta.updateTag({name: 'twitter:title', content:'Las mejores ofertas para este feriado largo en Moquegua gracias YTQP ✈'});
      this.meta.updateTag({name: 'twitter:description', content:'Aprovecha las mejores ofertas para Moquegua gracias a Ytuqueplanes.com . Entra aquí para conocer los descuentos.'});
      this.meta.updateTag({name: 'twitter:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

      this.metaService.createCanonicalURL("http://www.ytuqueplanes.com/feriado-largo-octubre/#/ofertas/moquegua");
    }

    var element = document.getElementById('body');
    element.scrollIntoView();
  }


}
