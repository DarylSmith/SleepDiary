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


  public  SaveData(data:SleepEntry): void {

    this.sleepEntry.push(data);

    localStorage.setItem(this.storageName,JSON.stringify(this.sleepEntry));
    

  }

}
