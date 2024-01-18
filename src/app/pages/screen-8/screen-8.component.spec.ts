import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen8Component } from './screen-8.component';

describe('Screen8Component', () => {
  let component: Screen8Component;
  let fixture: ComponentFixture<Screen8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Screen8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Screen8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
