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
  optins: string[];

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
    this.optins = [
      "ABS", "Autopilot", "Autoparking"
    ];
  }

}

interface Colors {
  car: string,
  salon: string,
  wheels: string,
}