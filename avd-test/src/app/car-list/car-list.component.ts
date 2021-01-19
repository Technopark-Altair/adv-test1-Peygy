import { Component, OnInit } from '@angular/core';
import { Car } from 'src/models/car.module';
import { CarServiceService } from 'src/services/car-service.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Array<Car>;
  constructor(private carsService: CarServiceService) { }

  ngOnInit(): void
  {
    this.cars = this.carsService.getCars();
  }

}
