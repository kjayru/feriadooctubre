import { Component, OnInit } from '@angular/core';
import { MetaServiceService } from 'src/app/services/meta-service.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html'
})
export class PaginaComponent implements OnInit {

  constructor( private metaService: MetaServiceService) { }

  ngOnInit() {

  }

}
