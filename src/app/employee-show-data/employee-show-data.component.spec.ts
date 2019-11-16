import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeShowDataComponent } from './employee-show-data.component';

describe('EmployeeShowDataComponent', () => {
  let component: EmployeeShowDataComponent;
  let fixture: ComponentFixture<EmployeeShowDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeShowDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeShowDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
