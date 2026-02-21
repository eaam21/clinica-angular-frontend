import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Paciente } from '../model/Paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private baseUrl = 'http://localhost:8100/registro';
  private http = inject(HttpClient);
  constructor() { }

  listar(){
        return this.http.get<Paciente[]>(`${this.baseUrl}/listar`)
  }
}
