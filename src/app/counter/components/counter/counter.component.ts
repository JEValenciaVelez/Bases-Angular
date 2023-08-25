import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{counter}}</h3>

  <button (click)="decrement(1)">-1</button>
  <button (click)="increment(1)">+1</button>
  <button (click)="reset()">Reset</button>`
})
export class CounterComponent {

  public counter : number = 10 ;

  increment (value: number) {
    this.counter += value ;
  }

  decrement (value:number) {
    if(this.counter === 0) this.counter ;
    else this.counter -= value;
  }

  reset () {
    this.counter = 10 ;
  }

}
