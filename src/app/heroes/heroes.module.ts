import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";

@NgModule({
    // declaración de los componentes vinculados al módulo
    declarations: [
        HeroComponent,
        ListComponent
    ],
    // exponer componentes fuera del módulo (scope)
    exports: [
        HeroComponent,
        ListComponent
    ],
    // CommonModule: recordar importar si usamos en los componentes elementos de este módulo como ngIf...
    // Si no está organizado en módulos (es decir, el componente cuelga de la raíz "app module", seguro que este módulo general incorpora el BrowserModule, también válido para usar las directivas mencionadas...)
    // importación módulos externos para ser usados...
    imports: [
        CommonModule
    ]
})
export class HeroesModule { }