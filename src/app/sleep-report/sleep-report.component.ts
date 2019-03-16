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

  public getHoursAsleepAverage():number {
    const totalHoursAsleep = this.storage.sleepEntry.reduce(function(prev, cur) {
      return prev + cur.TotalTimeAsleep
    }, 0);

    return totalHoursAsleep/this.storage.sleepEntry.length;
  }

  public getHoursInBedAverage(): number {

    const totalHoursinBed = this.storage.sleepEntry.reduce(function(prev, cur) {
      return prev + cur.TotalTimeInBed
    }, 0);

    return  totalHoursinBed/this.storage.sleepEntry.length;


  }

}
