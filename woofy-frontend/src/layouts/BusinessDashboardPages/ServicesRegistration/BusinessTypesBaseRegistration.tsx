import DogSizeInput from "../components/DogSizeInput";
import {Size} from "../../../models/DogModels/DogModel";
import SelectServiceTypeComponent from "./SelectServiceTypeComponent";
import {ChangeEvent} from "react";
import {BoardingModel} from "../../../models/BusinessModels/BusinessTypesModels/StayAtBusiness/BoardingModel";
import {DogWalkerModel} from "../../../models/BusinessModels/BusinessTypesModels/HomeStay/DogWalkerModel";
import {DayCareModel} from "../../../models/BusinessModels/BusinessTypesModels/StayAtBusiness/DayCareModel";
import {DogSitterModel} from "../../../models/BusinessModels/BusinessTypesModels/HomeStay/DogSitterModel";

type FormUpdate = {
    selectedSize: Size[];
    onSizeClick: (size: Size) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}
const BusinessTypesBaseRegistration: React.FC<FormUpdate> = ({onSizeClick, selectedSize, handleInputChange}) => {

    const sizes = [
        {size: Size.SMALL, text: "Small <br/> 2-9 kg"},
        {size: Size.MEDIUM, text: "Medium <br/> 9-22 kg"},
        {size: Size.LARGE, text: "Large <br/> 22-45 kg"},
        {size: Size.GIANT, text: "Giant <br/> 45 kg +"}
    ];



    return (
        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
            <DogSizeInput selectedSize={selectedSize} onSizeClick={onSizeClick}/>
            <div
                className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                <div className="self-stretch relative leading-[150%]">
                    Dog Capacity Per Day
                </div>
                <div
                    className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                    <input
                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                        placeholder="Number of Dogs*"
                        type="number"
                        name="dogCapacity"
                        required={true}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div
                className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
                <div className="self-stretch relative leading-[150%]">
                    About yourself
                </div>
                <textarea
                    className="bg-text-alternate [outline:none] self-stretch h-[180px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-0.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral border-[1px] border-solid border-border-secondary"
                    placeholder="Tell us about the Service..."
                    maxLength={1500}
                    name="about"
                    onChange={handleInputChange}
                />
            </div>
            <div
                className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                <div className="self-stretch relative leading-[150%]">
                    Asked Price For Sitter Service (Per Visit)
                </div>
                <div
                    className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                    <input
                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                        placeholder="Price*"
                        type="text"
                        required={true}
                        name="price"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div
                className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                <div className="self-stretch relative leading-[150%]">
                    Availability For Sitter Service
                </div>
                <div
                    className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                    <input
                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                        placeholder="Date*"
                        type="date"
                        name="availability"
                        required={true}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </form>
    )
}
export default BusinessTypesBaseRegistration;