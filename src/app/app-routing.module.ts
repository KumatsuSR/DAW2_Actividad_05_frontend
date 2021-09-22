import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddModalidadComponent } from './components/add-modalidad/add-modalidad.component';
import { AddDisponibilidadComponent } from './components/add-disponibilidad/add-disponibilidad.component';


const routes: Routes = [
  { path:"addModalidad", component: AddModalidadComponent },
  { path: "addDisponibilidad", component:AddDisponibilidadComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
