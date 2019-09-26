import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NgModule } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import{ BusquedaComponent } from './components/busqueda/busqueda.component'

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent, pathMatch: 'full'},
  { path: 'formulario', component: FormularioComponent },
  { path: 'busqueda', component: BusquedaComponent },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
