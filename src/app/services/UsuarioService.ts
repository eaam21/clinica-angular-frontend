import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8086/usuario';
  private http = inject(HttpClient);
  constructor() { }
  login(credenciales: { nombreUsuario: string; claveUsuario: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credenciales);
  }
}
