import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Welcome To Angular!'
  public counter: number = 10
  // public value: number

  increaseBy(value: number): void {
    this.counter += value
  }

  decreaseBy(value: number): void {
    this.counter -= value
  }

  resetCounter() {
    this.counter = 10
  }
}
