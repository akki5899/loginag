import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckkforgetComponent } from './checkkforget.component';

describe('CheckkforgetComponent', () => {
  let component: CheckkforgetComponent;
  let fixture: ComponentFixture<CheckkforgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckkforgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckkforgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
