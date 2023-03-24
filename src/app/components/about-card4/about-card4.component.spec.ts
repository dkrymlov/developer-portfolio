import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCard4Component } from './about-card4.component';

describe('AboutCard4Component', () => {
  let component: AboutCard4Component;
  let fixture: ComponentFixture<AboutCard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCard4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
