import { TestBed } from '@angular/core/testing';
import { AnimalService } from './animal.service';

describe('AnimalService', () => {
  let animalService: AnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    animalService = new AnimalService();
  });

  it('should be created', () => {
    expect(animalService).toBeTruthy();
  });

  it('#getAnimals should be bigger than 5', () => {
    expect(animalService.getAnimals().length).toBeGreaterThanOrEqual(5);
  });
});