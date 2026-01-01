import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageFarmsComponent } from './usage-farms.component';

describe('UsageFarmsComponent', () => {
  let component: UsageFarmsComponent;
  let fixture: ComponentFixture<UsageFarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsageFarmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsageFarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
