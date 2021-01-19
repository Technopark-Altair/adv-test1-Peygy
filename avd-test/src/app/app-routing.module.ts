import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes =
[
  {path: "car/:id", component: CarComponent},
  {path: "carList", component: CarListComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
