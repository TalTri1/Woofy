import {Size} from "../../DogModels/DogModel";

export abstract class BusinessTypeBaseModel {
    businessName: string | undefined;
    businessType: businessType | undefined;
    acceptableDogSizes: Size[] = [];
    dogCapacity: number | undefined;
    price: number | undefined;
    availability: Date | undefined;
    about: string | undefined;
    imageIds: number[] = [];
    protected constructor() {}
}


export enum businessType {
    BOARDING= 'BOARDING',
    DOG_WALK = 'DOG_WALK',
    DOG_SITTER = 'DOG_SITTER',
    DAY_CARE = 'DAY_CARE'
}