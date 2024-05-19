import {Size, WEEKDAYS} from "../../Enums/Enums";

export abstract class BusinessTypeBaseModel {
    acceptableDogSizes: Size[] = [];
    dogCapacity: number = 0;
    price: number | string = "";
    startDate: Date = new Date();
    endDate: Date = new Date();
    workingDays: WEEKDAYS[] = [];
    startTime: string = "";
    endTime: string = "";
    about: string = "";
    imageIds: number[] = [];
    protected constructor() {}
}




