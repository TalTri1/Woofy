import {BUSINESS_TYPES, Size, WEEKDAYS} from "../Enums/Enums";
import {DogSitterModel} from "./BusinessTypesModels/HomeStay/DogSitterModel";
import {DogWalkerModel} from "./BusinessTypesModels/HomeStay/DogWalkerModel";
import {BoardingModel} from "./BusinessTypesModels/StayAtBusiness/BoardingModel";
import {DayCareModel} from "./BusinessTypesModels/StayAtBusiness/DayCareModel";

export interface Business {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    city: string;
    role: string;
    about: string | null;
    profilePhotoID: number | null;
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
    images: Number[];
    dogSitterEntity: DogSitterModel;
    dogWalkerEntity: DogWalkerModel;
    boardingEntity: BoardingModel;
    dayCareEntity: DayCareModel;
}