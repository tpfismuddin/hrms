import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from "@angular/material";
import { AddAssetComponent } from './add-asset/add-asset.component'
import { EditAssetComponent } from './edit-asset/edit-asset.component';
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

  constructor(private dialog: MatDialog, private appUrl: AppUrlServiceService, private services: AppServiceService) { }

  ngOnInit() {
    this.getMaster();
  }
  getMaster() {
    this.services.getAll(this.appUrl.geturlfunction('GET_CAT_LIST')).subscribe(res => {
      this.masterData = res;
    })
  }


  edit(datas: any) {
    const modalRef = this.dialog.open(EditAssetComponent, {
      position: {
        right: '15px',
      },
      minHeight: '60vh',
      width: '400px',
      maxHeight: '100vh',
      panelClass: 'editFlight',
      data: {
        mode: 'EDIT',
        bayDet: datas,
        apiData: this.masterData
      },

    });

    modalRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.getMaster();
      }
    });
  }


  add() {
    const modalRef = this.dialog.open(AddAssetComponent, {
      position: {
        right: '15px',
      },
      minHeight: '60vh',
      width: '400px',
      maxHeight: '100vh',
      panelClass: 'addNewflight',
      data: {
        mode: 'ADD',
        apiData: this.masterData
      },

    });


    modalRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.getMaster();
      }
    });
  }
}
