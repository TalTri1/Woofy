import { FunctionComponent, useCallback, useState } from "react";
import NavbarAfterLogin from "../NavBarPage/NavbarAfterLogin";
import BusinessDashboardMenuList from "../BusinessDashboardPages/components/BusinessDashboardMenuList";
import DogSizeInput from "../BusinessDashboardPages/components/DogSizeInput";

const SerivcesSection: FunctionComponent = () => {

    const [isBoardingButtonClicked, setBoardingButtonClicked] = useState(false);
    const [isDayCareButtonClicked, setDayCareButtonClicked] = useState(false);
    const [isSitterButtonClicked, setSitterButtonClicked] = useState(false);
    const [isWalkerButtonClicked, setWalkerButtonClicked] = useState(false);

    const [activeButton, setActiveButton] = useState('');

    const [isHouseButtonClicked, setHouseButtonClicked] = useState(false);

    const onBoardingButtonClick = useCallback(() => {

        setBoardingButtonClicked(prevState => !prevState);
        setActiveButton('Boarding');
    }, []);

    const onDayCareButtonClick = useCallback(() => {

        setDayCareButtonClicked(prevState => !prevState);
        setActiveButton('Day Care');
    }, []);

    const onSitterButtonClick = useCallback(() => {

        setSitterButtonClicked(prevState => !prevState);
        setActiveButton('Sitter');
    }, []);

    const onWalkerButtonClick = useCallback(() => {

        setWalkerButtonClicked(prevState => !prevState);
        setActiveButton('Walker');
    }, []);

    return (
        <div className="w-full relative bg-text-alternate overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
            <NavbarAfterLogin />
            <main className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-base text-text-primary font-text-medium-normal mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
                <div className="w-[312px] bg-text-alternate overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[2997px] box-border lg:pb-[1266px] lg:box-border mq1050:hidden mq1050:pb-[823px] mq1050:box-border mq750:pb-[535px] mq750:box-border">
                    <BusinessDashboardMenuList />
                </div>
                <section className="flex-1 flex flex-col items-start justify-start max-w-[calc(100%_-_312px)] text-center text-29xl text-text-alternate font-text-medium-normal mq1050:max-w-full">
                    <div className="self-stretch bg-app1 overflow-hidden flex flex-col items-center justify-start pt-[30px] px-5 pb-[60px] box-border gap-[0px] max-w-full">
                        <div className="flex flex-row items-center justify-center max-w-full">
                            <h1 className="relative text-[48px] leading-[120%] font-inter text-white text-center">
                                Set Up Your Services Details
                            </h1>
                        </div>
                        <div className="relative text-[18px] leading-[150%] font-inter text-white text-center">
                            Complete the forms below to provide your business information.
                        </div>
                    </div>
                    <div className="self-stretch bg-text-alternate flex flex-col items-center justify-center max-w-full text-5xl text-text-primary mq750:gap-[20px]">
                        <div className="self-stretch flex flex-col items-center justify-center max-w-full">
                            <div className="self-stretch bg-text-alternate flex flex-row items-end justify-start pt-9 px-0 pb-6 box-border max-w-full">
                                <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                                    <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-bold font-inherit mq450:text-lgi mq450:leading-[27px]">
                                        Services Details
                                    </h3>
                                    <div className="self-stretch relative text-base leading-[150%]">
                                        Please Complete your business account information.
                                    </div>
                                </div>
                            </div>
                            <div className="w-[600px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full text-left text-base">
                                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                                    <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
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
                                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-1.5 pb-0 pr-[26px] pl-0 gap-[16px]">
                                        <button
                                            onClick={onBoardingButtonClick}
                                            className={activeButton === 'Boarding' ? "cursor-pointer [border:none] py-0 pr-4 pl-2 bg-app1 flex-1 rounded-11xl flex flex-row items-center justify-center box-border gap-[8px] min-w-[54px] hover:bg-cornflowerblue" : `cursor-pointer py-0 pr-[15px] pl-[7px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200" `}
                                        >
                                            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2 ">
                                                <img
                                                    className="w-6 h-6 relative overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/icon--moon.svg"
                                                />
                                            </div>
                                            <div className={activeButton === 'Boarding' ? "relative text-base leading-[150%] font-text-medium-normal text-white text-left inline-block min-w-[70px]" : "relative text-base leading-[150%] font-inter text-left inline-block min-w-[68px]"}
                                            >
                                                Boarding
                                            </div>
                                        </button>
                                        <button
                                            onClick={onDayCareButtonClick}
                                            className="cursor-pointer [border:none] py-0 pr-4 pl-2 bg-app1 flex-1 rounded-11xl flex flex-row items-center justify-center box-border gap-[8px] min-w-[54px] hover:bg-cornflowerblue">
                                            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2 ">
                                                <img
                                                    className="w-6 h-6 relative overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/icon--sun.svg"
                                                />
                                            </div>
                                            <div className="relative text-base leading-[150%] font-text-medium-normal text-white text-left inline-block min-w-[70px]">
                                                Day Care
                                            </div>
                                        </button>
                                        <button
                                            onClick={onSitterButtonClick}
                                            className="cursor-pointer py-0 pr-[15px] pl-[7px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2">
                                                <img
                                                    className="w-6 h-6 relative overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/icon--bed.svg"
                                                />
                                            </div>
                                            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[41px]">
                                                Sitter
                                            </div>
                                        </button>
                                        <button
                                            onClick={onWalkerButtonClick}
                                            className="cursor-pointer py-0 pr-[15px] pl-[7px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2">
                                                <img
                                                    className="w-6 h-6 relative overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/icon--walk.svg"
                                                />
                                            </div>
                                            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[51px]">
                                                Walker
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                {isBoardingButtonClicked && (
                                    <div>
                                        <header className="self-stretch flex flex-col items-start justify-start gap-[8px] text-center text-5xl text-text-primary font-text-medium-normal mb-6">
                                            <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
                                                Boarding Service Form
                                            </h3>

                                            <div className="self-stretch relative text-base leading-[150%]">
                                                Please fill the necessary information found in the following questions
                                            </div>
                                        </header>

                                        <div className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                                            <DogSizeInput />
                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                                                <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">{`Your Home Conditions `}</div>
                                                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[120px] pl-0 box-border gap-[16px] min-h-[152px] lg:pr-[60px] lg:box-border mq750:pr-[30px] mq750:box-border">
                                                    <button
                                                        className={`cursor-pointer py-1.5 px-[15px] rounded-3xs box-border flex flex-row items-center justify-center 
                                                        ${isHouseButtonClicked ? 'bg-blue-500 text-white' : 'bg-[transparent] text-color-neutral-neutral-dark border-[1px] border-solid border-border-secondary'}`}
                                                        onClick={() => setHouseButtonClicked(!isHouseButtonClicked)}
                                                    >
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-left inline-block min-w-[49px]">
                                                            House
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer [border:none] py-2 px-4 bg-app1 rounded-3xs flex flex-row items-center justify-center hover:bg-cornflowerblue">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-white text-left inline-block min-w-[81px]">
                                                            Apartment
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[128px]">
                                                            Has Fenced Yard
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left">
                                                            Dogs Allowed on Furniture
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left">
                                                            Dogs Allowed on Bed
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[104px]">
                                                            Non-Smoking
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                                                <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                                                    Pets in Your Home
                                                </div>
                                                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[141px] pl-0 box-border gap-[16px] min-h-[96px] mq1050:pr-[70px] mq1050:box-border mq750:pr-[35px] mq750:box-border">
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[84px]">
                                                            Own a Dog
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer [border:none] py-2 px-4 bg-app1 rounded-3xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-white text-left inline-block min-w-[80px]">
                                                            Own a Cat
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[127px]">
                                                            Own Caged Pets
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[97px]">
                                                            Has Children
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left">
                                                            Only One Client at a Time
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Dog Capacity Per Day</div>
                                                <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                                    <input
                                                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                        placeholder="Number of Dogs*"
                                                        type="number"
                                                    />
                                                </div>
                                            </div>

                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    About your Boarding Service
                                                </div>
                                                <textarea
                                                    className="bg-text-alternate [outline:none] self-stretch h-[180px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-0.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral border-[1px] border-solid border-border-secondary"
                                                    placeholder="Tell us about the Service..."
                                                    maxLength={1500}
                                                />
                                            </div>

                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Asked Price For Boarding Service (Per Night)</div>
                                                <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                                    <input
                                                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                        placeholder="Price*"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>

                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Availability For Boarding Service
                                                </div>
                                                <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
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

                                {isDayCareButtonClicked && (


                                    <div>
                                        <header className="self-stretch flex flex-col items-start justify-start gap-[8px] text-center text-5xl text-text-primary font-text-medium-normal mb-6">
                                            <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
                                                Day Care Service Form
                                            </h3>

                                            <div className="self-stretch relative text-base leading-[150%]">
                                                Please fill the necessary information found in the following questions
                                            </div>
                                        </header>

                                        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                                            <DogSizeInput />
                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                                                <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">{`Your Home Conditions `}</div>
                                                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[120px] pl-0 box-border gap-[16px] min-h-[152px] lg:pr-[60px] lg:box-border mq750:pr-[30px] mq750:box-border">
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] w-[81px] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[49px]">
                                                            House
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer [border:none] py-2 px-4 bg-app1 rounded-3xs flex flex-row items-center justify-center hover:bg-cornflowerblue">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-white text-left inline-block min-w-[81px]">
                                                            Apartment
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[128px]">
                                                            Has Fenced Yard
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left">
                                                            Dogs Allowed on Furniture
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left">
                                                            Dogs Allowed on Bed
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[104px]">
                                                            Non-Smoking
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                                                <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                                                    Pets in Your Home
                                                </div>
                                                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[141px] pl-0 box-border gap-[16px] min-h-[96px] mq1050:pr-[70px] mq1050:box-border mq750:pr-[35px] mq750:box-border">
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[84px]">
                                                            Own a Dog
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer [border:none] py-2 px-4 bg-app1 rounded-3xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-white text-left inline-block min-w-[80px]">
                                                            Own a Cat
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[127px]">
                                                            Own Caged Pets
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[97px]">
                                                            Has Children
                                                        </div>
                                                    </button>
                                                    <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                        <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left">
                                                            Only One Client at a Time
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Dog Capacity Per Day</div>
                                                <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                                    <input
                                                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                        placeholder="Number of Dogs*"
                                                        type="number"
                                                    />
                                                </div>
                                            </div>

                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    About your Day Care Service
                                                </div>
                                                <textarea
                                                    className="bg-text-alternate [outline:none] self-stretch h-[180px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-0.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral border-[1px] border-solid border-border-secondary"
                                                    placeholder="Tell us about the Service..."
                                                    maxLength={1500}
                                                />
                                            </div>

                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Asked Price For Day Care Service (Per Day)</div>
                                                <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                                    <input
                                                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                        placeholder="Price*"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>

                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Availability For Day Care Service
                                                </div>
                                                <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
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

                                {isSitterButtonClicked && (
                                    <div>
                                        <header className="self-stretch flex flex-col items-start justify-start gap-[8px] text-center text-5xl text-text-primary font-text-medium-normal mb-6">
                                            <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
                                                Sitter Service Form
                                            </h3>

                                            <div className="self-stretch relative text-base leading-[150%]">
                                                Please fill the necessary information found in the following questions
                                            </div>
                                        </header>

                                        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                                            <DogSizeInput />
                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Dog Capacity Per Day</div>
                                                <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                                    <input
                                                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                        placeholder="Number of Dogs*"
                                                        type="number"
                                                    />
                                                </div>
                                            </div>

                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    About your Sitter Service
                                                </div>
                                                <textarea
                                                    className="bg-text-alternate [outline:none] self-stretch h-[180px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-0.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral border-[1px] border-solid border-border-secondary"
                                                    placeholder="Tell us about the Service..."
                                                    maxLength={1500}
                                                />
                                            </div>

                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Asked Price For Sitter Service (Per Visit)</div>
                                                <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                                    <input
                                                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                        placeholder="Price*"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>

                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Availability For Sitter Service
                                                </div>
                                                <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
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


                                {isWalkerButtonClicked && (
                                    <div>
                                        <header className="self-stretch flex flex-col items-start justify-start gap-[8px] text-center text-5xl text-text-primary font-text-medium-normal mb-6">
                                            <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
                                                Walker Service Form
                                            </h3>

                                            <div className="self-stretch relative text-base leading-[150%]">
                                                Please fill the necessary information found in the following questions
                                            </div>
                                        </header>

                                        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                                            <DogSizeInput />
                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Dog Capacity Per Day</div>
                                                <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                                    <input
                                                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                        placeholder="Number of Dogs*"
                                                        type="number"
                                                    />
                                                </div>
                                            </div>

                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    About your Walker Service
                                                </div>
                                                <textarea
                                                    className="bg-text-alternate [outline:none] self-stretch h-[180px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-0.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral border-[1px] border-solid border-border-secondary"
                                                    placeholder="Tell us about the Service..."
                                                    maxLength={1500}
                                                />
                                            </div>

                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Asked Price For Walker Service (Per Visit)</div>
                                                <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                                    <input
                                                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                        placeholder="Price*"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>

                                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
                                                <div className="self-stretch relative leading-[150%]">
                                                    Availability For Walker Service
                                                </div>
                                                <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
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

                                

                                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
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
                                    <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 gap-[24px] mq750:flex-wrap">
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
                                        <button className="cursor-pointer py-2 px-[16.5px] bg-[transparent] h-[42px] rounded-11xl box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                            <div className="relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left inline-block min-w-[103px]">
                                                Upload photo
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-center pt-6 px-5 pb-9">
                                    <button className="cursor-pointer [border:none] py-2 px-5 bg-app1 rounded-11xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue">
                                        <div className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-white text-left inline-block min-w-[55px]">{`Submit `}</div>
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

export default SerivcesSection;
