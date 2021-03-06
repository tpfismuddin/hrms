import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';
import {DemoMaterialModule} from './master/master.module';
import {AppServiceService} from './app-service.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskAssignmentComponent } from './task-assignment/task-assignment.component';
import { InsightsComponent } from './insights/insights.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { LayoutComponent } from './layout/layout.component';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';
import { AddAssetComponent } from './task-assignment/add-asset/add-asset.component';
import * as _ from 'underscore';
import { HttpClientModule } from '@angular/common/http';
import { AddPostingComponent } from './dashboard/add-posting/add-posting.component'; 
import { CKEditorModule } from 'ngx-ckeditor';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskAssignmentComponent,
    InsightsComponent,
    LoginComponent,
    LayoutComponent,
    AddAssetComponent,
    AddPostingComponent,
  ], 
  entryComponents: [
    AddAssetComponent,
    AddPostingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    MatNativeDateModule,
    MatMenuModule,
    MatIconModule,
    DemoMaterialModule,
    HttpClientModule,
    RouterModule,
    CKEditorModule,
    MatRadioModule
  ],
  providers: [AppServiceService,AppServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
