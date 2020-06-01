import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbootstrapComponent } from './addbootstrap.component';

describe('AddbootstrapComponent', () => {
  let component: AddbootstrapComponent;
  let fixture: ComponentFixture<AddbootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
