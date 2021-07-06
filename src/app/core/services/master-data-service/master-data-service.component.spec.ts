import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataServiceComponent } from './master-data-service.component';

describe('MasterDataServiceComponent', () => {
  let component: MasterDataServiceComponent;
  let fixture: ComponentFixture<MasterDataServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDataServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
