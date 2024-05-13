import {Size} from "../../DogModels/DogModel";

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


export enum BUSINESS_TYPES {
    BOARDING= 'BOARDING',
    DOG_WALK = 'DOG_WALK',
    DOG_SITTER = 'DOG_SITTER',
    DAY_CARE = 'DAY_CARE'
}

export enum WEEKDAYS {
    SUNDAY = 'SUNDAY',
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY',
}

export function formatEnumValue(enumValue: string): string {
    // Replace underscores with spaces
    let result = enumValue.replace(/_/g, ' ');

    // Capitalize the first letter of each word
    result = result.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');

    return result;
}