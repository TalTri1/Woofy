import {BUSINESS_TYPES, Size, WEEKDAYS} from "../Enums/Enums";

export interface Business {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    city: string;
    role: string;
    about: string | null;
    businessName: string;
    businessTypes: BUSINESS_TYPES[];
    socialMedia: string | null;
    website: string | null;
    acceptableDogSizes: Size[];
    dogCapacity: number;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    price: number;
    workingDays: WEEKDAYS[];
    lat: number;
    lon: number;
}