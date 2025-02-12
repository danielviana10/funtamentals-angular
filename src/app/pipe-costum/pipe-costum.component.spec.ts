import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCostumComponent } from './pipe-costum.component';

describe('PipeCostumComponent', () => {
  let component: PipeCostumComponent;
  let fixture: ComponentFixture<PipeCostumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeCostumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeCostumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
