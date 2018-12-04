import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondResidencyComponent } from './second-residency.component';

describe('SecondResidencyComponent', () => {
  let component: SecondResidencyComponent;
  let fixture: ComponentFixture<SecondResidencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondResidencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondResidencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
