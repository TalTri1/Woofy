import React, {FunctionComponent, useContext, useState} from "react";
import NavbarAfterLogin from "../../NavBarPage/NavbarAfterLogin";
import BusinessDashboardMenuList from "../components/BusinessDashboardMenuList";
import {useNavigate} from "react-router-dom";
import {Size} from "../../../models/DogModels/DogModel";
import {UserContext} from "../../../provider/UserProvider";
import {BoardingModel} from "../../../models/BusinessModels/BusinessTypesModels/StayAtBusiness/BoardingModel";
import {DogWalkerModel} from "../../../models/BusinessModels/BusinessTypesModels/HomeStay/DogWalkerModel";
import {DayCareModel} from "../../../models/BusinessModels/BusinessTypesModels/StayAtBusiness/DayCareModel";
import {DogSitterModel} from "../../../models/BusinessModels/BusinessTypesModels/HomeStay/DogSitterModel";
import '../../../css/button.css';
import SelectServiceTypeComponent from "./SelectServiceTypeComponent";
import {BUSINESS_TYPES, WEEKDAYS} from "../../../models/BusinessModels/BusinessTypesModels/BusinessTypeModel";
import BusinessTypesBaseRegistration from "./BusinessTypesBaseRegistration";
import PetsInHomeComponent from "./PetsInHomeComponent";
import HomeConditionComponent from "./HomeConditionComponent";
import {toast} from "react-toastify";
import api from "../../../api/api";
import {
    HOME_CONDITIONS,
    PETS_IN_HOME
} from "../../../models/BusinessModels/BusinessTypesModels/StayAtBusiness/StayAtBusinessBaseModel";

const serviceTypeMapping = {
    [BUSINESS_TYPES.DOG_WALK]: 'dog-walker',
    [BUSINESS_TYPES.DOG_SITTER]: 'dog-sitter',
    [BUSINESS_TYPES.DAY_CARE]: 'day-care',
    [BUSINESS_TYPES.BOARDING]: 'boarding',
};

