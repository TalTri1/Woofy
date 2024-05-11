import {HomeConditions} from "../../../models/BusinessModels/BusinessTypesModels/HomeStay/HomestayBaseModel";

type FormUpdate = {
    selectedHomeConditions: HomeConditions[];
    clickHomeConditionsHandler: (homeConditions: HomeConditions) => void;
}
const HomeConditionComponent: React.FC<FormUpdate> = ({clickHomeConditionsHandler, selectedHomeConditions}) => {


    return (
        <div
            className="self-stretch flex flex-col flex-wrap items-start justify-start gap-[8px]">
            <div
                className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">{`Your Home Conditions `}</div>
            <div
                className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[120px] pl-0 box-border gap-[16px] min-h-[152px] lg:pr-[60px] lg:box-border mq750:pr-[30px] mq750:box-border">
                <button
                    className={selectedHomeConditions.includes(HomeConditions.HOME) ? "PressedButton" : "Button"}
                    onClick={() => clickHomeConditionsHandler(HomeConditions.HOME)}>
                    House
                </button>
                <button
                    className={selectedHomeConditions.includes(HomeConditions.APARTMENT) ? "PressedButton" : "Button"}
                    onClick={() => clickHomeConditionsHandler(HomeConditions.APARTMENT)}>
                    Apartment
                </button>
                <button
                    className={selectedHomeConditions.includes(HomeConditions.HAS_FENCE_YARD) ? "PressedButton" : "Button"}
                    onClick={() => clickHomeConditionsHandler(HomeConditions.HAS_FENCE_YARD)}>
                    Has Fenced Yard

                </button>
                <button
                    className={selectedHomeConditions.includes(HomeConditions.DOG_ALLOWED_ON_FURNITURE) ? "PressedButton" : "Button"}
                    onClick={() => clickHomeConditionsHandler(HomeConditions.DOG_ALLOWED_ON_FURNITURE)}>
                    Dogs Allowed on Furniture
                </button>
                <button
                    className={selectedHomeConditions.includes(HomeConditions.DOG_ALLOWED_ON_BED) ? "PressedButton" : "Button"}
                    onClick={() => clickHomeConditionsHandler(HomeConditions.DOG_ALLOWED_ON_BED)}>
                    Dogs Allowed on Bed
                </button>
                <button
                    className={selectedHomeConditions.includes(HomeConditions.NON_SMOKING) ? "PressedButton" : "Button"}
                    onClick={() => clickHomeConditionsHandler(HomeConditions.NON_SMOKING)}>
                    Non-Smoking
                </button>
            </div>
        </div>

    )
}
export default HomeConditionComponent;