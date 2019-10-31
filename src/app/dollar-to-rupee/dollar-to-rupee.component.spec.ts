import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarToRupeeComponent } from './dollar-to-rupee.component';

describe('DollarToRupeeComponent', () => {
  let component: DollarToRupeeComponent;
  let fixture: ComponentFixture<DollarToRupeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarToRupeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarToRupeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
