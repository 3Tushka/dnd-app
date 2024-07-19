import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesLvlComponent } from './classes-lvl.component';

describe('ClassesLvlComponent', () => {
  let component: ClassesLvlComponent;
  let fixture: ComponentFixture<ClassesLvlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassesLvlComponent]
    });
    fixture = TestBed.createComponent(ClassesLvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
