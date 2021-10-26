import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';

//Tarea: Crear un módulo llamado contadorModule,
//declaraciones y exportaciones
import { HeroesModule } from './heroes/heroes.module';

//EL OBJETIVO DE LOS MÓDULOS ES AYUDARNOS A AGRUPAR COMPONENTES QUE TIENEN SENTIDO ENTRE SÍ
//2 objetivos: Encapsular las cosas y llevar la carga perezosa del programa
//Decorador que recibe información
@NgModule({
  //Declaraciones sobre los componentes que se están utilizando
  declarations: [
    AppComponent,
    //ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
