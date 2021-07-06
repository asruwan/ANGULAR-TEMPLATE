import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTypesComponent } from './sub-types.component';

describe('SubTypesComponent', () => {
  let component: SubTypesComponent;
  let fixture: ComponentFixture<SubTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
