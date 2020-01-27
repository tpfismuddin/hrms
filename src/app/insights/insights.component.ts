import { Component, OnInit } from '@angular/core';
import { AppUrlServiceService } from '../app-url-service.service';
import { AppServiceService } from '../app-service.service';
import * as momentzone from 'moment-timezone';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})

export class InsightsComponent implements OnInit {

  currDate: any;
  acc: any = [];
  des: any = [];
  loc: any = [];
  newAcc:any;
  newDes: any;
  newManager: any;
  newLoc:any;
  constructor(private services: AppServiceService, private appUrl: AppUrlServiceService ) { }

  ngOnInit() {
    this.getAccounts();
    this.getDesignations();
    this.getLocations();
    this.currDate = momentzone().tz('Asia/Kolkata').unix() * 1000;
    console.log(this.currDate);
  }

  getAccounts() {
    this.services.getAll(this.appUrl.geturlfunction('GET_ACC')).subscribe(res => {
      this.acc = res;
    })
  }

  getDesignations() {
    this.services.getAll(this.appUrl.geturlfunction('GET_DES')).subscribe(res => {
      this.des = res;
    })
  }
  getLocations() {
    this.services.getAll(this.appUrl.geturlfunction('GET_LOC')).subscribe(res => {
      this.loc = res;
    })
  }

  addAcc(data,data2){
    let payload = {
      'uId' : momentzone().tz('Asia/Kolkata').unix() * 1000,
      'name': data,
      'manager': data2
    }
    console.log(payload);
    this.services.create(this.appUrl.geturlfunction('POST_ACC'), payload).subscribe(res => {
      if (res.status == true) {
        this.getAccounts();
        this.newAcc = '';
        this.newManager = '';
      }
    })
  }
  addDes(data){
    let desig = {
      'dId' : momentzone().tz('Asia/Kolkata').unix() * 1000,
      'designation': data,
    }
    console.log(desig);
    this.services.create(this.appUrl.geturlfunction('POST_DES'), desig).subscribe(res => {
      if (res.status == true) {
        this.getDesignations();
        this.newDes = '';
      }
    })
  }
  addLoc(data){
    let desig = {
      'lId' : momentzone().tz('Asia/Kolkata').unix() * 1000,
      'location': data,
    }
    console.log(desig);
    this.services.create(this.appUrl.geturlfunction('POST_LOC'), desig).subscribe(res => {
      if (res.status == true) {
        this.getLocations();
        this.newLoc = '';
      }
    })
  }


}

