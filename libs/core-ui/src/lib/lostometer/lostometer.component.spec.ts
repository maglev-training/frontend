import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostometerComponent } from './lostometer.component';

describe('LostometerComponent', () => {
  let component: LostometerComponent;
  let fixture: ComponentFixture<LostometerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LostometerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LostometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
