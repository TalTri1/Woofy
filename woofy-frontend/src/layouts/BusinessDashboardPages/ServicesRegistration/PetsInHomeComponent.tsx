
import {PetsInHome} from "../../../models/BusinessModels/BusinessTypesModels/HomeStay/HomestayBaseModel";
import React from "react";

type FormUpdate = {
    selectedPetsInHome: PetsInHome[];
    clickPetsInHomeHandler: (homeConditions: PetsInHome) => void;
}
const PetsInHomeComponent: React.FC<FormUpdate> = ({clickPetsInHomeHandler, selectedPetsInHome}) => {


    return (

        <div
            className="self-stretch flex flex-col flex-wrap items-start justify-start gap-[8px]">
            <div
                className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                Pets in Your Home
            </div>
            <div
                className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[141px] pl-0 box-border gap-[16px] min-h-[96px] mq1050:pr-[70px] mq1050:box-border mq750:pr-[35px] mq750:box-border">
                <button
                    className={selectedPetsInHome.includes(PetsInHome.OWN_A_DOG) ? "PressedButton" : "Button"}
                    onClick={() => clickPetsInHomeHandler(PetsInHome.OWN_A_DOG)}>
                    Own a Dog
                </button>
                <button
                    className={selectedPetsInHome.includes(PetsInHome.OWN_A_CAT) ? "PressedButton" : "Button"}
                    onClick={() => clickPetsInHomeHandler(PetsInHome.OWN_A_CAT)}>
                    Own a Cat
                </button>
                <button
                    className={selectedPetsInHome.includes(PetsInHome.OWN_CAGED_PET) ? "PressedButton" : "Button"}
                    onClick={() => clickPetsInHomeHandler(PetsInHome.OWN_CAGED_PET)}>
                    Own Caged Pets
                </button>
                <button
                    className={selectedPetsInHome.includes(PetsInHome.HAS_CHILDREN) ? "PressedButton" : "Button"}
                    onClick={() => clickPetsInHomeHandler(PetsInHome.HAS_CHILDREN)}>
                    Has Children
                </button>
                <button
                    className={selectedPetsInHome.includes(PetsInHome.ONLY_ONE_CLIENT_AT_A_TIME) ? "PressedButton" : "Button"}
                    onClick={() => clickPetsInHomeHandler(PetsInHome.ONLY_ONE_CLIENT_AT_A_TIME)}>
                    Only One Client at a Time
                </button>
            </div>
        </div>
    )
}
export default PetsInHomeComponent;