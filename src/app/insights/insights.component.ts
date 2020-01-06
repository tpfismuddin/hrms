import { Component, OnInit } from '@angular/core';
import { AppUrlServiceService } from '../app-url-service.service';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {
  constructor(private services: AppServiceService, private AppUrl: AppUrlServiceService) { }

  ngOnInit() {
  }


}

