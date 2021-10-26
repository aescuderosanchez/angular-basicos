import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

//OnInit --> Primer ciclo de vida de angular
export class ListadoComponent {
  //Listado de héroes
  heroes:string[] = ['Spiderman','IronMan','Thor','Hulk','Capitán América','Black Widow'];
  heroeBorrado:string ='';

  borrarHeroe(){
    //Borra el primer elemento del array y lo devuelve
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
