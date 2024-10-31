import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Thor']
  public deletedHero?: string

  removeLastHero(): void {
    // const deletedHero = this.heroNames.pop()
    // console.log(deletedHero)
    this.deletedHero = this.heroNames.pop()
  }
}
