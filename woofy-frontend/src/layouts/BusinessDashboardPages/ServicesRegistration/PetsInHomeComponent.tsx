import React from "react";
import {PETS_IN_HOME} from "../../../models/BusinessModels/BusinessTypesModels/StayAtBusiness/StayAtBusinessBaseModel";
import {formatEnumValue} from "../../../models/BusinessModels/BusinessTypesModels/BusinessTypeModel";

type FormUpdate = {
    selectedPetsInHome: PETS_IN_HOME[];
    clickPetsInHomeHandler: (homeConditions: PETS_IN_HOME) => void;
}

const PetsInHomeComponent: React.FC<FormUpdate> = ({clickPetsInHomeHandler, selectedPetsInHome}) => {
    const petsInHomeConditions = Object.values(PETS_IN_HOME);

    return (
        <div
            className="self-stretch flex flex-col flex-wrap items-start justify-start gap-[8px]">
            <div
                className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                Pets in Your Home
            </div>
            <div
                className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[141px] pl-0 box-border gap-[16px] min-h-[96px] mq1050:pr-[70px] mq1050:box-border mq750:pr-[35px] mq750:box-border">
                {petsInHomeConditions.map(condition => (
                    <button
                        key={condition}
                        className={selectedPetsInHome.includes(condition) ? "PressedButton" : "Button"}
                        onClick={() => clickPetsInHomeHandler(condition)}>
                        {formatEnumValue(condition)}
                    </button>
                ))}
            </div>
        </div>
    )
}
export default PetsInHomeComponent;