
import { Component, OnInit } from '@angular/core';
import { SleepEntry } from '../sleep-entry';
import { StorageService } from '../storage-service.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';



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

    this.storage.SaveData(this.entry);

    alert('saved');

    this.router.navigate(['/']);


  }

  ngOnInit() {

    this.route.params.subscribe( params =>
     this.selectedDate = params['date']);

     if(this.selectedDate !== null)
     {
       this.entry = this.storage.sleepEntry.find(e=> e.EntryDate === this.selectedDate);
     }
  }

}
