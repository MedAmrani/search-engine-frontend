import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageTestComponent } from './search-page-test.component';

describe('SearchPageTestComponent', () => {
  let component: SearchPageTestComponent;
  let fixture: ComponentFixture<SearchPageTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
