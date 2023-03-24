import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCard3Component } from './about-card3.component';

describe('AboutCard3Component', () => {
  let component: AboutCard3Component;
  let fixture: ComponentFixture<AboutCard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCard3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
