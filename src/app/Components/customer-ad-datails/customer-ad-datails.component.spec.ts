import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAdDatailsComponent } from './customer-ad-datails.component';

describe('CustomerAdDatailsComponent', () => {
  let component: CustomerAdDatailsComponent;
  let fixture: ComponentFixture<CustomerAdDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAdDatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAdDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
