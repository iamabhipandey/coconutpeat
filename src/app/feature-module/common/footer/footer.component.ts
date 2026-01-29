import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public routes = routes;
  public userLogin = false;

  constructor(private router: Router, private dataFactory: DataFactoryService) { }

  ngOnInit() {
    this.userLogin = this.dataFactory.isUserLoggedIn();
  }

  handleTrackShipment() {
    if (this.userLogin) {
      this.router.navigate([this.routes.trackingOrder]);
    } else {
      this.router.navigate([this.routes.login]);
    }
  }
}
