import { Component } from '@angular/core';
import { Car } from './cars';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  prefix = "I'm Roohan";
  name = 'Roohan';
  colors: string[] = ['red', 'blue', 'green', 'purple'];
  subaru: Car = { make: 'Subaru', model: 'Outback', miles: 58232 };
  honda: Car = { make: 'Honda', model: 'Accord', miles: 39393 };
  bmw: Car = { make: 'BMW', model: 'X3', miles: 4400 };
  cars: Car[] = [this.subaru, this.honda, this.bmw];
  title: any;
  speak() {
    var sentence = this.prefix + this.name;
    return sentence;
  }
  saySomething() {
    alert('good day.');
  }
  counter = 0;
  increment() {
    this.counter++;
  }
  phrase = "It's going";
  update() {
    this.phrase += ' ..and going';
  }
}
