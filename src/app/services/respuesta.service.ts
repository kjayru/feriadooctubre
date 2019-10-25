import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  constructor(private http: HttpClient) { }

  getRespuesta(answer_id: string, id: string) {


   const url = `http://landings.hww-dev.com/api/verificacion/${id}/${answer_id}`;

  const headers = new HttpHeaders({
    'Authorization' : 'Bearer PAoHJDJsI4ABjcCkgbMGhmH0lj2nKy8CznxndVeVoKfb939paSg1k1Wj7tiH'
  });

   return this.http.get(url, {headers});
  }
}
