import { Component } from "@angular/core";

// template: especificar literalmente el código html del template
// templateUrl: definir ruta del fichero html template
@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent {
    public title: string = 'COUNTER COMPONENT'
    public counter: number = 10

    increaseBy(value: number) {
        this.counter += value
    }

    decreaseBy(value: number) {
        this.counter -= value
    }

    resetCounter() {
        this.counter = 10
    }
}