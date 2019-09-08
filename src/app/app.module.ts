import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PerfilComponent } from './perfil/perfil.component';

import { BotonBusquedaComponent } from './boton-busqueda/boton-busqueda.component';
import { ImputBusquedaComponent } from './imput-busqueda/imput-busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FiltrosBusquedaComponent } from './filtros-busqueda/filtros-busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent,
    PerfilComponent,
    BotonBusquedaComponent,
    ImputBusquedaComponent,
    ResultadosComponent,
    FiltrosBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
