import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdateDataComponent } from './employee-update-data.component';

describe('EmployeeUpdateDataComponent', () => {
  let component: EmployeeUpdateDataComponent;
  let fixture: ComponentFixture<EmployeeUpdateDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeUpdateDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUpdateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
