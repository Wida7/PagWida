import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngExercisesComponent } from './ang-exercises.component';

describe('AngExercisesComponent', () => {
  let component: AngExercisesComponent;
  let fixture: ComponentFixture<AngExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngExercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
