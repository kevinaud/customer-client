import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSearchResultViewComponent } from './store-search-result-view.component';

describe('StoreSearchResultViewComponent', () => {
  let component: StoreSearchResultViewComponent;
  let fixture: ComponentFixture<StoreSearchResultViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSearchResultViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSearchResultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
