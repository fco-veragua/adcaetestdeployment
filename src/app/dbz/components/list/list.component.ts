import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list-component',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent {
    public title: string = "List"

    @Output()
    public onSelectCharacter: EventEmitter<string> = new EventEmitter()

    @Input()
    public characterList: Character[] = [
        // {
        //     name: 'Trunks',
        //     power: 2000
        // }
    ]

    onDeleteTest(index: number): void {
        console.log(index)
    }

    deleteCharacterById(id?: string): void {
        console.log(id)

        this.onSelectCharacter.emit(id)
    }
}