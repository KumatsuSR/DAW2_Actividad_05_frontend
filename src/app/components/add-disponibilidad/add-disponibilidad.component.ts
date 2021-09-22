import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'src/app/models/ciclo.model';
import { Disponibilidad } from 'src/app/models/disponibilidad.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CicloService } from 'src/app/services/ciclo.service';
import { DisponibilidadService } from 'src/app/services/disponibilidad.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-disponibilidad',
  templateUrl: './add-disponibilidad.component.html',
  styleUrls: ['./add-disponibilidad.component.css']
})
export class AddDisponibilidadComponent implements OnInit {

  listaCiclo : Ciclo[]= []
  listaUsuario : Usuario[] = []

  disponibilidad : Disponibilidad = {

  }

  constructor(private cicloService:CicloService,private usuarioService:UsuarioService,
    private disponibilidadService:DisponibilidadService) {
      this.cicloService.listadoCiclo().subscribe(
        ciclos => this.listaCiclo = ciclos
      );
      this.usuarioService.listadoUsuario().subscribe(
        usuarios => this.listaUsuario = usuarios
      );
     }
  
  guardar(){
    console.log(this.disponibilidad)
    this.disponibilidadService.guardarDisponibilidad(this.disponibilidad).subscribe(
      response =>{
        console.log(response.message);
        alert(response.message)},
      error =>{
        console.log(error.message);
        alert(error.message)
      }
    );
  }   

  ngOnInit(): void {
  }

}
