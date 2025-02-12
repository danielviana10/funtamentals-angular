import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosComponentComponent } from './infos-component.component';

describe('InfosComponentComponent', () => {
  let component: InfosComponentComponent;
  let fixture: ComponentFixture<InfosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
