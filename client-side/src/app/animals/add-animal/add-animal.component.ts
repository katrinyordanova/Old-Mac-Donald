import { Component } from '@angular/core';
import { Animal } from '../shared/animal';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent {
  name: string;
  sound: string;
  givenAnimals: Boolean;
  animals: Animal[];

  constructor() { }

  addAnimalHandler(AnimalType: string, AnimalSound: string) {
    this.name = AnimalType;
    this.sound = AnimalSound;
    this.animals = this.animals || [];
    this.animals.push({"name": this.name, "sound": this.sound});
    this.name = '';
    this.sound = '';
    this.givenAnimals = true;
  }
}
