import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {
  public routes = routes;

  loggedUserName: string = 'Abhishek Pandey'; // Static name for demo

  // Static Dashboard Stats
  dashboardStats = [
    { label: 'Total Orders', value: '12', icon: 'feather icon-box', bgClass: 'bg-primary-light', textClass: 'text-primary' },
    { label: 'Wishlist Items', value: '5', icon: 'feather icon-heart', bgClass: 'bg-warning-light', textClass: 'text-warning' },
    { label: 'Wallet Balance', value: '₹ 2,500', icon: 'feather icon-credit-card', bgClass: 'bg-success-light', textClass: 'text-success' },
    { label: 'Pending Reviews', value: '2', icon: 'feather icon-star', bgClass: 'bg-danger-light', textClass: 'text-danger' }
  ];

  // Static Recent Orders
  recentOrders = [
    {
      orderId: '#ORD-00123',
      date: '15 Jan 2026',
      status: 'Delivered',
      amount: '₹ 1,600',
      items: 'Coco Peat (5kg)',
      statusClass: 'badge-success'
    },
    {
      orderId: '#ORD-00124',
      date: '18 Jan 2026',
      status: 'Processing',
      amount: '₹ 2,600',
      items: 'Coir Mat (Large)',
      statusClass: 'badge-warning'
    },
    {
      orderId: '#ORD-00125',
      date: '20 Jan 2026',
      status: 'Cancelled',
      amount: '₹ 800',
      items: 'Semi Husk Coconut',
      statusClass: 'badge-danger'
    }
  ];

  constructor(private router: Router) { }

}
