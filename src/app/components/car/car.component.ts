import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];

  constructor() { }

  ngOnInit() {
    this.name = 'Audi'
    this.model = 'RS8';
    this.speed = 235;
    this.colors = {
      car: 'white',
      salon: 'black',
      wheels: 'gray',
    };
    this.options = [
      "ABS", "Autopilot", "Autoparking"
    ];
  }

  carSelect(carName: string): void {
    if (carName === 'BMW') {
      this.name = 'BMW'
      this.model = 'M5';
      this.speed = 219;
      this.colors = {
        car: 'white',
        salon: 'black',
        wheels: 'gray',
      };
      this.options = [
        "ABS", "Autopilot", "Autoparking"
      ];
    } else if (carName === 'Audi') {
      this.name = 'Audi'
      this.model = 'RS8';
      this.speed = 235;
      this.colors = {
        car: 'gray',
        salon: 'white',
        wheels: 'black',
      };
      this.options = [
        "Autopilot", "Autoparking"
      ];
    } else if (carName === 'Mersedes') {
      this.name = 'Mersedes'
      this.model = 'C180';
      this.speed = 231;
      this.colors = {
        car: 'green',
        salon: 'white',
        wheels: 'gray',
      };
      this.options = [
        "ABS", "Autopilot"
      ];
    }
  }

  addOption(option: string): boolean {
    this.options.push(option);
    return false;
  }

  deleteOption(option: string): boolean {
    const index = this.options.indexOf(option);
    if (index !== -1) {
      this.options.splice(index, 1);
    }
    return false;
  }
}

interface Colors {
  car: string,
  salon: string,
  wheels: string,
}