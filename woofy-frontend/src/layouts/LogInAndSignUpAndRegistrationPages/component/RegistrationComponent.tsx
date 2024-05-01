import React, { ChangeEvent, FunctionComponent } from "react";
import RegistrationModel from "../../../models/RegistrationModel";


interface RegistrationComponentProps {
    updateCompleteRegistrationUser: (updatedData: Partial<RegistrationModel>) => void;
}

const RegistrationComponent: FunctionComponent<RegistrationComponentProps> = ({ updateCompleteRegistrationUser }) => {
    // In RegistrationComponent.tsx
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(`changeHandler has been triggered`);
        const { name, value } = e.target;
        updateCompleteRegistrationUser({ [name]: value });
    };


    return (
        <form className="m-0 w-[600px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                    Profile Photo
                </div>
                <div className="flex flex-row items-center justify-start py-0 pr-[318px] pl-0 gap-[24px] mq450:pr-5 mq450:box-border mq750:flex-wrap mq750:pr-[159px] mq750:box-border">
                    <img
                        className="h-20 w-20 relative rounded-[50%] object-cover"
                        loading="lazy"
                        alt=""
                        src="/caregiver-avatar-image@2x.png"
                    />
                    <button className="cursor-pointer py-2 px-[16.5px] bg-[transparent] h-[42px] rounded-11xl box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[103px]">
                            Upload photo
                        </div>
                    </button>
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch bg-background-color-primary box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-color-neutral-neutral-light">
                    <input
                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                        placeholder="First Name*"
                        type="text"
                        onChange={changeHandler}
                        name="firstName"
                    />
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch bg-background-color-primary box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-color-neutral-neutral-light">
                    <input
                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                        placeholder="Last Name*"
                        type="text"
                        onChange={changeHandler}
                        name="lastName"
                    />
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch bg-background-color-primary box-border flex flex-row items-center justify-start py-2.5 px-[11px] gap-[12px] max-w-full border-[1px] border-solid border-color-neutral-neutral-light">
                    <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/icon--phone.svg"
                    />
                    <input
                        className="w-[calc(100%_-_46px)] [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-[calc(100%_-_36px)] p-0"
                        placeholder="Phone Number*"
                        type="tel"
                        onChange={changeHandler}
                        name="phoneNumber"
                    />
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch bg-background-color-primary box-border flex flex-row items-center justify-start py-2.5 px-[11px] gap-[12px] max-w-full border-[1px] border-solid border-color-neutral-neutral-light">
                    <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/icon--home.svg"
                    />
                    <input
                        className="w-[calc(100%_-_46px)] [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-[calc(100%_-_36px)] p-0"
                        placeholder="Permanent Address*"
                        type="text"
                        onChange={changeHandler}
                        name="address"
                    />
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch bg-background-color-primary box-border flex flex-row items-center justify-start py-2.5 px-[11px] gap-[12px] max-w-full border-[1px] border-solid border-color-neutral-neutral-light">
                    <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/icon--buildinghouse.svg"
                    />
                    <input
                        className="w-[calc(100%_-_46px)] [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-[calc(100%_-_36px)] p-0"
                        placeholder="City*"
                        type="text"
                        onChange={changeHandler}
                        name="city"
                    />
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch bg-background-color-primary box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-color-neutral-neutral-light">
                    <input
                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                        placeholder="Zip Code*"
                        type="text"
                        onChange={changeHandler}
                        name="zipCode"
                    />
                </div>
            </div>
        </form>
    );
};

export default RegistrationComponent;
