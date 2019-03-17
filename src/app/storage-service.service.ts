import { Injectable } from '@angular/core';
import { SleepEntry } from './sleep-entry';

@Injectable()
export class StorageService {

  private storageName ='sleepEntries';

  public sleepEntry: SleepEntry[]


  constructor() {

    const storageData = localStorage.getItem(this.storageName);

    if (storageData === null)
    {
      this.sleepEntry =[];
    }
    else{

      this.sleepEntry = JSON.parse(storageData);
    }

   }

   public clearAllEntries():void{
    
    this.sleepEntry=[];
    localStorage.setItem(this.storageName,JSON.stringify(this.sleepEntry));
  
   }


  public  SaveData(data:SleepEntry): void {

    //check if item is there with that date. if it is, let's replace
    var item = this.sleepEntry.find(e=> e.EntryDate === data.EntryDate);
    if(item)
    {
      this.sleepEntry = this.sleepEntry.filter(e => e.EntryDate !==  data.EntryDate);
    }

    this.sleepEntry.push(data);

    this.sleepEntry = this.sleepEntry.filter(e => e.EntryDate);

    localStorage.setItem(this.storageName,JSON.stringify(this.sleepEntry));
    

  }

}
