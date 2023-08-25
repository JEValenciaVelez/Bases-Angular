import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name : string = 'iron man';
  public age  : number =  45 ;

  get capitalizedName () : string {
    return this.name.toUpperCase();
  }

  getHeroDescription () : string {
    return `${this.name} - ${this.age}`;
  }

  changeHero () : void {

    if(this.name === "iron man") this.name = 'Spiderman' ;
    else this.name = "iron man";

  }

  changeAge () : void {

    if(this.name === 'Spiderman') this.age = 18 ;
    else if(this.name === 'iron man') this.age = 45 ;
  }

  reset () : void {

    this.name = 'iron man' ;
    this.age = 45 ;
  }

}
