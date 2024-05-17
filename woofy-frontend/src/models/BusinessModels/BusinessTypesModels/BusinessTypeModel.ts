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




export function formatEnumValue(enumValue: string): string {
    // Replace underscores with spaces
    let result = enumValue.replace(/_/g, ' ');

    // Capitalize the first letter of each word
    result = result.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');

    return result;
}