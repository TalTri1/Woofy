import {FunctionComponent, SetStateAction, useCallback, useContext, useState} from "react";
import NavbarAfterLogin from "../NavBarPage/NavbarAfterLogin";
import BusinessDashboardMenuList from "../BusinessDashboardPages/components/BusinessDashboardMenuList";
import DogSizeInput from "../BusinessDashboardPages/components/DogSizeInput";
import {useNavigate} from "react-router-dom";
import {Size} from "../../models/DogModels/DogModel";
import {UserContext} from "../../provider/UserProvider";
import {BoardingModel} from "../../models/BusinessModels/BusinessTypesModels/StayAtBusiness/BoardingModel";
import {DogWalkerModel} from "../../models/BusinessModels/BusinessTypesModels/HomeStay/DogWalkerModel";
import {DayCareModel} from "../../models/BusinessModels/BusinessTypesModels/StayAtBusiness/DayCareModel";
import {DogSitterModel} from "../../models/BusinessModels/BusinessTypesModels/HomeStay/DogSitterModel";
import {HomeConditions, PetsInHome} from "../../models/BusinessModels/BusinessTypesModels/HomeStay/HomestayBaseModel";
import '../../css/button.css';

const ServicesSection: FunctionComponent = () => {

    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState<Size[]>([]);
    const [selectedHomeConditions, setHomeConditions] = useState<HomeConditions[]>([]);
    const [selectedPetsInHome, setPetsInHome] = useState<PetsInHome[]>([]);
    const {userDetails} = useContext(UserContext); // The user details
    const [images, setImages] = useState<Array<File | null>>([null, null, null, null]);


    // Boarding, Day Care, Sitter, Walker buttons
    const [activeButton, setActiveButton] = useState('Boarding');
    const onButtonClick = useCallback((buttonName: SetStateAction<string>) => {
        setActiveButton(buttonName);
    }, []);


    const [business, setBusiness] = useState(() => {
        switch (activeButton) {
            case 'Boarding':
                return new BoardingModel();
            case 'Walking':
                return new DogWalkerModel();
            case 'Day Care':
                return new DayCareModel();
            case 'Sitter':
                return new DogSitterModel();
        }
    });

    const clickSizeHandlerDog = (size: Size) => {
        setSelectedSize(prevSizes => {
            let newSizes;
            if (prevSizes.includes(size)) {
                // If the size is already selected, remove it from the array
                newSizes = prevSizes.filter(s => s !== size);
            } else {
                // If the size is not selected, add it to the array
                newSizes = [...prevSizes, size];
            }
            // Update the business model with the new sizes
            updateBusiness('acceptableDogSizes', newSizes);
            return newSizes;
        });
    };

    const clickHomeConditionsHandler = (homeCondition: HomeConditions) => {
        setHomeConditions(prevHomeConditions => {
            let newHomeConditions;
            if (prevHomeConditions.includes(homeCondition)) {
                // If the home condition is already selected, remove it from the array
                newHomeConditions = prevHomeConditions.filter(s => s !== homeCondition);
            } else {
                // If the home condition is not selected, add it to the array
                newHomeConditions = [...prevHomeConditions, homeCondition];
            }
            // Update the business model with the new home conditions
            updateBusiness('homeConditions', newHomeConditions);
            return newHomeConditions;
        });
    }

    const clickPetsInHomeHandler = (petsInHome: PetsInHome) => {
        setPetsInHome(prevPetsInHome => {
            let newPetsInHome;
            if (prevPetsInHome.includes(petsInHome)) {
                // If the pets in home is already selected, remove it from the array
                newPetsInHome = prevPetsInHome.filter(s => s !== petsInHome);
            } else {
                // If the pets in home is not selected, add it to the array
                newPetsInHome = [...prevPetsInHome, petsInHome];
            }
            // Update the business model with the new pets in home
            updateBusiness('petsInHome', newPetsInHome);
            return newPetsInHome;
        });
    }

    const updateBusiness = (key: string, value: any) => {
        setBusiness(prevState => {
            if (prevState instanceof BoardingModel || prevState instanceof DayCareModel || prevState instanceof DogWalkerModel || prevState instanceof DogSitterModel) {
                return {...prevState, [key]: value};
            }
            return prevState;
        });
    }

    return (
        <div
            className="w-full relative bg-text-alternate overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
            <NavbarAfterLogin/>
            <main
                className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-base text-text-primary font-text-medium-normal mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
                <div
                    className="w-[312px] bg-text-alternate overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[2997px] box-border lg:pb-[1266px] lg:box-border mq1050:hidden mq1050:pb-[823px] mq1050:box-border mq750:pb-[535px] mq750:box-border">
                    <BusinessDashboardMenuList/>
                </div>
                <section
                    className="flex-1 flex flex-col items-start justify-start max-w-[calc(100%_-_312px)] text-center text-29xl text-text-alternate font-text-medium-normal mq1050:max-w-full">
                    <div
                        className="self-stretch bg-app1 overflow-hidden flex flex-col items-center justify-start pt-[30px] px-5 pb-[60px] box-border gap-[0px] max-w-full">
                        <div className="flex flex-row items-center justify-center max-w-full">
                            <h1 className="relative text-[48px] leading-[120%] font-inter text-white text-center">
                                Set Up Your Services Details
                            </h1>
                        </div>
                        <div className="relative text-[18px] leading-[150%] font-inter text-white text-center">
                            Complete the forms below to provide your business information.
                        </div>
                    </div>
                    <div
                        className="self-stretch bg-text-alternate flex flex-col items-center justify-center max-w-full text-5xl text-text-primary mq750:gap-[20px]">
                        <div className="self-stretch flex flex-col items-center justify-center max-w-full">
                            <div
                                className="self-stretch bg-text-alternate flex flex-row items-end justify-start pt-9 px-0 pb-6 box-border max-w-full">
                                <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                                    <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-bold font-inherit mq450:text-lgi mq450:leading-[27px]">
                                        Services Details
                                    </h3>
                                    <div className="self-stretch relative text-base leading-[150%]">
                                        Please Complete your business account information.
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-[600px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full text-left text-base">
                                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                                    <div
                                        className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                        <input
                                            className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                            placeholder="Business Name (Optional)"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                                    <div className="self-stretch relative leading-[150%]">
                                        Your Type of Services (You can choose multiple choices)
                                    </div>
                                    <div
                                        className="self-stretch flex flex-row flex-wrap items-start justify-start pt-1.5 pb-0 pr-[26px] pl-0 gap-[16px]">
                                        <button
                                            onClick={() => onButtonClick('Boarding')}
                                            className={activeButton === 'Boarding' ? "ServiceTypePressedButton" : "ServiceTypeButton"}>
                                            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2 ">
                                                <img
                                                    className="w-6 h-6 relative overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/icon--moon.svg"
                                                />
                                            </div>
                                            <div className="ServiceTypeButtonText"
                                            >
                                                Boarding
                                            </div>
                                        </button>
                                        <button
                                            onClick={() => onButtonClick('Day Care')}
                                            className={activeButton === 'Day Care' ? "ServiceTypePressedButton" : "ServiceTypeButton"}>
                                            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2 ">
                                                <img
                                                    className="w-6 h-6 relative overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/icon--sun1.svg"
                                                />
                                            </div>
                                            <div className="ServiceTypeButtonText">
                                                Day Care
                                            </div>
                                        </button>
                                        <button
                                            onClick={() => onButtonClick('Sitter')}
                                            className={activeButton === 'Sitter' ? "ServiceTypePressedButton" : "ServiceTypeButton"}>
                                            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2">
                                                <img
                                                    className="w-6 h-6 relative overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/icon--bed.svg"
                                                />
                                            </div>
                                            <div className="ServiceTypeButtonText">
                                                Sitter
                                            </div>
                                        </button>
                                        <button
                                            onClick={() => onButtonClick('Walker')}
                                            className={activeButton === 'Walker' ? "ServiceTypePressedButton" : "ServiceTypeButton"}>
                                            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2">
                                                <img
                                                    className="w-6 h-6 relative overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/icon--walk.svg"
                                                />
                                            </div>
                                            <div className="ServiceTypeButtonText">
                                                Walker
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                {activeButton === 'Boarding' && (
                                    <div>
                                        <header
                                            className="self-stretch flex flex-col items-start justify-start gap-[8px] text-center text-5xl text-text-primary font-text-medium-normal mb-6">
                                            <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
                                                Boarding Service Form
                                            </h3>

                                            <div className="self-stretch relative text-base leading-[150%]">
                                                Please fill the necessary information found in the following questions
                                            </div>
                                        </header>

                                        <div
                                            className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                                            <DogSizeInput selectedSize={selectedSize}
                                                          onSizeClick={clickSizeHandlerDog}/>
                                            <div
                                                className="self-stretch flex flex-col items-start justify-start gap-[8px]">
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
                                            <div
                                                className="self-stretch flex flex-col items-start justify-start gap-[8px]">
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
                                                        required={true}
                                                    />
                                                </div>
                                            </div>

                                            <div
                                                className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    About your Boarding Service
                                                </div>
                                                <textarea
                                                    className="bg-text-alternate [outline:none] self-stretch h-[180px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-0.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral border-[1px] border-solid border-border-secondary"
                                                    placeholder="Tell us about the Service..."
                                                    maxLength={1500}
                                                />
                                            </div>

                                            <div
                                                className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Asked Price For Boarding Service (Per Night)
                                                </div>
                                                <div
                                                    className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                                    <input
                                                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                        placeholder="Price*"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>

                                            <div
                                                className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Availability For Boarding Service
                                                </div>
                                                <div
                                                    className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                                    <input
                                                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                        placeholder="Date*"
                                                        type="date"
                                                    />
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                )}

                                {activeButton === 'Day Care' && (


                                    <div>
                                        <header
                                            className="self-stretch flex flex-col items-start justify-start gap-[8px] text-center text-5xl text-text-primary font-text-medium-normal mb-6">
                                            <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
                                                Day Care Service Form
                                            </h3>

                                            <div className="self-stretch relative text-base leading-[150%]">
                                                Please fill the necessary information found in the following questions
                                            </div>
                                        </header>

                                        <form
                                            className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                                            <DogSizeInput selectedSize={selectedSize}
                                                          onSizeClick={clickSizeHandlerDog}/>
                                            <div
                                                className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                                                <div
                                                    className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">{`Your Home Conditions `}</div>
                                                <div
                                                    className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[120px] pl-0 box-border gap-[16px] min-h-[152px] lg:pr-[60px] lg:box-border mq750:pr-[30px] mq750:box-border">
                                                    <button
                                                        className="cursor-pointer py-1.5 px-[15px] bg-[transparent] w-[81px] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div
                                                            className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[49px]">
                                                            House
                                                        </div>
                                                    </button>
                                                    <button
                                                        className="cursor-pointer [border:none] py-2 px-4 bg-app1 rounded-3xs flex flex-row items-center justify-center hover:bg-cornflowerblue">
                                                        <div
                                                            className="relative text-base leading-[150%] font-text-medium-normal text-white text-left inline-block min-w-[81px]">
                                                            Apartment
                                                        </div>
                                                    </button>
                                                    <button
                                                        className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div
                                                            className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[128px]">
                                                            Has Fenced Yard
                                                        </div>
                                                    </button>
                                                    <button
                                                        className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div
                                                            className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left">
                                                            Dogs Allowed on Furniture
                                                        </div>
                                                    </button>
                                                    <button
                                                        className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div
                                                            className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left">
                                                            Dogs Allowed on Bed
                                                        </div>
                                                    </button>
                                                    <button
                                                        className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div
                                                            className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[104px]">
                                                            Non-Smoking
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div
                                                className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                                                <div
                                                    className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                                                    Pets in Your Home
                                                </div>
                                                <div
                                                    className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[141px] pl-0 box-border gap-[16px] min-h-[96px] mq1050:pr-[70px] mq1050:box-border mq750:pr-[35px] mq750:box-border">
                                                    <button
                                                        className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div
                                                            className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[84px]">
                                                            Own a Dog
                                                        </div>
                                                    </button>
                                                    <button
                                                        className="cursor-pointer [border:none] py-2 px-4 bg-app1 rounded-3xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue">
                                                        <div
                                                            className="relative text-base leading-[150%] font-text-medium-normal text-white text-left inline-block min-w-[80px]">
                                                            Own a Cat
                                                        </div>
                                                    </button>
                                                    <button
                                                        className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div
                                                            className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[127px]">
                                                            Own Caged Pets
                                                        </div>
                                                    </button>
                                                    <button
                                                        className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div
                                                            className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[97px]">
                                                            Has Children
                                                        </div>
                                                    </button>
                                                    <button
                                                        className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div
                                                            className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left">
                                                            Only One Client at a Time
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>

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
                                                    />
                                                </div>
                                            </div>

                                            <div
                                                className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    About your Day Care Service
                                                </div>
                                                <textarea
                                                    className="bg-text-alternate [outline:none] self-stretch h-[180px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-0.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral border-[1px] border-solid border-border-secondary"
                                                    placeholder="Tell us about the Service..."
                                                    maxLength={1500}
                                                />
                                            </div>

                                            <div
                                                className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Asked Price For Day Care Service (Per Day)
                                                </div>
                                                <div
                                                    className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                                    <input
                                                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                        placeholder="Price*"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>

                                            <div
                                                className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Availability For Day Care Service
                                                </div>
                                                <div
                                                    className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                                    <input
                                                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                        placeholder="Date*"
                                                        type="date"
                                                    />
                                                </div>
                                            </div>


                                        </form>
                                    </div>

                                )}

                                {activeButton === 'Sitter' && (
                                    <div>
                                        <header
                                            className="self-stretch flex flex-col items-start justify-start gap-[8px] text-center text-5xl text-text-primary font-text-medium-normal mb-6">
                                            <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
                                                Sitter Service Form
                                            </h3>

                                            <div className="self-stretch relative text-base leading-[150%]">
                                                Please fill the necessary information found in the following questions
                                            </div>
                                        </header>

                                        <form
                                            className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                                            <DogSizeInput selectedSize={selectedSize}
                                                          onSizeClick={clickSizeHandlerDog}/>
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
                                                    />
                                                </div>
                                            </div>

                                            <div
                                                className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    About your Sitter Service
                                                </div>
                                                <textarea
                                                    className="bg-text-alternate [outline:none] self-stretch h-[180px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-0.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral border-[1px] border-solid border-border-secondary"
                                                    placeholder="Tell us about the Service..."
                                                    maxLength={1500}
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
                                                    />
                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                )}

                                {activeButton === 'Walker' && (
                                    <div>
                                        <header
                                            className="self-stretch flex flex-col items-start justify-start gap-[8px] text-center text-5xl text-text-primary font-text-medium-normal mb-6">
                                            <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
                                                Walker Service Form
                                            </h3>

                                            <div className="self-stretch relative text-base leading-[150%]">
                                                Please fill the necessary information found in the following questions
                                            </div>
                                        </header>

                                        <form
                                            className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                                            <DogSizeInput selectedSize={selectedSize}
                                                          onSizeClick={clickSizeHandlerDog}/>
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
                                                    />
                                                </div>
                                            </div>

                                            <div
                                                className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    About your Walker Service
                                                </div>
                                                <textarea
                                                    className="bg-text-alternate [outline:none] self-stretch h-[180px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-0.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral border-[1px] border-solid border-border-secondary"
                                                    placeholder="Tell us about the Service..."
                                                    maxLength={1500}
                                                />
                                            </div>

                                            <div
                                                className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Asked Price For Walker Service (Per Visit)
                                                </div>
                                                <div
                                                    className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                                    <input
                                                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                        placeholder="Price*"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>

                                            <div
                                                className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Availability For Walker Service
                                                </div>
                                                <div
                                                    className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                                    <input
                                                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                        placeholder="Date*"
                                                        type="date"
                                                    />
                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                )}


                                <div
                                    className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
                                    <div className="self-stretch relative leading-[150%]">
                                        About yourself
                                    </div>
                                    <textarea
                                        className="bg-text-alternate [outline:none] self-stretch h-[180px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-0.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral border-[1px] border-solid border-border-secondary"
                                        placeholder="Tell us about yourself..."
                                        maxLength={1500}
                                    />
                                </div>

                                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                                    <div className="self-stretch relative leading-[150%]">
                                        Add Pictures of Your Services (at least 2 photos*)
                                    </div>
                                    <div
                                        className="self-stretch flex flex-row items-center justify-start py-0 px-0 gap-[24px] mq750:flex-wrap">
                                        <img
                                            className="h-[100px] w-[100px] relative object-cover min-h-[100px] shrink-0"
                                            loading="lazy"
                                            alt=""
                                            src="/service-avatar-image-1@2x.png"
                                        />
                                        <img
                                            className="h-[100px] w-[100px] relative object-cover min-h-[100px] shrink-0"
                                            loading="lazy"
                                            alt=""
                                            src="/service-avatar-image-1@2x.png"
                                        />
                                        <img
                                            className="h-[100px] w-[100px] relative object-cover min-h-[100px] shrink-0"
                                            loading="lazy"
                                            alt=""
                                            src="/service-avatar-image-1@2x.png"
                                        />
                                        <img
                                            className="h-[100px] w-[100px] relative object-cover min-h-[100px] shrink-0"
                                            loading="lazy"
                                            alt=""
                                            src="/service-avatar-image-1@2x.png"
                                        />
                                        <button
                                            className="cursor-pointer py-2 px-[16.5px] bg-[transparent] h-[42px] rounded-11xl box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                            <div
                                                className="relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left inline-block min-w-[103px]">
                                                Upload photo
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-center pt-6 px-5 pb-9">
                                    <button
                                        className="cursor-pointer [border:none] py-2 px-5 bg-app1 rounded-11xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue">
                                        <div
                                            className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-white text-left inline-block min-w-[55px]">{`Submit `}</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ServicesSection;
