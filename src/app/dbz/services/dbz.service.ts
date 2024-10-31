import { Injectable } from '@angular/core';

// módulo externo para la generación automática de uuid...
// usamos alias para llamar de manera más llamativa a la función en cuestión...
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Vegetta',
            power: 10000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 15000
        },
        {
            id: uuid(),
            name: 'Cell',
            power: 12000
        }
    ]

    addCharacter(character: Character): void {
        // método "normal"
        // const newCharacter: Character = {
        //     id: uuid(),
        //     name: character.name,
        //     power: character.power
        // }

        // método "pro": creo una referencia del objeto character que llega (una copia) e incluyo todas sus propiedades en el nuevo con uuid que quiero crear...
        const newCharacter: Character = { id: uuid(), ...character }

        console.log(newCharacter)

        this.characters.push(newCharacter)
    }

    // misma función anterior pero con destructuring (solo para recordar...)
    // onNewCharacter({ name, power }: Character): void {
    //     // console.log(character)
    //     const newCharacter: Character = {
    //         id: uuid(),
    //         name: name,
    //         power: power
    //     }

    //     console.log(newCharacter)

    //     this.characters.push(newCharacter)
    // }

    // onDelete(index: number): void {
    //     console.log(index)
    //     this.characters.splice(index, 1)
    // }

    deleteCharacterById(id: string): void {
        this.characters = this.characters.filter(character => character.id !== id)
    }
}