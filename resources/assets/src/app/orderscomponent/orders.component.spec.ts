import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderscomponentComponent } from './orderscomponent.component';

describe('OrderscomponentComponent', () => {
  let component: OrderscomponentComponent;
  let fixture: ComponentFixture<OrderscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
