import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // variable publica de tipo EventEmiter y emite un dato de tipo Character y contiene una instancia de Eventemiter. Decoro esta propiedad con el @output para emitirlo a un componente padre
  @Output()
  public onNewCharacter : EventEmitter <Character> = new EventEmitter();

  public character : Character = {
    name: "",
    power: 0
  }

  emitCharacter () : void  {


    console.log(this.character);
    if(this.character.name.length === 0) return ; //si no viene nombre no lo acepto
    
    this.onNewCharacter.emit(this.character); // emito al padre la data del character

    this.character = {
      name: '',
      power: 0
    }
  }
}
