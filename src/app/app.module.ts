import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PerfilComponent } from './perfil/perfil.component';

import { BotonBusquedaComponent } from './busqueda/boton-busqueda/boton-busqueda.component';
import { ResultadosComponent } from './busqueda/resultados/resultados.component';
import { FiltrosBusquedaComponent } from './busqueda/filtros-busqueda/filtros-busqueda.component';
import { BusquedaComponent } from './busqueda/busqueda.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent,
    PerfilComponent,
    BotonBusquedaComponent,
    ResultadosComponent,
    FiltrosBusquedaComponent,
    BusquedaComponent
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
