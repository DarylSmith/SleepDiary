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


@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,  
    SleepEntryFormComponent,

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
