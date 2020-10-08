import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAnimalComponent } from './animals/add-animal/add-animal.component';
import { AnimalsComponent } from './animals/animals.component';

const routes: Routes = [
  { path: '', component: AnimalsComponent },
  { path: 'add-animal', component: AddAnimalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
