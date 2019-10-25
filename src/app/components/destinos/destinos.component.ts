import { DestinosService } from './../../services/destinos.service';
import { Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import {  MetaServiceService } from './../../services/meta-service.service';
declare var $: any;



@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html'
})
export class DestinosComponent implements OnInit {
  @Input() item: any[] = [];
  resultados: any = {};

  loading: boolean;

  slideConfig = {

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

  constructor(private router: ActivatedRoute,
              private destinos: DestinosService,
              private router2: Router,
              private titleService: Title,
              private meta: Meta,
              private metaService: MetaServiceService
      ) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getItem(params.id);
      this.loading = false;


    });


  }


  getItem(id: string) {
    this.loading = true;
    this.destinos.getQuery(id).subscribe( data => {
      this.resultados = data;
      this.loading = false;

    });
    this.getpath();
    console.log("destion 4")
  }

  getDestino(id: string) {
    this.loading = true;

    this.destinos.getQuery(id).subscribe( data => {
      this.resultados = data;
      this.loading = false;
      this.router2.navigate(['destinos/', id]);

    });

  }

  getHome() {
    this.router2.navigate(['']);
    $("LINK[rel='canonical']").remove();
    this.metaService.createCanonicalURL("http://www.ytuqueplanes.com/feriado-largo-octubre");
  }

  jugar() {
    const modal = document.getElementById('modal_juego');
    modal.classList.add('active');
  }

  getOferta(id: string) {
      this.router2.navigate(['ofertas/', id]);

  }

  ngOnInit() {
    $(".wrapper-lugares-item").on('click',function(){
      $(".wrapper-lugares-item").removeClass("active");
      $(this).addClass("active");
    });
  }

  getpath() {
      let path =  window.location.href;

      $(".wrapper-lugares-item").removeClass("active");


      $("LINK[rel='canonical']").remove();

      if(path.includes('lambayeque')) {
        $("#lambayeque").addClass("active");

        this.titleService.setTitle("Descubre Lambayeque durante este feriado largo 😍✈🇵🇪");
        this.meta.updateTag({name: 'description', content: 'Los mejores destinos turísticos dentro del Perú gracias a Ytuqueplanes.com . Conoce aquí todas las actividades que puedes realizar dentro de Lambayeque.'});
        this.meta.updateTag({property: 'og:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/lambayeque'});
        this.meta.updateTag({property: 'og:title', content:'Descubre seis nuevos destinos para visitar durante este feriado largo 😍✈🇵🇪'});
        this.meta.updateTag({property: 'og:description', content:'Conoce aquí todas las actividades que puedes realizar dentro de Lambayeque. 🙊✈.'});
        this.meta.updateTag({property: 'og:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

        this.meta.updateTag({name: 'twitter:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/lambayeque'});
        this.meta.updateTag({name: 'twitter:title', content:'Descubre seis nuevos destinos para visitar durante este feriado largo 😍✈🇵🇪'});
        this.meta.updateTag({name: 'twitter:description', content:'Conoce aquí todas las actividades que puedes realizar dentro de Lambayeque. 🙊✈.'});
        this.meta.updateTag({name: 'twitter:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

        $(".slick-track").css("transform","translate3d(39px, 0px, 0px)");

        this.metaService.createCanonicalURL("http://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/lambayeque");
      }else if(path.includes('la-libertad')) {
        $("#la-libertad").addClass("active");

        this.titleService.setTitle("Descubre la Libertad durante este feriado largo 😍✈🇵🇪 ");
        this.meta.updateTag({name: 'description', content: 'Los mejores destinos turísticos dentro del Perú gracias a Ytuqueplanes.com . Conoce aquí todas las actividades que puedes realizar dentro de la Libertad.'});

        this.meta.updateTag({property: 'og:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/la-libertad'});
        this.meta.updateTag({property: 'og:title', content:'Descubre seis nuevos destinos para visitar durante este feriado largo 😍✈🇵🇪'});
        this.meta.updateTag({property: 'og:description', content:'Conoce aquí todas las actividades que puedes realizar dentro de la Libertad. 🙊✈.'});
        this.meta.updateTag({property: 'og:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

        this.meta.updateTag({name: 'twitter:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/la-libertad'});
        this.meta.updateTag({name: 'twitter:title', content:'Descubre seis nuevos destinos para visitar durante este feriado largo 😍✈🇵🇪'});
        this.meta.updateTag({name: 'twitter:description', content:'Conoce aquí todas las actividades que puedes realizar dentro de la Libertad. 🙊✈.'});
        this.meta.updateTag({name: 'twitter:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

        $(".slick-track").css("transform","translate3d(-159px, 0px, 0px)");

        this.metaService.createCanonicalURL("http://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/la-libertad");
      }else if(path.includes('ucayali')) {
        $("#ucayali").addClass("active");
        $(".slick-track").css("transform","translate3d(-357px, 0px, 0px)");
        this.titleService.setTitle("Descubre Ucayali durante este feriado largo 😍✈🇵🇪");
        this.meta.updateTag({name: 'description', content: 'Los mejores destinos turísticos dentro del Perú gracias a Ytuqueplanes.com . Conoce aquí todas las actividades que puedes realizar dentro de la Ucayali.'});

        this.meta.updateTag({property: 'og:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/ucayali'});
        this.meta.updateTag({property: 'og:title', content:'Descubre seis nuevos destinos para visitar durante este feriado largo 😍✈🇵🇪'});
        this.meta.updateTag({property: 'og:description', content:'Conoce aquí todas las actividades que puedes realizar dentro de Ucayali. 🙊✈.'});
        this.meta.updateTag({property: 'og:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

        this.meta.updateTag({name: 'twitter:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/ucayali'});
        this.meta.updateTag({name: 'twitter:title', content:'Descubre seis nuevos destinos para visitar durante este feriado largo 😍✈🇵🇪'});
        this.meta.updateTag({name: 'twitter:description', content:'Conoce aquí todas las actividades que puedes realizar dentro de Ucayali. 🙊✈.'});
        this.meta.updateTag({name: 'twitter:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

        this.metaService.createCanonicalURL("http://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/ucayali");

      }else if(path.includes('junin')) {
        $("#junin").addClass("active");
        this.titleService.setTitle("Descubre Junín durante este feriado largo 😍✈🇵🇪");
        this.meta.updateTag({name: 'description', content: 'Los mejores destinos turísticos dentro del Perú gracias a Ytuqueplanes.com . Conoce aquí todas las actividades que puedes realizar dentro de la Junín.'});

        this.meta.updateTag({property: 'og:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/junin'});
        this.meta.updateTag({property: 'og:title', content:'Descubre seis nuevos destinos para visitar durante este feriado largo 😍✈🇵🇪'});
        this.meta.updateTag({property: 'og:description', content:'Conoce aquí todas las actividades que puedes realizar dentro de Junín. 🙊✈.'});
        this.meta.updateTag({property: 'og:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

        this.meta.updateTag({name: 'twitter:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/junin'});
        this.meta.updateTag({name: 'twitter:title', content:'Descubre seis nuevos destinos para visitar durante este feriado largo 😍✈🇵🇪'});
        this.meta.updateTag({name: 'twitter:description', content:'Conoce aquí todas las actividades que puedes realizar dentro de Junín. 🙊✈.'});
        this.meta.updateTag({name: 'twitter:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});
        $(".slick-track").css("transform","translate3d(-555px, 0px, 0px)");

        this.metaService.createCanonicalURL("http://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/junin");
      }else if(path.includes('arequipa')) {
        $("#arequipa").addClass("active");
        this.titleService.setTitle("Descubre Arequipa durante este feriado largo 😍✈🇵🇪");
        this.meta.updateTag({name: 'description', content: 'Los mejores destinos turísticos dentro del Perú gracias a Ytuqueplanes.com . Conoce aquí todas las actividades que puedes realizar dentro de la Arequipa.'});

        this.meta.updateTag({property: 'og:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/arequipa'});
        this.meta.updateTag({property: 'og:title', content:'Descubre seis nuevos destinos para visitar durante este feriado largo 😍✈🇵🇪'});
        this.meta.updateTag({property: 'og:description', content:'Conoce aquí todas las actividades que puedes realizar dentro de Arequipa. 🙊✈.'});
        this.meta.updateTag({property: 'og:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

        this.meta.updateTag({name: 'twitter:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/arequipa'});
        this.meta.updateTag({name: 'twitter:title', content:'Descubre seis nuevos destinos para visitar durante este feriado largo 😍✈🇵🇪'});
        this.meta.updateTag({name: 'twitter:description', content:'Conoce aquí todas las actividades que puedes realizar dentro de Arequipa. 🙊✈.'});
        this.meta.updateTag({name: 'twitter:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});
        $(".slick-track").css("transform","translate3d(-753px, 0px, 0px)");

        this.metaService.createCanonicalURL("http://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/arequipa");

      }else if(path.includes('moquegua')) {

        $("#moquegua").addClass("active");
        this.titleService.setTitle("Descubre Moquegua durante este feriado largo 😍✈🇵🇪");
        this.meta.updateTag({name: 'description', content: 'Los mejores destinos turísticos dentro del Perú gracias a Ytuqueplanes.com . Conoce aquí todas las actividades que puedes realizar dentro de la Moquegua.'});

        this.meta.updateTag({property: 'og:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/moquegua'});
        this.meta.updateTag({property: 'og:title', content:'Descubre seis nuevos destinos para visitar durante este feriado largo 😍✈🇵🇪'});
        this.meta.updateTag({property: 'og:description', content:'Conoce aquí todas las actividades que puedes realizar dentro de Moquegua. 🙊✈.'});
        this.meta.updateTag({property: 'og:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

        this.meta.updateTag({name: 'twitter:url', content:'https://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/moquegua'});
        this.meta.updateTag({name: 'twitter:title', content:'Descubre seis nuevos destinos para visitar durante este feriado largo 😍✈🇵🇪'});
        this.meta.updateTag({name: 'twitter:description', content:'Conoce aquí todas las actividades que puedes realizar dentro de Moquegua. 🙊✈.'});
        this.meta.updateTag({name: 'twitter:image', content:'https://www.ytuqueplanes.com/assets/images/opengraph/open-feriado-largo.jpg'});

        $(".slick-track").css("transform","translate3d(-951px, 0px, 0px)");

        this.metaService.createCanonicalURL("http://www.ytuqueplanes.com/feriado-largo-octubre/#/destinos/moquegua");
      }else{

        this.metaService.createCanonicalURL("http://www.ytuqueplanes.com/feriado-largo-octubre");
      }





      var element = document.getElementById('body');

      element.scrollIntoView();
  }
}
