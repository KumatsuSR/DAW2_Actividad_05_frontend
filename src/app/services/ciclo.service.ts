import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciclo } from '../models/ciclo.model';

const baseUrl = 'http://localhost:8090/rest/ciclo';

@Injectable({
  providedIn: 'root'
})

export class CicloService {

  constructor(private htttp:HttpClient) { }

  listadoCiclo():Observable<Ciclo[]>{
    return this.htttp.get<Ciclo[]>(baseUrl);
  }
}
