import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidStatusComponent } from './paid-status.component';

describe('PaidStatusComponent', () => {
  let component: PaidStatusComponent;
  let fixture: ComponentFixture<PaidStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
