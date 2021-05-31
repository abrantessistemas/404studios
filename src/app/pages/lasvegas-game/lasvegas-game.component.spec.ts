import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasvegasGameComponent } from './lasvegas-game.component';

describe('LasvegasGameComponent', () => {
  let component: LasvegasGameComponent;
  let fixture: ComponentFixture<LasvegasGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LasvegasGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LasvegasGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
