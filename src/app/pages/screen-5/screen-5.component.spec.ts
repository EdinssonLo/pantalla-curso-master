import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen5Component } from './screen-5.component';

describe('Screen5Component', () => {
  let component: Screen5Component;
  let fixture: ComponentFixture<Screen5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Screen5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Screen5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
