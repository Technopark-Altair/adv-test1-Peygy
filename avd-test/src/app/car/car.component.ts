import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/models/car.module';
import { CarServiceService } from 'src/services/car-service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() carInput: Car;
  constructor(private carService: CarServiceService, private route: ActivatedRoute) { }

  car: Car;
  ngOnInit(): void 
  {
    this.route.params.subscribe(
      (data) => 
      {
        let id = +data.id;
        this.car = this.carService.getCar(id);
      }
    );
  }

}
