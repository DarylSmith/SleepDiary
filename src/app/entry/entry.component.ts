import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage-service.service';
import { Router } from '@angular/router';
import { SleepEntry } from '../sleep-entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private storage:StorageService, private router:Router) { 
  }

  removeEntry(entry:SleepEntry){
    if(confirm('Are you sure you want to remove?'))
    {
      this.storage.RemoveData(entry);
    }
  }


  ngOnInit() {
  }



}
