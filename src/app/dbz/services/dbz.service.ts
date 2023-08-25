import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters : Character[] = [
    {
      id: uuid(),
     name: 'Krillin' ,
     power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ] ;

  //metodo que va a tomar el character del componente hijo
  addCharacter (character: Character) : void {
    // console.log('character recibido en el mainPageComponent(padre)-> ',character);
    const newCharacter : Character = {id: uuid(), ...character}

    this.characters.push(newCharacter) ;
  }

  // onDeleteCharacter (index: number) : void {

  //   console.log(`index recibido en main page -> ${index}`);

  //   this.characters.splice(index, 1); //elimina solo un elemento desde el index

  // }

  deleteCharacterById (id:string) : void {

    this.characters = this.characters.filter(character => character.id !== id);
  }

}
