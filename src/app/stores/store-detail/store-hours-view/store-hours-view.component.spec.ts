import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreHoursViewComponent } from './store-hours-view.component';

describe('StoreHoursViewComponent', () => {
  let component: StoreHoursViewComponent;
  let fixture: ComponentFixture<StoreHoursViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreHoursViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreHoursViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
