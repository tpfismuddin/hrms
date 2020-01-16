import { Component, Inject, OnInit, ViewEncapsulation, ɵConsole } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppUrlServiceService } from '../../app-url-service.service';
import { AppServiceService } from '../../app-service.service';
import * as _ from 'underscore';
@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddAssetComponent implements OnInit {
  masterDetails: any = {};
  data: any;
  account: any[];
  // account: any[] = [{'name': 'Digital'},{'name': 'Products'}, {'name': 'Services'},{'name': 'Support'}];

  constructor(private dialogRef: MatDialogRef<AddAssetComponent>, @Inject(MAT_DIALOG_DATA) public details: any, private appUrl: AppUrlServiceService, private services: AppServiceService) {
    console.log(this.details);
  }

  ngOnInit() {

    if (this.details.mode === 'ADD') {
      this.masterDetails = {}
    } else {
      this.masterDetails = this.details.data;
    }

  }

  add(datas) {
    this.data = datas;
    console.log(this.data);
    this.services.create(this.appUrl.geturlfunction('CREATE_USER'), this.data).subscribe(res => {
      if (res.status == true) {
        this.dialogRef.close('RELOAD');
      }
    })
  }

  edit(data: any){
    this.data = data;
    console.log(this.data);
    this.services.create(this.appUrl.geturlfunction('UPDATE_USER'), this.data).subscribe(res => {
      if (res.status == true) {
        this.dialogRef.close('RELOAD');
      }
    })
  }

  close() {
    this.dialogRef.close();
  }


}