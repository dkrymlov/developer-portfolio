import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCard1Component } from './about-card1.component';

describe('AboutCard1Component', () => {
  let component: AboutCard1Component;
  let fixture: ComponentFixture<AboutCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
