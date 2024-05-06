import { FunctionComponent, useCallback, useState } from "react";
import NavbarAfterLogin from "../NavBarPage/NavbarAfterLogin";
import UserDashboardMenuList from "../UserDashboardPages/components/UserDashboardMenuList";
import DogSizeInput from "../BusinessDashboardPages/components/DogSizeInput";

const DogDetailsSection: FunctionComponent = () => {

    const [isAddDogButtonClicked, setAddDogButtonClicked] = useState(false);

    const onAddDogButtonClick = useCallback(() => {

        setAddDogButtonClicked(prevState => !prevState);
    }, []);

    return (
        <div className="w-full relative bg-text-alternate overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
            <NavbarAfterLogin />
            <main className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-base text-text-primary font-text-medium-normal mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
                <div className="w-[312px] bg-text-alternate overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[2997px] box-border lg:pb-[1266px] lg:box-border mq1050:hidden mq1050:pb-[823px] mq1050:box-border mq750:pb-[535px] mq750:box-border">
                    <UserDashboardMenuList />
                </div>
                <section className="flex-1 flex flex-col items-start justify-start max-w-[calc(100%_-_312px)] text-center text-29xl text-text-alternate font-text-medium-normal mq1050:max-w-full">
                    <div className="self-stretch bg-app1 overflow-hidden flex flex-col items-center justify-start pt-[30px] px-5 pb-[60px] box-border gap-[0px] max-w-full">
                        <div className="flex flex-row items-center justify-center max-w-full">
                            <h1 className="relative text-[48px] leading-[120%] font-inter text-white text-center">
                                Set Up Your Dog Details
                            </h1>
                        </div>
                        <div className="relative text-[18px] leading-[150%] font-inter text-white text-center">
                            Complete the forms below to provide information about your dog.
                        </div>
                    </div>
                    <div className="self-stretch bg-text-alternate flex flex-col items-center justify-center max-w-full text-5xl text-text-primary mq750:gap-[20px]">
                        <div className="self-stretch flex flex-col items-center justify-center max-w-full">
                            <div className="self-stretch bg-text-alternate flex flex-row items-end justify-start pt-9 px-0 pb-6 box-border max-w-full">
                                <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                                    <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-bold font-inherit mq450:text-lgi mq450:leading-[27px]">
                                        Dog Details Form
                                    </h3>
                                    <div className="self-stretch relative text-base leading-[150%]">
                                        Please fill the necessary information found in the following questions.
                                    </div>
                                </div>
                            </div>
                            <div className="w-[600px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full text-left text-base">
                                <div className="m-0 self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
                                    <div className="self-stretch relative text-base leading-[150%] font-text-regular-normal text-text-primary text-left">
                                        What is Your Dog's Name?
                                    </div>
                                    <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                        <input
                                            className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                            placeholder="Dog Name*"
                                            type="text"
                                        />
                                    </div>
                                    <div className="self-stretch relative text-base leading-[150%] font-text-regular-normal text-text-primary text-left">
                                        What is Your Dog's Breed?
                                    </div>
                                    <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                        <input
                                            className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                            placeholder="Dog Breed*"
                                            type="text"
                                        />
                                    </div>

                                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                                        <div className="self-stretch relative text-base leading-[150%] font-text-regular-normal text-text-primary text-left">
                                            How Old is Your Dog?
                                        </div>
                                        <div className="flex flex-row flex-wrap items-start justify-start py-0 pr-[217px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq700:pr-[108px] mq700:box-border">

                                            <button
                                                className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200"
                                            >
                                                <div className="relative text-base leading-[150%] font-text-regular-normal text-color-neutral-neutral-dark text-center">
                                                    <p className="m-0">{`Puppy `}</p>
                                                    <p className="m-0">0-1 years</p>
                                                </div>
                                            </button>
                                            <button
                                                className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200"
                                            >
                                                <div className="relative text-base leading-[150%] font-text-regular-normal text-color-neutral-neutral-dark text-center">
                                                    <p className="m-0">{`Adult `}</p>
                                                    <p className="m-0">2-8 years</p>
                                                </div>
                                            </button>
                                            <button
                                                className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs box-border flex flex-row items-center justify-center min-w-[41px] border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200"
                                                id="Senior Button"
                                            >
                                                <div className="relative text-base leading-[150%] font-text-regular-normal text-color-neutral-neutral-dark text-center">
                                                    <p className="m-0">{`Senior `}</p>
                                                    <p className="m-0">9 years +</p>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <DogSizeInput />
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                                        <div className="self-stretch relative text-base leading-[150%] font-text-regular-normal text-text-primary text-left">
                                            Training Level
                                        </div>
                                        <div className="flex flex-row flex-wrap items-start justify-start py-0 pr-48 pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq700:pr-24 mq700:box-border">
                                            <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] w-[100px] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                <div className="relative text-base leading-[150%] font-text-regular-normal text-color-neutral-neutral-dark text-left inline-block min-w-[68px]">
                                                    Beginner
                                                </div>
                                            </button>
                                            <button className="cursor-pointer [border:none] py-2 px-4 bg-app1 rounded-3xs flex flex-row items-center justify-center hover:bg-cornflowerblue">
                                                <div className="relative text-base leading-[150%] font-text-regular-normal text-background-color-primary text-left inline-block min-w-[96px]">
                                                    Intermediate
                                                </div>
                                            </button>
                                            <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                <div className="relative text-base leading-[150%] font-text-regular-normal text-color-neutral-neutral-dark text-left inline-block min-w-[76px]">
                                                    Advanced
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
                                        <div className="self-stretch relative leading-[150%]">
                                            About your Dog
                                        </div>
                                        <textarea
                                            className="bg-text-alternate [outline:none] self-stretch h-[180px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-0.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral border-[1px] border-solid border-border-secondary"
                                            placeholder="Tell us about your dog..."
                                            maxLength={1500}
                                        />
                                    </div>
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
                                        <div className="self-stretch relative leading-[150%]">
                                            Any Special Requirements For Your Dog?
                                        </div>
                                        <textarea
                                            className="bg-text-alternate [outline:none] self-stretch h-[100px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-0.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral border-[1px] border-solid border-border-secondary"
                                            placeholder="Let us know about your dog needs..."
                                            maxLength={750}
                                        />
                                    </div>
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                                        <div className="self-stretch relative leading-[150%]">
                                            Add Pictures of Your Dog (at least 1 photo*)
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

                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">

                                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-1.5 pb-0 pr-[26px] pl-0 gap-[16px]">
                                        <button
                                            onClick={onAddDogButtonClick}
                                            className="cursor-pointer py-2.5 px-[23px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center gap-[8px] whitespace-nowrap border-[1px] border-solid border-app1 hover:bg-cornflowerblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-cornflowerblue-100">
                                            <img
                                                className="h-6 w-6 relative overflow-hidden shrink-0"
                                                alt=""
                                                src="/icon--plus.svg"
                                            />
                                            <div className="relative text-lg leading-[150%] font-semibold font-text-regular-normal text-color-neutral-neutral-dark text-left">
                                                Add Another Dog
                                            </div>
                                        </button>

                                    </div>
                                </div>
                                {isAddDogButtonClicked && (
                                    
                                    <div className="m-0 self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
                                        <div className="self-stretch relative text-base leading-[150%] font-text-regular-normal text-text-primary text-left">
                                            What is Your Dog's Name?
                                        </div>
                                        <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                            <input
                                                className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                placeholder="Dog Name*"
                                                type="text"
                                            />
                                        </div>
                                        <div className="self-stretch relative text-base leading-[150%] font-text-regular-normal text-text-primary text-left">
                                            What is Your Dog's Breed?
                                        </div>
                                        <div className="self-stretch bg-text-alternate box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-border-secondary">
                                            <input
                                                className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
                                                placeholder="Dog Breed*"
                                                type="text"
                                            />
                                        </div>

                                        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                                            <div className="self-stretch relative text-base leading-[150%] font-text-regular-normal text-text-primary text-left">
                                                How Old is Your Dog?
                                            </div>
                                            <div className="flex flex-row flex-wrap items-start justify-start py-0 pr-[217px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq700:pr-[108px] mq700:box-border">

                                                <button
                                                    className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200"
                                                >
                                                    <div className="relative text-base leading-[150%] font-text-regular-normal text-color-neutral-neutral-dark text-center">
                                                        <p className="m-0">{`Puppy `}</p>
                                                        <p className="m-0">0-1 years</p>
                                                    </div>
                                                </button>
                                                <button
                                                    className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200"
                                                >
                                                    <div className="relative text-base leading-[150%] font-text-regular-normal text-color-neutral-neutral-dark text-center">
                                                        <p className="m-0">{`Adult `}</p>
                                                        <p className="m-0">2-8 years</p>
                                                    </div>
                                                </button>
                                                <button
                                                    className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs box-border flex flex-row items-center justify-center min-w-[41px] border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200"
                                                    id="Senior Button"
                                                >
                                                    <div className="relative text-base leading-[150%] font-text-regular-normal text-color-neutral-neutral-dark text-center">
                                                        <p className="m-0">{`Senior `}</p>
                                                        <p className="m-0">9 years +</p>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <DogSizeInput />
                                        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                                            <div className="self-stretch relative text-base leading-[150%] font-text-regular-normal text-text-primary text-left">
                                                Training Level
                                            </div>
                                            <div className="flex flex-row flex-wrap items-start justify-start py-0 pr-48 pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq700:pr-24 mq700:box-border">
                                                <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] w-[100px] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                    <div className="relative text-base leading-[150%] font-text-regular-normal text-color-neutral-neutral-dark text-left inline-block min-w-[68px]">
                                                        Beginner
                                                    </div>
                                                </button>
                                                <button className="cursor-pointer [border:none] py-2 px-4 bg-app1 rounded-3xs flex flex-row items-center justify-center hover:bg-cornflowerblue">
                                                    <div className="relative text-base leading-[150%] font-text-regular-normal text-background-color-primary text-left inline-block min-w-[96px]">
                                                        Intermediate
                                                    </div>
                                                </button>
                                                <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                                                    <div className="relative text-base leading-[150%] font-text-regular-normal text-color-neutral-neutral-dark text-left inline-block min-w-[76px]">
                                                        Advanced
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
                                            <div className="self-stretch relative leading-[150%]">
                                                About your Dog
                                            </div>
                                            <textarea
                                                className="bg-text-alternate [outline:none] self-stretch h-[180px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-0.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral border-[1px] border-solid border-border-secondary"
                                                placeholder="Tell us about your dog..."
                                                maxLength={1500}
                                            />
                                        </div>
                                        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
                                            <div className="self-stretch relative leading-[150%]">
                                                Any Special Requirements For Your Dog?
                                            </div>
                                            <textarea
                                                className="bg-text-alternate [outline:none] self-stretch h-[100px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-0.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral border-[1px] border-solid border-border-secondary"
                                                placeholder="Let us know about your dog needs..."
                                                maxLength={750}
                                            />
                                        </div>
                                        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                                            <div className="self-stretch relative leading-[150%]">
                                                Add Pictures of Your Dog (at least 1 photo*)
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
                                    </div>
                                )}
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

export default DogDetailsSection;
