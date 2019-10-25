import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }

  getQuery(item: any) {

    const url = `http://landings.hww-dev.com/api/offers/${item}`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer PAoHJDJsI4ABjcCkgbMGhmH0lj2nKy8CznxndVeVoKfb939paSg1k1Wj7tiH'
    });

    return this.http.get(url, {headers});
  }
}
