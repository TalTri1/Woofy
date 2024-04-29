// This information is retrieved from user-registration-page
class DogModel {
    dogName: string;
    dogBreed: string;
    age: Age;
    size: Size;
    trainingLevel: TrainingLevel;
    about: string;
    specialRequirements: string;

    constructor(dogName: string, dogBreed: string, age: Age, size: Size, trainingLevel: TrainingLevel, about: string, specialRequirements: string) {
        this.dogName = dogName;
        this.dogBreed = dogBreed;
        this.age = age;
        this.size = size;
        this.trainingLevel = trainingLevel;
        this.about = about;
        this.specialRequirements = specialRequirements;
    }
}

export enum Age {
    PUPPY,
    ADULT,
    SENIOR
}

export enum Size {
    SMALL,
    MEDIUM,
    LARGE,
    XL
}

export enum TrainingLevel {
    BEGINNER,
    INTERMEDIATE,
    ADVANCED
}

export default DogModel;

