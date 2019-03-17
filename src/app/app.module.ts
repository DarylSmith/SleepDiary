import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { 
  FormsModule, 
  ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { SleepEntryFormComponent } from './sleep-entry-form/sleep-entry-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { StorageService } from './storage-service.service';
import { SleepReportComponent } from './sleep-report/sleep-report.component';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,  
    SleepEntryFormComponent, 
    SleepReportComponent

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    OrderModule
  
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
