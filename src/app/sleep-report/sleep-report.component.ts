import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sleep-report',
  templateUrl: './sleep-report.component.html',
  styleUrls: ['./sleep-report.component.css']
})
export class SleepReportComponent implements OnInit {





  constructor(private storage: StorageService, private route:ActivatedRoute) { }

  ngOnInit() {


  }

  public getHoursAsleepAverage():string {
    const totalMinutesAsleep = this.storage.sleepEntry.reduce(function(prev, cur) {
      return prev + cur.TotalTimeAsleep
    }, 0);

    const bedAvg =   totalMinutesAsleep/this.storage.sleepEntry.length;

      return  `${Math.floor(bedAvg/60) }h ${  Math.floor(bedAvg % 60) }m`;
  }

  public getHoursInBedAverage(): string {

    const totalMinutesInBed = this.storage.sleepEntry.reduce(function(prev, cur) {
      return prev + cur.TotalTimeInBed
    }, 0);

    const bedAvg =  totalMinutesInBed /this.storage.sleepEntry.length;

    return  `${Math.floor(bedAvg/60) }h ${  Math.floor(bedAvg % 60) }m`;


  }

}
