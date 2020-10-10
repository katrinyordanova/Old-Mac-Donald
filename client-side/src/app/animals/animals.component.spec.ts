import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsComponent } from './animals.component';

describe('AnimalsComponent', () => {
  let animalsComponent: AnimalsComponent;
  let fixture: ComponentFixture<AnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsComponent);
    animalsComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(animalsComponent).toBeTruthy();
  });

  it('should have an animal object', () => {
    expect(animalsComponent.animals).toBeDefined();
  });

  it('should have an animals array with length 5', () => {
    expect(animalsComponent.animals.length).toBeLessThanOrEqual(5);
  });
});
