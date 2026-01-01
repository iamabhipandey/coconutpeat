import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocopeatComponent } from './cocopeat.component';

describe('CocopeatComponent', () => {
  let component: CocopeatComponent;
  let fixture: ComponentFixture<CocopeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocopeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocopeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
