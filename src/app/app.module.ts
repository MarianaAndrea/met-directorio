import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PerfilComponent } from './components/perfil/perfil.component';

import { BotonBusquedaComponent } from './components/boton-busqueda/boton-busqueda.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { FiltrosBusquedaComponent } from './components/filtros-busqueda/filtros-busqueda.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

import { CustomMaterialModule } from './material/custom-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent,
    PerfilComponent,
    BotonBusquedaComponent,
    ResultadosComponent,
    FiltrosBusquedaComponent,
    BusquedaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
