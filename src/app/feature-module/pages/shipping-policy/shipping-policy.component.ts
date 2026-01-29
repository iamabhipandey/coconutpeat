import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-shipping-policy',
  templateUrl: './shipping-policy.component.html',
  styleUrls: ['./shipping-policy.component.css']
})
export class ShippingPolicyComponent {
  public routes = routes;

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
