import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PerfilComponent } from './components/perfil/perfil.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'formulario', component: FormularioComponent },

];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
