import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';
import{CommonModule} from "@angular/common"
@NgModule({

     //Qué componentes tiene el módulo
     declarations: [ContadorComponent],
     //Módulos
     imports: [
         CommonModule //--> Se utiliza para importar el ngFor y el ngIf
     ],
     //Qué cosas quiero que sean visibles fuera del módulo
     exports: [ContadorComponent],
})

export class ContadorModule{

}