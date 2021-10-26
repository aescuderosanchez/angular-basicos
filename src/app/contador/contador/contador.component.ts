/**
 * Clase con los componentes del contador
 */
import { Component } from '@angular/core';
@Component({
    selector: 'app-contador',
    template: `
    <!-- Para mostrar el título del class Appcomponent -->
<h1>{{titulo}}</h1>
<h3>La base es: <strong> {{base}} </strong></h3>
<!-- Botones -->
<!-- Para incrementar o decrementar el número en el botón utilizamos el método click -->
<!-- Llamamos al método acumular del class AppComponent -->
<button (click)="acumular(base)"> + {{base}}</button>
<span>{{numero}}</span>
<button (click)="acumular(-base)"> - {{base}}</button>
    `
})

export class ContadorComponent {
 // Nombre del proyecto
 titulo:string = 'Contador App';
 //Para mantener el estado del contador
 numero:number = 10;

 base: number = 5;
 //Método para sumar y restar un valor al pulsar el botón + o -
 acumular(valor:number){
   this.numero += valor;
 }
}