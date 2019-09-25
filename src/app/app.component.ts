import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'Calculator App';
  num1: number;
  num2: number;
  result: number;
  add() {
    this.result = this.num1 + this.num2;
  }
  subtract() {
    this.result = this.num1 - this.num2;
  }
  multiply() {
    this.result = this.num1 * this.num2;
  }
  divide() {
    this.result = this.num1 % this.num2;
  }
}
