import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioBasicoComponent,
    FormularioReactivoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
