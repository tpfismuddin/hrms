import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppUrlServiceService } from '../../app-url-service.service';
import { AppServiceService } from '../../app-service.service';
import * as _ from 'underscore';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.scss']
})
export class EditAssetComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditAssetComponent>, @Inject(MAT_DIALOG_DATA) public details: any, private appUrl: AppUrlServiceService, private services: AppServiceService) {

  }

  ngOnInit() {
  }

}
