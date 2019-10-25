import { Routes } from '@angular/router';
import { PaginaComponent } from './components/pagina/pagina.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';


export const ROUTES: Routes = [
  { path: '', component: PaginaComponent },
  { path: 'destinos/:id', component: DestinosComponent },
  { path: 'ofertas/:id', component: OfertasComponent },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
