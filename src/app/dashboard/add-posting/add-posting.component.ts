import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppUrlServiceService } from '../../app-url-service.service';
import { AppServiceService } from '../../app-service.service';
import * as momentzone from 'moment-timezone';

@Component({
  selector: 'app-add-posting',
  templateUrl: './add-posting.component.html',
  styleUrls: ['./add-posting.component.scss']
})
export class AddPostingComponent implements OnInit {
  accList: any=[];
  desList: any=[];
  req: any={};
  panelMem: any;
  panels: any =[];
  jobStatus: any = ['Active','Hold','Closed'];

  constructor(private dialogRef: MatDialogRef<AddPostingComponent>, @Inject(MAT_DIALOG_DATA) public details: any, private appUrl: AppUrlServiceService, private services: AppServiceService) { 
    this.accList = this.details.account;
    this.desList = this.details.designation;
    console.log(this.accList);
  }

  ngOnInit() {
  }
  addMem(data:any){
    console.log(data);
    this.panels.push(data);
    this.panelMem = '';
    console.log(this.panels);
  }
  submit(data:any){    
    data.jId = momentzone().tz('Asia/Kolkata').unix() * 1000,
    data.panel = this.panels
    console.log(data);
    this.services.create(this.appUrl.geturlfunction('POST_JOB'), data).subscribe(res => {
      if (res.status == true) {        
        this.dialogRef.close('RELOAD');
      }
    })
  }

}
