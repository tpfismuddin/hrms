import { Component, OnInit } from '@angular/core';
import { AppUrlServiceService } from '../app-url-service.service';
import { AppServiceService } from '../app-service.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {




  constructor(private services: AppServiceService, private AppUrl: AppUrlServiceService) {
  }


  ngOnInit() {
  }

  ngOnDestroy() {
  }


}
