import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames : string[] = ['Spiderman', 'Ironman', 'Hulk','Thor'];
  public deleteHeroes : string[] = [] ;


  removeLastHero () : void {
    const lastHero : string | undefined = this.heroNames.pop();
    if(lastHero){
      this.deleteHeroes.push(lastHero);
    }
  }

  reset () : void {
    this.heroNames = ['Spiderman', 'Ironman', 'Hulk','Thor'];
    this.deleteHeroes = [] ;
  }

}
