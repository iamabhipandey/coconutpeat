import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OemOdmInquiriesComponent } from './oem-odm-inquiries.component';

describe('OemOdmInquiriesComponent', () => {
  let component: OemOdmInquiriesComponent;
  let fixture: ComponentFixture<OemOdmInquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OemOdmInquiriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OemOdmInquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
