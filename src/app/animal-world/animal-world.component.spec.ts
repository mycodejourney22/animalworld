import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalWorldComponent } from './animal-world.component';

describe('AnimalWorldComponent', () => {
  let component: AnimalWorldComponent;
  let fixture: ComponentFixture<AnimalWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
