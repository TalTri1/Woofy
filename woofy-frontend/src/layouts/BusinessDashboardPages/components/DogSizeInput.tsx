import {Size} from "../../../models/DogModels/DogModel";
import React from "react";

type DogSizeInputProps = {
    selectedSize: Size[];
    onSizeClick: (size: Size) => void;
}

const DogSizeInput: React.FC<DogSizeInputProps> = ({onSizeClick, selectedSize}) => {
    const dogSizes = [
        {size: Size.SMALL, weight: '2-9 kg'},
        {size: Size.MEDIUM, weight: '9-22 kg'},
        {size: Size.LARGE, weight: '22-45 kg'},
        {size: Size.GIANT, weight: '45 kg +'},
    ];

    return (
        <div
            className="self-stretch flex flex-col flex-wrap items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
            <div className="self-stretch relative leading-[150%]">
                Acceptable Dog Sizes
            </div>
            <div
                className="self-stretch flex flex-row whitespace-nowrap items-start justify-center py-0 pr-[137px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq750:pr-[68px] mq750:box-border">
                {dogSizes.map(({size, weight}) => (
                    <button
                        key={size}
                        type="button"
                        className={selectedSize.includes(size) ? "PressedButton" : "Button"}
                        onClick={() => onSizeClick(size)}>
                        {size} <br/> {weight}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DogSizeInput;