import React from "react";
import {
    HOME_CONDITIONS
} from "../../../models/BusinessModels/BusinessTypesModels/StayAtBusiness/StayAtBusinessBaseModel";
import {formatEnumValue} from "../../../models/BusinessModels/BusinessTypesModels/BusinessTypeModel";

type FormUpdate = {
    selectedHomeConditions: HOME_CONDITIONS[];
    clickHomeConditionsHandler: (homeConditions: HOME_CONDITIONS) => void;
}

const HomeConditionComponent: React.FC<FormUpdate> = ({clickHomeConditionsHandler, selectedHomeConditions}) => {
    const homeConditions =  Object.values(HOME_CONDITIONS);

    return (
        <div
            className="self-stretch flex flex-col flex-wrap items-start justify-start gap-[8px]">
            <div
                className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">{`Your Home Conditions `}</div>
            <div
                className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[120px] pl-0 box-border gap-[16px] min-h-[152px] lg:pr-[60px] lg:box-border mq750:pr-[30px] mq750:box-border">
                {homeConditions.map(condition => (
                    <button
                        key={condition}
                        className={selectedHomeConditions.includes(condition) ? "PressedButton" : "Button"}
                        onClick={() => clickHomeConditionsHandler(condition)}>
                        {formatEnumValue(condition)}
                    </button>
                ))}
            </div>
        </div>

    )
}
export default HomeConditionComponent;