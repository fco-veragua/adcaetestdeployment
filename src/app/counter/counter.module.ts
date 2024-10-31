import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
    // tengo que declarar la funcionalidad que voy a usar
    declarations: [
        CounterComponent
    ],
    // exponer el componente para poder ser usado fuera de su módulo (scope)
    exports: [
        CounterComponent
    ]
})
export class CounterModule { }