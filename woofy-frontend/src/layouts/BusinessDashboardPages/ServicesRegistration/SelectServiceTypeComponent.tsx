import {businessType} from "../../../models/BusinessModels/BusinessTypesModels/BusinessTypeModel";

type SelectServiceInputProps = {
    setSelectedServices: (type: businessType) => void;
    selectedServices: businessType;
}

const SelectServiceTypeComponent: React.FC<SelectServiceInputProps> = ({setSelectedServices, selectedServices}) => {

    const services = [
        {type: businessType.BOARDING, icon: "/icon--moon.svg", text: "Boarding"},
        {type: businessType.DAY_CARE, icon: "/icon--sun1.svg", text: "Day Care"},
        {type: businessType.DOG_SITTER, icon: "/icon--bed.svg", text: "Sitter"},
        {type: businessType.DOG_WALK, icon: "/icon--walk.svg", text: "Walker"}
    ];

    return (
        <div className="self-stretch flex flex-wrap items-start justify-start pt-1.5 gap-[3px]">
            {services.map(service => (
                <button
                    key={service.type}
                    onClick={() => setSelectedServices(service.type)}
                    className={selectedServices === service.type ? "ServiceTypePressedButton" : "ServiceTypeButton"}>
                    <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2 ">
                        <img className="w-6 h-6 relative overflow-hidden shrink-0" alt="" src={service.icon} />
                    </div>
                    <div className="ServiceTypeButtonText">
                        {service.text}
                    </div>
                </button>
            ))}
        </div>
    )
}
export default SelectServiceTypeComponent;