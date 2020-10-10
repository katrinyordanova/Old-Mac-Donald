import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let headerComponent: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let addAnimalButton: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    headerComponent = fixture.componentInstance;
    const selectedButton = fixture.debugElement.query(By.css('.header__buttons__add-animal'));
    addAnimalButton = selectedButton.nativeElement;
    fixture.detectChanges();
  });

  it('should instantiate component', () => {
    expect(headerComponent).toBeTruthy();
  });

  it('should have add animal button', () => {
    expect(addAnimalButton.textContent).toBeDefined();
  });
});
