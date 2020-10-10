import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLinkDirectiveStub } from ''
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let headerComponent: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    headerComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate component', () => {
    expect(headerComponent).not.toBeNull();
  });
});
