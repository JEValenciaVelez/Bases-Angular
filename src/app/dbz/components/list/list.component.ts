import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterLIst : Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ] ;

  @Output()
  public onDelete : EventEmitter <string> = new EventEmitter();

  onDeleteCharcter (id?: string ) : void {

    console.log({id});

    if(!id) return ;

    this.onDelete.emit(id);


  }
}
