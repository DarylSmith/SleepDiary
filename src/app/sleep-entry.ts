export class SleepEntry {

    EntryDate:string;

    TimeToBed:string;

    TimeToSleep:string;

    MinutesBeforeSleeping: number;

    TotalAwakenings: number;

    TotalLengthOfAwakenings: number;

    MinutesAfterWakeup: number;

    WakeUpEarlier:string;

    MinutesUpEarlier: number;

    TimeUpForTheDay: string;

    QualityOfSleep: string;

    RestLevel: string;

    NumberOfNaps : number;

    TotalNapTime:number;

    NumberOfDrinks: number;

    TimeOfLastDrink: string;

    NumberOfCafDrinks:number;

    TimeOfLastCafDrink: string;

    Medication:string;

    ListOfMedications: string;

    Comments: string;

    constructor(){
        this.NumberOfNaps=0;

        this.NumberOfCafDrinks=0;

        this.Medication ='no';

        this.NumberOfDrinks= 0;




    }



    
}
