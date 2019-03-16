import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SleepEntryFormComponent } from './sleep-entry-form/sleep-entry-form.component';
import { EntryComponent } from './entry/entry.component';
import { SleepReportComponent } from './sleep-report/sleep-report.component';

const routes: Routes = [
  {
    path:'listing',
    component:EntryComponent
  },
  {
    path:'entry',
    component:SleepEntryFormComponent 
  },
  {
    path:'entry/:date',
    component:SleepEntryFormComponent 
  },
  {
    path:'report',
    component:SleepReportComponent 
  },
  { path: '',
  redirectTo: '/listing',
  pathMatch: 'full'
}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
