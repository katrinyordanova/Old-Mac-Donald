import { Injectable } from '@angular/core';
import { Animals_DB } from './animals-db';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  getAnimals() {
    return Animals_DB.animals;
  }
}
