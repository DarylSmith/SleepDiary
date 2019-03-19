export class SleepEntry {

    EntryDate:string;

    TimeToBed:string ;

    TimeToSleep:string ;

    MinutesBeforeSleeping: number= 0;

    TotalAwakenings: number;

    TotalLengthOfAwakenings: number= 0;

    MinutesAfterWakeup: number=0;

    WakeUpEarlier:string;

    MinutesUpEarlier: number= 0;

    TimeOfFinalAwakening:string ;

    TimeUpForTheDay: string;

    QualityOfSleep: string;

    RestLevel: string;

    NumberOfNaps : number= 0;

    TotalNapTime:number= 0;

    NumberOfDrinks: number;
0
    TimeOfLastDrink: string;

    NumberOfCafDrinks:number;

    TimeOfLastCafDrink: string;

    Medication:string;

    ListOfMedications: string;

    TotalTimeInBed: number;

    TotalTimeAsleep: number;
    
    TimeInBedFormatted : string;

    TimeAsleepFormatted: string;


    Comments: string;

    constructor(){
        this.NumberOfNaps=0;

        this.NumberOfCafDrinks=0;

        this.Medication ='no';

        this.NumberOfDrinks= 0;




    }



    
}
