import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexAreaDescriptionComponent } from './tex-area-description.component';

describe('TexAreaDescriptionComponent', () => {
  let component: TexAreaDescriptionComponent;
  let fixture: ComponentFixture<TexAreaDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexAreaDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TexAreaDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
