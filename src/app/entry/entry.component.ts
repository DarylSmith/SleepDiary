import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage-service.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private storage:StorageService) { 
  }


  ngOnInit() {
  }



}
