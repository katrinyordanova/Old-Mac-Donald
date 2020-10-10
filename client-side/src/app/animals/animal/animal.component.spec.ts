import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalComponent } from './animal.component';

describe('AnimalComponent', () => {
  let animalComponent: AnimalComponent;
  let fixture: ComponentFixture<AnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalComponent);
    animalComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate component', () => {
    expect(animalComponent).toBeTruthy();
  });
});
