import { FunctionComponent } from "react";
import NavbarAfterLogin from "../Sections/User/Business/Profile/NavbarAfterLogin";
import BusinessFrame from "../Sections/User/Business/Profile/BusinessFrame";
import Row from "../Sections/User/Business/Profile/Row";
import TestimonialsContainer from "../Sections/User/Business/Profile/TestimonialsContainer";

const BusinessProfilePage: FunctionComponent = () => {
    return (
        <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start tracking-[normal] leading-[normal]">
            <NavbarAfterLogin />
            <main className="self-stretch bg-text-alternate overflow-hidden flex flex-col items-start justify-start py-20 px-16 box-border gap-[122px] max-w-full lg:pt-[34px] lg:pb-[34px] lg:box-border mq750:gap-[61px] mq750:py-[22px] mq750:px-8 mq750:box-border mq450:gap-[30px]">
                <div className="w-[616px] h-px relative bg-text-primary box-border hidden max-w-full border-[1px] border-solid border-color-neutral-neutral" />
                <div className="w-[616px] hidden max-w-full" />
                <div className="w-[616px] h-px relative bg-text-primary box-border hidden max-w-full border-[1px] border-solid border-color-neutral-neutral" />
                <div className="w-[616px] h-px relative bg-text-primary box-border hidden max-w-full border-[1px] border-solid border-color-neutral-neutral" />
                <section className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[80px] max-w-full text-center text-13xl text-text-primary font-text-medium-normal mq750:gap-[40px] mq450:gap-[20px]">
                    <BusinessFrame />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[67px] min-w-[400px] max-w-full mq450:gap-[17px] mq750:gap-[33px] mq750:min-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                            <div className="self-stretch flex flex-row items-start justify-center gap-[16px] mq750:flex-wrap">
                                <img
                                    className="self-stretch flex-1 relative max-w-[615px] overflow-hidden max-h-full object-cover min-w-[131px] min-h-[96px]"
                                    loading="lazy"
                                    alt=""
                                    src="/placeholder-image1@2x.png"
                                />
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-center gap-[16px] mq750:flex-wrap">
                                <img
                                    className="self-stretch flex-1 relative max-w-[142px] overflow-hidden max-h-full object-cover min-w-[131px] min-h-[96px]"
                                    loading="lazy"
                                    alt=""
                                    src="/placeholder-image1@2x.png"
                                />
                                <img
                                    className="self-stretch flex-1 relative max-w-[142px] overflow-hidden max-h-full object-cover min-w-[131px] min-h-[96px]"
                                    alt=""
                                    src="/placeholder-image1@2x.png"
                                />
                                <img
                                    className="self-stretch flex-1 relative max-w-[142px] overflow-hidden max-h-full object-cover min-w-[131px] min-h-[96px]"
                                    alt=""
                                    src="/placeholder-image1@2x.png"
                                />
                                <img
                                    className="self-stretch flex-1 relative max-w-[142px] overflow-hidden max-h-full object-cover min-w-[131px] min-h-[96px]"
                                    alt=""
                                    src="/placeholder-image1@2x.png"
                                />
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-center justify-center gap-[13px] max-w-full">
                            <div className="self-stretch bg-text-alternate flex flex-row items-center justify-center py-6 px-0 box-border max-w-full z-[1] mq750:pt-5 mq750:pb-5 mq750:box-border">
                                <div className="flex-1 flex flex-col items-center justify-center max-w-full">
                                    <div className="self-stretch rounded-11xl flex flex-row items-center justify-center pt-0 pb-6 pr-7 pl-5 gap-[8px] mq450:flex-wrap">
                                        <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2">
                                            <img
                                                className="w-8 h-8 relative overflow-hidden shrink-0"
                                                loading="lazy"
                                                alt=""
                                                src="/tablerpaw.svg"
                                            />
                                        </div>
                                        <h1 className="m-0 relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px]">
                                            Services
                                        </h1>
                                    </div>
                                    
                                    <div className="w-[616px] rounded-2xl bg-text-alternate box-border overflow-x-auto flex flex-col items-start justify-end max-w-full text-left text-xl border-[1px] border-solid border-color-neutral-neutral">
                                        <div className="w-[616px] rounded-2xl box-border flex flex-row items-center justify-center pt-6 px-0 pb-[22px] border-b-[1px] border-solid border-color-neutral-neutral">
                                            <div className="flex flex-col items-center justify-center py-0.5 px-[77.5px]">
                                                <div className="rounded-11xl flex flex-row items-center justify-center py-0 pr-4 pl-2 gap-[8px]">
                                                    <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2">
                                                        <img
                                                            className="w-6 h-6 relative overflow-hidden shrink-0"
                                                            alt=""
                                                            src="/icon--moon.svg"
                                                        />
                                                    </div>
                                                    <b className="relative leading-[140%] inline-block min-w-[89px] mq450:text-base mq450:leading-[22px]">
                                                        Boarding
                                                    </b>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-center py-0 px-[60px]">
                                                <div className="rounded-11xl flex flex-row items-center justify-center py-0 pr-4 pl-2">
                                                    <div className="rounded-11xl flex flex-row items-center justify-center py-0 pr-4 pl-2">
                                                        <div className="flex flex-row items-center justify-center py-2 pr-0 pl-2">
                                                            <b className="relative leading-[140%] inline-block min-w-[36px] mq450:text-base mq450:leading-[22px]">
                                                                170
                                                            </b>
                                                            <img
                                                                className="h-6 w-6 relative overflow-hidden shrink-0"
                                                                alt=""
                                                                src="/icon--shekel.svg"
                                                            />
                                                            <div className="relative text-base leading-[150%] font-medium text-color-neutral-neutral text-right inline-block min-w-[72px]">
                                                                Per Night
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Row
                                            iconSun="/icon--sun1.svg"
                                            boardingButton="Day Care"
                                            boardingButton1="Per Day"
                                        />

                                        <Row
                                            iconSun="/icon--bed.svg"
                                            boardingButton="Sitting"
                                            boardingButton1="Per Visit"
                                            propFlex="1"
                                            propMinWidth="65px"
                                            propMinWidth1="64px"
                                        />
                                        <Row
                                            iconSun="/icon--walk.svg"
                                            boardingButton="Walking"
                                            boardingButton1="Per Walk"
                                            propFlex="1"
                                            propMinWidth="79px"
                                            propMinWidth1="67px"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch bg-text-alternate flex flex-row items-end justify-start py-6 px-0 box-border max-w-full z-[1] mq750:pt-5 mq750:pb-5 mq750:box-border">
                                <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
                                    <div className="self-stretch rounded-11xl flex flex-row items-center justify-center py-0 pr-7 pl-5 gap-[8px] mq450:flex-wrap">
                                        <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2">
                                            <img
                                                className="w-8 h-8 relative overflow-hidden shrink-0"
                                                loading="lazy"
                                                alt=""
                                                src="/icon--calendarcheck.svg"
                                            />
                                        </div>
                                        <h1 className="m-0 relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px]">
                                            Availability
                                        </h1>
                                    </div>
                                    <div className="self-stretch flex flex-row flex-wrap items-center justify-center pt-[7px] px-[33px] pb-px gap-[16px]">
                                        <button className="cursor-pointer py-0 pr-[15px] pl-[7px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-border-secondary">
                                            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2">
                                                <img
                                                    className="w-6 h-6 relative overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/icon--moon.svg"
                                                />
                                            </div>
                                            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[59px]">
                                                Boarding
                                            </div>
                                        </button>
                                        <button className="cursor-pointer py-0 pr-[15px] pl-[7px] bg-app1 rounded-11xl flex flex-row items-center justify-center gap-[8px]">
                                            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2">
                                                <img
                                                    className="w-6 h-6 relative overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/icon--sun.svg"
                                                />
                                            </div>
                                            <div className="relative text-base leading-[150%] font-text-medium-normal text-text-alternate text-left inline-block min-w-[59px]">
                                                Day Care
                                            </div>
                                        </button>
                                        <button className="cursor-pointer py-0 pr-[15px] pl-[7px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-border-secondary">
                                            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2">
                                                <img
                                                    className="w-6 h-6 relative overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/icon--bed.svg"
                                                />
                                            </div>
                                            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[49px]">
                                                Sitting
                                            </div>
                                        </button>
                                        <button className="cursor-pointer py-0 pr-[15px] pl-[7px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-border-secondary">
                                            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2">
                                                <img
                                                    className="w-6 h-6 relative overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/icon--walk.svg"
                                                />
                                            </div>
                                            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[59px]">
                                                Walking
                                            </div>
                                        </button>
                                    </div>
                                    <div className="self-stretch h-[439px] rounded-2xl bg-text-alternate box-border flex flex-col items-start justify-end border-[1px] border-solid border-color-neutral-neutral">
                                        <iframe
                                            className="[border:none] self-stretch flex-1"
                                            id="schedualer"
                                        />
                                        <div className="self-stretch flex flex-row items-center justify-center py-6 px-5">
                                            <button className="cursor-pointer [border:none] py-2 px-5 bg-app1 rounded-11xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue">
                                                <div className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-text-alternate text-left inline-block min-w-[78px]">
                                                    Book Now
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <TestimonialsContainer />
            </main>
        </div>
    );
};

export default BusinessProfilePage;
