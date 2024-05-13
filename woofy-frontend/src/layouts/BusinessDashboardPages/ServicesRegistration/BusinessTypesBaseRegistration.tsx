import DogSizeInput from "../components/DogSizeInput";
import {Size} from "../../../models/DogModels/DogModel";
import React from "react";
import {WEEKDAYS} from "../../../models/BusinessModels/BusinessTypesModels/BusinessTypeModel";

type FormUpdate = {
    selectedSize: Size[];
    onSizeClick: (size: Size) => void;
    selectedDays: WEEKDAYS[];
    clickWorkingDaysHandler: (day: WEEKDAYS) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;

}
const BusinessTypesBaseRegistration: React.FC<FormUpdate> = ({
                                                                 onSizeClick,
                                                                 selectedSize,
                                                                 handleInputChange,
                                                                 selectedDays,
                                                                 clickWorkingDaysHandler
                                                             }) => {
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
                    Asked Price For Service (Per Visit)
                </div>
                <div
                    className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                    <input
                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                        placeholder="Price*"
                        type="number"
                        required={true}
                        name="price"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="self-stretch relative leading-[150%]">
                Availability For Service
            </div>
            <div
                className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                <label>
                    Start Date
                    <input
                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                        type="date"
                        name="startDate"
                        required={true}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    End Date
                    <input
                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                        type="date"
                        name="endDate"
                        required={true}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div
                className="self-stretch flex flex-col flex-wrap items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
                <div className="self-stretch relative leading-[150%]">
                    Working Days
                </div>
                <div
                    className="self-stretch flex flex-row whitespace-nowrap items-start justify-center py-0 pr-[137px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq750:pr-[68px] mq750:box-border">
                    {Object.values(WEEKDAYS).map(day => (
                        <button
                            key={day}
                            type="button"
                            className={selectedDays.includes(day) ? "PressedButton" : "Button"}
                            onClick={() => clickWorkingDaysHandler(day)}
                        >
                            {day}
                        </button>
                    ))}
                </div>
            </div>
            <div className="self-stretch relative leading-[150%]">
                Working Hours
            </div>
            <div
                className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                <label>
                    Start Time
                    <input
                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                        type="time"
                        name="startTime"
                        required={true}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    End Time
                    <input
                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                        type="time"
                        name="endTime"
                        required={true}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
        </form>
    )
}
export default BusinessTypesBaseRegistration;