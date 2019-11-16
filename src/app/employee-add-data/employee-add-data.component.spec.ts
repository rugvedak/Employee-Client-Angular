import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddDataComponent } from './employee-add-data.component';

describe('EmployeeAddDataComponent', () => {
  let component: EmployeeAddDataComponent;
  let fixture: ComponentFixture<EmployeeAddDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAddDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
