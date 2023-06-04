import { Component } from '@angular/core';
import { Car } from './cars';
import { TransportationService } from './transportation.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  prefix = "I'm Roohan";
  name = 'Roohan';
  username: string = '';
  colors: string[] = ['red', 'blue', 'green', 'purple'];

  // subaru: Car = { make: 'Subaru', model: 'Outback', miles: 58232 };
  // honda: Car = { make: 'Honda', model: 'Accord', miles: 39393 };
  // bmw: Car = { make: 'BMW', model: 'X3', miles: 4400 };
  // cars: Car[] = [this.subaru, this.honda, this.bmw];

  make: string;
  model: string;
  miles: number;

  cars: Car[] = [];

  // title: any;
  // transportationService: any;
  // fruits: any;

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
  constructor(private transportationService: TransportationService) {}

  getCarsOut(): void {
    this.cars = this.transportationService.getCars();
  }
  ngOnInit(): void {
    this.getCarsOut();
  }
  addCar() {
    const newCar: Car = { make: this.make, model: this.model, miles: this.miles};
    this.transportationService.addCar(newCar);
  }
}
