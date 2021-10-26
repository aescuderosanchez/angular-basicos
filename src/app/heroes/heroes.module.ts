import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

//Agrupa todos los componentes que tienen los héroes
@NgModule({
    //Qué componentes tiene el módulo
    declarations: [HeroeComponent, ListadoComponent],
    //Módulos
    imports: [
        CommonModule //--> Se utiliza para importar el ngFor y el ngIf
    ],
    //Qué cosas quiero que sean visibles fuera del módulo
    exports: [ListadoComponent],
    
})
export class HeroesModule {

}