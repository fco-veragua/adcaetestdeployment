import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron Man'
  public age: number = 45
  public defaultName = this.name
  public defaultAge = this.age

  // los getter se conciben como propiedades (aunque presentan la estructura de un método)
  get capitalizeName(): string {
    return this.name.toUpperCase()
  }

  // modificadores de acceso:
  // - private: si uso private, aunque el método sea de este componente, no podrá usarse en el template, solo en el scope de la clase donde se ha definido...
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  // test method: simplemente muestro como se especifica si tengo un método sin implementar...
  testMethod(): void {
    // TODO:
    throw 'Method not implemented...'
  }

  changeHeroName(newName: string): void {
    this.name = newName
  }

  changeHeroAge(newAge: number): void {
    this.age = newAge
  }

  resetForm(): void {
    this.name = this.defaultName
    this.age = this.defaultAge
  }
}
