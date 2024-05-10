import {BusinessTypeBaseModel, Size} from "../BusinessTypeModel";

export abstract class HomestayBaseModel extends BusinessTypeBaseModel {

    homeConditions: HomeConditions[];
    petsInHome: PetsInHome[];

    protected constructor() {
        super();
    }
}

export enum HomeConditions {
    HOME = 'HOME',
    APARTMENT = 'APARTMENT',
    HAS_FENCE_YARD = 'HAS_FENCE_YARD',
    DOG_ALLOWED_ON_FURNITURE = 'DOG_ALLOWED_ON_FURNITURE',
    DOG_ALLOWED_ON_BED = 'DOG_ALLOWED_ON_BED',
    NON_SMOKING = 'NON_SMOKING'
}

export enum PetsInHome {
    OWN_A_DOG = 'OWN_A_DOG',
    OWN_A_CAT = 'OWN_A_CAT',
    OWN_CAGED_PET = 'OWN_CAGED_PET',
    HAS_CHILDREN = 'HAS_CHILDREN',
    ONLY_ONE_CLIENT_AT_A_TIME = 'ONLY_ONE_CLIENT_AT_A_TIME'
}