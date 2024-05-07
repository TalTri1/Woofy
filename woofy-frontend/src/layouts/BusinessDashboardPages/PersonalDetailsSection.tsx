import { FunctionComponent } from "react";
import NavbarAfterLogin from "../NavBarPage/NavbarAfterLogin";
import BusinessDashboardMenuList from "../BusinessDashboardPages/components/BusinessDashboardMenuList";
import FullNameRow from "../BusinessDashboardPages/components/FullNameRow";

const PersonalDetailsSection: FunctionComponent = () => {
    return (
        <div className="w-full relative bg-text-alternate overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
            <NavbarAfterLogin />
            <main className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-base text-text-primary font-text-medium-normal mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
                <div className="w-[312px] bg-text-alternate overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[496px] box-border lg:pb-[322px] lg:box-border mq1050:hidden mq750:pb-[209px] mq750:box-border">
                    <BusinessDashboardMenuList />
                </div>
                <section className="flex-1 flex flex-col items-start justify-start max-w-[calc(100%_-_312px)] text-center text-29xl text-text-alternate font-text-medium-normal mq1050:max-w-full">
                    <div className="self-stretch bg-app1 overflow-hidden flex flex-col items-center justify-start pt-[30px] px-5 pb-[60px] box-border max-w-full">
                    <div className="flex flex-row items-center justify-center max-w-full">
                            <h1 className="relative text-[48px] leading-[120%] font-inter text-white text-center">
                                Personal Details
                            </h1>
                        </div>
                    </div>
                    <div className="self-stretch bg-text-alternate flex flex-col items-start justify-start p-8 box-border max-w-full text-left text-base text-text-primary mq1050:pt-[21px] mq1050:pb-[21px] mq1050:box-border mq750:pt-5 mq750:pb-5 mq750:box-border">
                        <div className="self-stretch flex flex-col items-start justify-start py-6 px-0 gap-[8px]">
                            <div className="self-stretch relative leading-[150%]">
                                Profile Picture
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[822px] pl-0 gap-[24px] lg:flex-wrap mq1050:pr-[411px] mq1050:box-border mq450:pr-5 mq450:box-border mq750:pr-[205px] mq750:box-border">
                                <img
                                    className="h-20 w-20 relative rounded-[50%] object-cover"
                                    loading="lazy"
                                    alt=""
                                    src="/caregiver-avatar-image@2x.png"
                                />
                                <button className="cursor-pointer py-2 px-[13px] bg-[transparent] h-[42px] rounded-11xl box-border flex flex-row items-center justify-center gap-[8px] whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-dark hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
                                    <img
                                        className="h-6 w-6 relative overflow-hidden shrink-0"
                                        alt=""
                                        src="/manage-button-icon--editalt.svg"
                                    />
                                    <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-darker text-left inline-block min-w-[78px]">
                                        Edit photo
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="w-[1064px] overflow-x-auto flex flex-col items-start justify-start py-0 pr-6 pl-0 box-border max-w-full">
                            <FullNameRow
                                fullNameLabel="Full name"
                                nameSurname="Name Surname"
                            />
                            <FullNameRow
                                fullNameLabel="Company Name"
                                nameSurname="Company Name"
                                propMinWidth="95px"
                            />
                            <FullNameRow
                                fullNameLabel="Phone Number"
                                nameSurname="Phone Number"
                                propMinWidth="89px"
                            />
                            <FullNameRow
                                fullNameLabel="Permanent Address"
                                nameSurname="Street"
                                propMinWidth="36px"
                            />
                            <FullNameRow
                                fullNameLabel="City"
                                nameSurname="City"
                                propMinWidth="23px"
                            />
                            <FullNameRow
                                fullNameLabel="Zip Code"
                                nameSurname="Zip Code"
                                propMinWidth="53px"
                            />
                            <FullNameRow
                                fullNameLabel="About Service"
                                nameSurname="Description"
                                propMinWidth="67px"
                            />
                            <FullNameRow
                                fullNameLabel="Email Address"
                                nameSurname="woofy@gmail.com"
                                propMinWidth="109px"
                            />
                            <FullNameRow
                                fullNameLabel="Password"
                                nameSurname="*******"
                                propMinWidth="43px"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default PersonalDetailsSection;
