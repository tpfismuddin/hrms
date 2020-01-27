import { Component, OnInit } from '@angular/core';
import { AppUrlServiceService } from '../app-url-service.service';
import { AppServiceService } from '../app-service.service';
import * as _ from 'underscore';
import { MatDialog } from "@angular/material";
import { AddPostingComponent } from './add-posting/add-posting.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  acc: any = [];
  des: any = [];
  job: any = [];
  selJob: any = {};

  constructor(private dialog: MatDialog, private services: AppServiceService, private appUrl: AppUrlServiceService) {
  }

  ngOnInit() {
    this.getAccounts();
    this.getDesignations();
    this.getJobs();
  }

  getAccounts() {
    this.services.getAll(this.appUrl.geturlfunction('GET_ACC')).subscribe(res => {
      this.acc = res;
      console.log(this.acc)
    })
  }
  getDesignations() {
    this.services.getAll(this.appUrl.geturlfunction('GET_DES')).subscribe(res => {
      this.des = res;      
      console.log(this.des)
    })
  }
  getJobs() {
    this.services.getAll(this.appUrl.geturlfunction('GET_JOB')).subscribe(res => {
      this.job = res;      
      if(this.job){
        this.selJob = this.job[0];
        console.log(this.selJob);
      }
    })
  }

  ngOnDestroy() {
  }

  add() {
    const dialogRef = this.dialog.open(AddPostingComponent, {
      // position: {
      //   right: '3px'
      // },
      minWidth: '90vw',
      maxWidth: '90vw',
      minHeight: '90vh',
      maxHeight: '90vh',
      panelClass: 'modelOpen',
      data: {
        mode: 'ADD',
        account: this.acc,
        designation: this.des
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.getJobs();
      }
    });

  }

  selected(data:any){
    console.log(data);
    this.selJob = data;
  }


}
