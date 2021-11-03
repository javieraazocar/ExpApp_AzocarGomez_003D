import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RespuestaEjercicios } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SaludService {

  constructor(private http: HttpClient) { }

  getEjercicioInfo()
  {
    return this.http.get<RespuestaEjercicios>('https://wger.de/api/v2/exerciseimage/?format=json');
  }
}
