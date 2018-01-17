import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAddressViewComponent } from './store-address-view.component';

describe('StoreAddressViewComponent', () => {
  let component: StoreAddressViewComponent;
  let fixture: ComponentFixture<StoreAddressViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreAddressViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAddressViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
