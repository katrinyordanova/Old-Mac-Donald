import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AnimalComponent } from './animal.component';
import { Animal } from '../shared/animal';

describe('AnimalComponent', () => {
  let animalComponent: AnimalComponent;
  let fixture: ComponentFixture<AnimalComponent>;
  let animalVerse: HTMLElement;
  let expectedAnimal: Animal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalComponent);
    animalComponent = fixture.componentInstance;
    const selectAnimalVerse = fixture.debugElement.query(By.css('.animal__verse'));
    animalVerse = selectAnimalVerse.nativeElement;
    expectedAnimal = {
      name: 'cow',
      sound: 'moo'
    } as Animal
    animalComponent.animal = expectedAnimal;
    fixture.detectChanges();
  });

  it('should instantiate component', () => {
    expect(animalComponent).toBeTruthy();
  });

  it('should render a verse with the name of given animal', () => {
    expect(animalVerse.textContent).toContain('cow');
  });

  it('should render a verse with the sound of given animal', () => {
    expect(animalVerse.textContent).toContain('moo');
  });
});
