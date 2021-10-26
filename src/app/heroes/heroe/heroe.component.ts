import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    nombre:string ='IronMan';
    edad:number = 48;

    //Obtenemos el nombre en mayusculas
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }
    //Método que obtiene la información del héroe
    obtenerNombre(): string{
        //Describimos un template literal
        return `${ this.nombre } - ${ this.edad } `;
        //Sería lo mismo que poner...
        //return this.nombre +  ' - ' + this.edad;
    }

    //Método que cambia el nombre del héroe al pulsar el botón
    cambiarNombre():void{
        this.nombre = 'SpiderMan';
    }
    //Método que cambia la edad del héroe al pulsar el botón
    cambiarEdad():void{
        this.edad = 30;
    }
}