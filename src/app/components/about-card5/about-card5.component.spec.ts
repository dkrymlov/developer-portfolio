import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCard5Component } from './about-card5.component';

describe('AboutCard5Component', () => {
  let component: AboutCard5Component;
  let fixture: ComponentFixture<AboutCard5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCard5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
