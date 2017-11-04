import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromControllersComponent } from './from-controllers.component';

describe('FromControllersComponent', () => {
  let component: FromControllersComponent;
  let fixture: ComponentFixture<FromControllersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromControllersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
