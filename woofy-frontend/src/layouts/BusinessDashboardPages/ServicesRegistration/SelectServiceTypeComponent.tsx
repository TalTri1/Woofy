import React from "react";
import {BUSINESS_TYPES} from "../../../models/BusinessModels/BusinessTypesModels/BusinessTypeModel";

type SelectServiceInputProps = {
    setSelectedServices: (type: BUSINESS_TYPES) => void;
    selectedServices: BUSINESS_TYPES;
}
const SelectServiceTypeComponent: React.FC<SelectServiceInputProps> = ({setSelectedServices, selectedServices}) => {

    const services = [
        {type: BUSINESS_TYPES.BOARDING, icon: "/icon--moon.svg", text: "Boarding"},
        {type: BUSINESS_TYPES.DAY_CARE, icon: "/icon--sun1.svg", text: "Day Care"},
        {type: BUSINESS_TYPES.DOG_SITTER, icon: "/icon--bed.svg", text: "Sitter"},
        {type: BUSINESS_TYPES.DOG_WALK, icon: "/icon--walk.svg", text: "Walker"}
    ];

    return (
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div
                className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                Select Your Service Type
            </div>
            <div
                className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0 box-border gap-[16px] min-h-[96px]">
                {services.map(service => (
                    <button
                        key={service.type}
                        onClick={() => setSelectedServices(service.type)}
                        className={selectedServices === service.type ? "PressedButton" : "Button"}
                        style={{width: '127px', height: '45px'}}
                    >
                        <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2 ">
                            <img className={`w-6 h-6 relative overflow-hidden shrink-0 ${selectedServices === service.type ? "white-icon" : ""}`} alt="" src={service.icon}/>
                        </div>
                        <div className={`ServiceTypeButtonText ${selectedServices === service.type ? "white-text" : ""}`}>
                            {service.text}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}
export default SelectServiceTypeComponent;