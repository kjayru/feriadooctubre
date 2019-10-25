import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { BannerComponent } from './components/banner/banner.component';
import { DestinoComponent } from './components/destino/destino.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { DescuentosComponent } from './components/descuentos/descuentos.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';

import { ROUTES } from './app-routing.module';
import { CardOfertaComponent } from './components/card-oferta/card-oferta.component';
import { CardPreguntaComponent } from './components/card-pregunta/card-pregunta.component';
import { CardErrorComponent } from './components/card-error/card-error.component';
import { CardNuevaComponent } from './components/card-nueva/card-nueva.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    PaginaComponent,
    BannerComponent,
    DestinoComponent,
    JuegosComponent,
    DescuentosComponent,
    DestinosComponent,
    OfertasComponent,
    CardOfertaComponent,
    CardPreguntaComponent,
    CardErrorComponent,
    CardNuevaComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,
    { useHash: false }),
    FormsModule,
    SlickCarouselModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
