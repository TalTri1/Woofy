import BasicSignUpModel from "./UserModels/BasicSignUpModel"

class RegistrationModel {
    basicSignUpModel: BasicSignUpModel;
    userType: USERTYPE;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    city: string;
    zipCode: string;

    constructor(basicSignUpModel: BasicSignUpModel, userType: USERTYPE, firstName: string, lastName: string, phoneNumber: string, address: string, city: string, zipCode: string) {
        this.basicSignUpModel = basicSignUpModel;
        this.userType = userType;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.city = city;
        this.zipCode = zipCode;
    }
}

export enum USERTYPE {
    CUSTOMER,
    BUISNESS
}

export default RegistrationModel;

