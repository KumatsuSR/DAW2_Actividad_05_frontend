import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

const baseUrl = 'http://localhost:8090/rest/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  listadoUsuario() : Observable<Usuario[]>{
    return this.http.get<Usuario[]>(baseUrl);
  }
}
