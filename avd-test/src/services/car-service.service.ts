import { Injectable } from '@angular/core';
import { Car } from 'src/models/car.module';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  cars: Array<Car> = 
  [
    {id: 0, brandName: 'BMW', modelName: 'X5', priceInRub: 5400000},
    {id: 1, brandName: 'Mercedes', modelName: 'A-class', priceInRub: 3000000},
    {id: 2, brandName: 'Audi', modelName: 'R8', priceInRub: 11000000},
  ];

  constructor() { }

  getCars()
  {
    return this.cars;
  }

  getCar(id: number)
  {
    return this.cars.find((el) => el.id === id);
  }
}
