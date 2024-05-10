import {Size} from "../../../models/DogModels/DogModel";
import {PetsInHome} from "../../../models/BusinessModels/BusinessTypesModels/HomeStay/HomestayBaseModel";

type DogSizeInputProps = {
    selectedSize: Size[];
    onSizeClick: (size: Size) => void;
}
const DogSizeInput: React.FC<DogSizeInputProps> = ({onSizeClick, selectedSize}) => {

    return (
        <div
            className="self-stretch flex flex-col  items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
            <div className="self-stretch relative leading-[150%]">
                Acceptable Dog Sizes
            </div>
            <div
                className="self-stretch flex flex-row whitespace-nowrap items-start justify-center py-0 pr-[137px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq750:pr-[68px] mq750:box-border">
                <button
                    type="button"
                    className={selectedSize.includes(Size.SMALL) ? "PressedButton" : "Button"}
                    onClick={() => onSizeClick(Size.SMALL)}>
                    Small <br/> 2-9 kg
                </button>
                <button
                    type="button"
                    className={selectedSize.includes(Size.MEDIUM) ? "PressedButton" : "Button"}
                    onClick={() => onSizeClick(Size.MEDIUM)}>
                    Medium <br/> 9-22 kg
                </button>
                <button
                    type="button"
                    className={selectedSize.includes(Size.LARGE) ? "PressedButton" : "Button"}
                    onClick={() => onSizeClick(Size.LARGE)}>
                    Large <br/> 22-45 kg
                </button>
                <button
                    type="button"
                    className={selectedSize.includes(Size.GIANT) ? "PressedButton" : "Button"}
                    onClick={() => onSizeClick(Size.GIANT)}>
                    Giant <br/> 45 kg +
                </button>
            </div>
        </div>
    );
};

export default DogSizeInput;
