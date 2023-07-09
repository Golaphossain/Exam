import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeresultsComponent } from './seeresults.component';

describe('SeeresultsComponent', () => {
  let component: SeeresultsComponent;
  let fixture: ComponentFixture<SeeresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
