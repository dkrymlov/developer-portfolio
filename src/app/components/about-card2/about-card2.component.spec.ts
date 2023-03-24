import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCard2Component } from './about-card2.component';

describe('AboutCard2Component', () => {
  let component: AboutCard2Component;
  let fixture: ComponentFixture<AboutCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCard2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
