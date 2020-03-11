import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from "@angular/material";
import { AddAssetComponent } from './add-asset/add-asset.component'
import { AppUrlServiceService } from '../app-url-service.service';
import { AppServiceService } from '../app-service.service';
import * as _ from 'underscore';
@Component({
  selector: 'app-task-assignment',
  templateUrl: './task-assignment.component.html',
  styleUrls: ['./task-assignment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskAssignmentComponent implements OnInit {
  masterData: any = [];
  acc: any = [];
  job: any = [];

  constructor(private dialog: MatDialog, private appUrl: AppUrlServiceService, private services: AppServiceService) { }

  ngOnInit() {
    this.getMaster();
    this.getAccounts();
    this.getJobs();
  }


  getMaster() {
    this.services.getAll(this.appUrl.geturlfunction('GET_CAT_LIST')).subscribe(res => {
      this.masterData = res;
    })
  }
  getAccounts() {
    this.services.getAll(this.appUrl.geturlfunction('GET_ACC')).subscribe(res => {
      this.acc = res;
    })
  }
  getJobs() {
    this.services.getAll(this.appUrl.geturlfunction('GET_JOB')).subscribe(res => {
      this.job = res;      
    })
  }


  edit(datas: any) {
    console.log(datas)
    const dialogRef = this.dialog.open(AddAssetComponent, {
      position: {
      },
      width: '600px',
      panelClass: 'modelOpen',
      data: {
        mode: 'EDIT',
        apiData: this.masterData,
        data: datas,
        jobs: this.job
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.getMaster();
      }
    });
  }


  add() {
    const dialogRef = this.dialog.open(AddAssetComponent, {
      position: {
        right: '3px'
      },
      width: '500px',
      panelClass: 'modelOpen',
      data: {
        mode: 'ADD',
        data: this.masterData,
        acc: this.acc
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.getMaster();
      }
    });

  }
}
