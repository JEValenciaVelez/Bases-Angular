
import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor (private dbzService: DbzService) {}

  get characters () : Character[] {

    return [...this.dbzService.characters] ; // devuelvo una copia de lo que hay en la prop del servicio, para no alterar la prop original
  }

  onDeleteCharacter (id : string) : void {

    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter (character: Character) {

    this.dbzService.addCharacter(character);
  }

}
