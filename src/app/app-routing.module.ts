import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NgModule } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent,
    pathMatch: 'full'
  },
  { path: 'formulario', component: FormularioComponent,
  },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
