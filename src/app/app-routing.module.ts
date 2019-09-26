import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NgModule } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'busqueda', component: BusquedaComponent, pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent, pathMatch: 'full'},
  { path: 'formulario', component: FormularioComponent, pathMatch: 'full' },

];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
