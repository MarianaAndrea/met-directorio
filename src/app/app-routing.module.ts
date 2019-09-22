import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
