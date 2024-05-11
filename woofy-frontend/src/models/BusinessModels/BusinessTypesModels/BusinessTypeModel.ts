export abstract class BusinessTypeBaseModel {
    acceptableDogSizes: Size[];
    capacity: number;
    price: number;
    date: Date | undefined;
    about: string | undefined;
    imageIds: number[]; // Will store all dog images id that the user uploads
    protected constructor() {}
}

export enum Size {
    SMALL,
    MEDIUM,
    LARGE,
    GIANT
}
