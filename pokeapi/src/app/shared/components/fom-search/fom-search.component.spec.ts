import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomSearchComponent } from './fom-search.component';

describe('FomSearchComponent', () => {
  let component: FomSearchComponent;
  let fixture: ComponentFixture<FomSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FomSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
