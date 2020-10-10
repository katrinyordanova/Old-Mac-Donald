import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AnimalService } from '../shared/animal.service';

import { AddAnimalComponent } from './add-animal.component';

let fixture: ComponentFixture<AddAnimalComponent>;
let addAnimalComponent: AddAnimalComponent;
let page: Page;

describe('AddAnimalComponent', () => {
  describe('with FormsModule setup', formsModuleSetUp );
});

function formsModuleSetUp() {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AddAnimalComponent ],
      providers: [
        { provide: AnimalService }
      ]
    }).compileComponents();
  });

  beforeEach(async() => { 
    createComponent(); 
  });

  it('should have add button', waitForAsync(() => {
    expect(page.addAnimalButton).toBeDefined();
  }));
  
  it('should have name input filed', waitForAsync(() => {
    expect(page.nameInput).toBeDefined();
  }));

  it('should have sound input field', waitForAsync(() => {
    expect(page.soundInput).toBeDefined();
  }));

  it('add button should be disabled initially', waitForAsync(() => {
    expect(page.addAnimalButton.disabled).toBe(false);
  }));
}

function createComponent() {
  fixture = TestBed.createComponent(AddAnimalComponent);
  addAnimalComponent = fixture.componentInstance;
  page = new Page(fixture);
  fixture.detectChanges();
  return fixture.whenStable().then(() => {
    fixture.detectChanges();
  });
}

class Page {
  get addAnimalButton() {
    return this.query<HTMLButtonElement>('.add-animal__form__button__add-animal');
  }

  get nameInput() {
    return this.query<HTMLElement>('.add-animal__form__animal-name__input');
  }

  get soundInput() {
    return this.query<HTMLElement>('.add-animal__form__animal-sound__input');
  }

  constructor(fixture: ComponentFixture<AddAnimalComponent>) {}

  private query<T>(selector: string): T {
    return fixture.nativeElement.querySelector(selector);
  }
}
