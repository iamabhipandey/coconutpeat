import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalResearchInstituteComponent } from './agricultural-research-institute.component';

describe('AgriculturalResearchInstituteComponent', () => {
  let component: AgriculturalResearchInstituteComponent;
  let fixture: ComponentFixture<AgriculturalResearchInstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgriculturalResearchInstituteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriculturalResearchInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
