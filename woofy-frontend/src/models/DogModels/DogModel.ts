class DogModel {
    dogName: string;
    dogBreed: string;
    age: Age;
    size: Size;
    trainingLevel: TrainingLevel;
    about: string;
    specialRequirements: string;
    imageIds: number[]; // Will store all dog images id that the user uploads


    constructor(dogName: string, dogBreed: string, age: Age, size: Size, trainingLevel: TrainingLevel, about: string, specialRequirements: string) {
        this.dogName = dogName;
        this.dogBreed = dogBreed;
        this.age = age;
        this.size = size;
        this.trainingLevel = trainingLevel;
        this.about = about;
        this.specialRequirements = specialRequirements;
        this.imageIds = [];
    }
}

export enum Age {
    PUPPY= 'PUPPY',
    ADULT = 'ADULT',
    SENIOR= 'SENIOR',
}

export enum Size {
    SMALL= 'SMALL',
    MEDIUM = 'MEDIUM',
    LARGE = 'LARGE',
    GIANT = 'GIANT'
}

export enum TrainingLevel {
    BEGINNER= 'BEGINNER',
    INTERMEDIATE = 'INTERMEDIATE',
    ADVANCED = 'ADVANCED'
}

export default DogModel;

