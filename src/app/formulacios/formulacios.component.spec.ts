import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaciosComponent } from './formulacios.component';

describe('FormulaciosComponent', () => {
  let component: FormulaciosComponent;
  let fixture: ComponentFixture<FormulaciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
