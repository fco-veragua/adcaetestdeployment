import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
@Component({
    selector: 'dbz-addcharacter-component',
    templateUrl: './addcharacter.component.html',
    styleUrls: ['./addcharacter.component.css']
})

export class AddCharacterComponent {
    public title: string = "Add character"

    @Output()
    onNewCharacter: EventEmitter<Character> = new EventEmitter()

    public character: Character = {
        name: '',
        power: 0
    }

    emitCharacter(): void {
        // debugger
        console.log(this.character)

        if (this.character.name.length === 0) return

        this.onNewCharacter.emit(this.character)

        // después de ejecutar la acción que sea, querremos limpiar el character...
        this.character = { name: '', power: 0 }
    }
}