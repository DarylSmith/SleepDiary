
import { Component, OnInit } from '@angular/core';
import { SleepEntry } from '../sleep-entry';
import { StorageService } from '../storage-service.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';



@Component({
  selector: 'app-sleep-entry-form',
  templateUrl: './sleep-entry-form.component.html',
  styleUrls: ['./sleep-entry-form.component.css']
})
export class SleepEntryFormComponent implements OnInit {

  public entry: SleepEntry = new SleepEntry();

  private selectedDate:string = null;

  constructor(private storage:StorageService, private router:Router, private route:ActivatedRoute) { 

  }

  public storeEntry(){

    this.getHoursSlept();
    this.storage.SaveData(this.entry);

    alert('saved');

    this.router.navigate(['/']);


  }

  public getHoursSlept() :void{

    var TimeToBed = moment(this.entry.EntryDate+' '+this.entry.TimeToBed);
    var TimeOutOfBed = moment(this.entry.EntryDate+' '+this.entry.TimeUpForTheDay);

    var TimeAsleep = moment(this.entry.EntryDate+' '+this.entry.TimeToSleep)
    .add(this.entry.MinutesBeforeSleeping,'m')
    .add(this.entry.TotalLengthOfAwakenings,'m')
    .add(this.entry.MinutesAfterWakeup,'m');

    var TimeAwake = moment(this.entry.EntryDate+' '+this.entry.TimeOfFinalAwakening)
    .add(this.entry.TotalNapTime,'m');




    TimeOutOfBed =TimeOutOfBed.add(1,'day');
    TimeAwake = TimeAwake.add(1,'day');

   if (parseInt(TimeAsleep.format("H")) >5 )
   {
    TimeAsleep = TimeAsleep.add(12,'hour');
   }
   else
   {
    TimeAsleep = TimeAsleep.add(1,'day');
   }
   
   if (parseInt(TimeToBed.format("H")) >5 )
   {
    TimeToBed =TimeToBed.add(12,'hour');
   }
   else{
    TimeAsleep = TimeAsleep.add(1,'day');
   }

    this.entry.TotalTimeInBed=  moment.duration(moment(TimeOutOfBed, 'YYYY/MM/DD HH:mm')
    .diff(moment(TimeToBed, 'YYYY/MM/DD HH:mm'))
    ).asMinutes();

    
    this.entry.TotalTimeAsleep=  moment.duration(moment(TimeAwake, 'YYYY/MM/DD HH:mm')
    .diff(moment(TimeAsleep, 'YYYY/MM/DD HH:mm'))
    ).asMinutes();

    this.entry.TimeInBedFormatted =   `${Math.floor(this.entry.TotalTimeInBed/60) }h ${this.entry.TotalTimeInBed % 60 }m`;

    this.entry.TimeAsleepFormatted=   `${Math.floor(this.entry.TotalTimeAsleep/60) }h ${this.entry.TotalTimeAsleep % 60 }m`;




  }

  ngOnInit() {

    this.route.params.subscribe( params =>
     this.selectedDate = params['date']);
     console.log(this.selectedDate);
     if(this.selectedDate)
     {

       this.entry = this.storage.sleepEntry.find(e=> e.EntryDate === this.selectedDate);
     }
     else
     {
       this.entry = new SleepEntry();
     }
  }

}