const ServicesSection: FunctionComponent = () => {

    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState<Size[]>([]);
    const [selectedHomeConditions, setHomeConditions] = useState<HOME_CONDITIONS[]>([]);
    const [selectedPetsInHome, setPetsInHome] = useState<PETS_IN_HOME[]>([]);
    const [selectedDays, setSelectedDays] = useState<WEEKDAYS[]>([]);
    const {userDetails} = useContext(UserContext); // The user details
    const [images, setImages] = useState<Array<File | null>>([null, null, null, null]);


    // Boarding, Day Care, Sitter, Walker buttons
    const [selectedServices, setSelectedServices] = useState<BUSINESS_TYPES>(BUSINESS_TYPES.BOARDING);

    const serviceFormTitles = {
        [BUSINESS_TYPES.BOARDING]: "Boarding Service Form",
        [BUSINESS_TYPES.DAY_CARE]: "Day Care Service Form",
        [BUSINESS_TYPES.DOG_SITTER]: "Sitter Service Form",
        [BUSINESS_TYPES.DOG_WALK]: "Walker Service Form",
    };

    const [businessInput, setBusinessInput] = useState<Record<string, any>>({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = event.target;
        setBusinessInput(prevState => ({...prevState, [name]: value}));
    };

    const updateBusinessModel = (updatedData: Partial<BoardingModel | DogWalkerModel | DayCareModel | DogSitterModel>) => {
        setBusinessInput(prevState => {
            if (prevState) {
                return {...prevState, ...updatedData};
            }
            return prevState;
        });
    };

    const clickSizeHandlerDog = (size: Size) => {
        setSelectedSize(prevSizes => {
            let newSizes;
            if (prevSizes.includes(size)) {
                newSizes = prevSizes.filter(s => s !== size);
            } else {
                newSizes = [...prevSizes, size];
            }
            updateBusinessModel({acceptableDogSizes: newSizes});
            return newSizes;
        });
    };

    const clickHomeConditionsHandler = (homeCondition: HOME_CONDITIONS) => {
        setHomeConditions(prevHomeConditions => {
            let newHomeConditions;
            if (prevHomeConditions.includes(homeCondition)) {
                newHomeConditions = prevHomeConditions.filter(s => s !== homeCondition);
            } else {
                newHomeConditions = [...prevHomeConditions, homeCondition];
            }
            updateBusinessModel({homeConditions: newHomeConditions});
            return newHomeConditions;
        });
    }

    const clickPetsInHomeHandler = (petsInHome: PETS_IN_HOME) => {
        setPetsInHome(prevPetsInHome => {
            let newPetsInHome;
            if (prevPetsInHome.includes(petsInHome)) {
                newPetsInHome = prevPetsInHome.filter(s => s !== petsInHome);
            } else {
                newPetsInHome = [...prevPetsInHome, petsInHome];
            }
            updateBusinessModel({petsInHome: newPetsInHome});
            return newPetsInHome;
        });
    }
    const clickWorkingDaysHandler = (workingDay: string) => {
        setSelectedDays(prevDays => {
            let newDays;
            if (prevDays.includes(workingDay as WEEKDAYS)) {
                newDays = prevDays.filter(s => s !== workingDay as WEEKDAYS);
            } else {
                newDays = [...prevDays, workingDay as WEEKDAYS];
            }
            updateBusinessModel({workingDays: newDays});
            return newDays;
        })
    }

    const registerBusinessHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(`Business service data to be registered: ${JSON.stringify(businessInput)}`);
        let business;
        switch (selectedServices) {
            case BUSINESS_TYPES.BOARDING:
                business = new BoardingModel();
                break;
            case BUSINESS_TYPES.DOG_WALK:
                business = new DogWalkerModel();
                break;
            case BUSINESS_TYPES.DAY_CARE:
                business = new DayCareModel();
                break;
            case BUSINESS_TYPES.DOG_SITTER:
                business = new DogSitterModel();
                break;
        }
        // Copy over the relevant fields from the business state
        for (let key in business) {
            if (key in businessInput) {
                (business as any)[key] = (businessInput as any)[key];
            }
        }

        console.log(`Business service data to be registered: ${JSON.stringify(business)}`);

        try {
            const response = await api.post(`/business/business-type/${serviceTypeMapping[selectedServices]}/create`, business);
            console.log(`Response from registering dog: ${response}`);
            const imageIDs = await uploadImages();
            // const isUpdateSuccess = updateImagesForDogEntity(imageIDs as number[]);
            navigate("/");
            window.scrollTo(0, 0);
            // if (await isUpdateSuccess) {
            //     toast.success("Service registered successfully")
            // }
            // else {
            //     toast.error("Failed to register service");
            // }

        } catch (error) {
            toast.error("Failed to register service");
            console.log(`Error to register service: ${error}`);
        }

    };

    // Handle images
    const handleImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        // Check if the selected file is an image
        if (!file.type.startsWith('image/')) {
            toast.error('Please select an image file');
            return;
        }

        if (file) {
            const newImages = [...images];
            newImages[index] = file;
            setImages(newImages);
        }
    };

    const uploadImages = async () => {
        try {
            const imageIDs = await Promise.all(
                images.map(async (image) => {
                    if (image) {
                        return savePhotoToDB(image);
                    }
                    return null;
                })
            );
            return imageIDs.filter((id) => id !== null); // Filter out null values
        } catch (error) {
            toast.error("Failed uploading images");
            return null
        }
    };

    const savePhotoToDB = async (file: File) => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await api.post('/image/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(`Response from the backend: ${response}`);
            return response.data.imageID; // return the ID of the saved image
        } catch (error) {
            toast.error("Failed uploading profile photo")
        }

    };

    // const updateImagesForDogEntity = async (imageIDs: number[]) => {
    //     try {
    //         const response = await api.put(`/dogs/update/images/`, imageIDs);
    //         console.log(`Response from updating dog images: ${response}`);
    //         return true
    //     } catch (error) {
    //         console.error(`Error updating dog images: ${error}`);
    //         return false;
    //     }
    // }

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
                                            name={"businessName"}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                                    <SelectServiceTypeComponent selectedServices={selectedServices}
                                                                setSelectedServices={setSelectedServices}/>
                                </div>
                                <div>
                                    <header
                                        className="self-stretch flex flex-col items-start justify-start gap-[8px] text-center text-5xl text-text-primary font-text-medium-normal mb-6">
                                        <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
                                            {serviceFormTitles[selectedServices]}
                                        </h3>

                                        <div className="self-stretch relative text-base leading-[150%]">
                                            Please fill the necessary information found in the following questions
                                        </div>
                                    </header>
                                    {(selectedServices === BUSINESS_TYPES.BOARDING || selectedServices === BUSINESS_TYPES.DAY_CARE) && (
                                        <>
                                            <div className="mb-4">
                                                <PetsInHomeComponent selectedPetsInHome={selectedPetsInHome}
                                                                     clickPetsInHomeHandler={clickPetsInHomeHandler}/>
                                            </div>
                                            <div>
                                                <HomeConditionComponent selectedHomeConditions={selectedHomeConditions}
                                                                        clickHomeConditionsHandler={clickHomeConditionsHandler}/>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <BusinessTypesBaseRegistration handleInputChange={handleInputChange}
                                                               selectedSize={selectedSize}
                                                               onSizeClick={clickSizeHandlerDog}
                                                               selectedDays={selectedDays}
                                                               clickWorkingDaysHandler={clickWorkingDaysHandler}/>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                                    <div className="self-stretch relative leading-[150%]">
                                        Add Pictures of Your Services
                                    </div>
                                </div>
                                <div
                                    className="self-stretch flex flex-row items-center justify-start py-0 px-0 gap-[24px] mq750:flex-wrap">
                                    {images.map((image, index) => (
                                        <label key={index} className="relative">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(event) => handleImageChange(index, event)}
                                                style={{display: "none"}}
                                            />
                                            <img
                                                className="h-[100px] w-[100px] relative object-cover min-h-[100px] shrink-0 cursor-pointer"
                                                loading="lazy"
                                                alt=""
                                                src={image ? URL.createObjectURL(image) : "/service-avatar-image-1@2x.png"}
                                                onClick={() => document.getElementById(`fileInput-${index}`)?.click()}
                                            />
                                        </label>
                                    ))}
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-center pt-6 px-5 pb-9">
                                    <button
                                        onClick={registerBusinessHandler}
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
