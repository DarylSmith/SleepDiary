export class SleepEntry {

    EntryDate:string;

    TimeToBed:string ='11:00';

    TimeToSleep:string ='11:30';

    MinutesBeforeSleeping: number= 0;

    TotalAwakenings: number;

    TotalLengthOfAwakenings: number= 0;

    MinutesAfterWakeup: number=0;

    WakeUpEarlier:string;

    MinutesUpEarlier: number= 0;

    TimeOfFinalAwakening:string ='6:00';

    TimeUpForTheDay: string ='6:30';

    QualityOfSleep: string;

    RestLevel: string;

    NumberOfNaps : number= 0;

    TotalNapTime:number= 0;

    NumberOfDrinks: number;

    TimeOfLastDrink: string;

    NumberOfCafDrinks:number;

    TimeOfLastCafDrink: string;

    Medication:string;

    ListOfMedications: string;

    TotalTimeInBed: number;

    TotalTimeAsleep: number;

    Comments: string;

    constructor(){
        this.NumberOfNaps=0;

        this.NumberOfCafDrinks=0;

        this.Medication ='no';

        this.NumberOfDrinks= 0;




    }



    
}
