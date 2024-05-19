import { FunctionComponent } from "react";
import PastBookingCard from "./PastBookingCard";

const PastBookingsSectionCont: FunctionComponent = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-[50px] px-5 pb-[30px] box-border gap-[20px] max-w-full text-center text-29xl text-text-primary font-text-medium-normal lg:pt-8 lg:pb-5 lg:box-border mq450:gap-[20px] mq750:pt-[21px] mq750:box-border">
      <div className="w-[768px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start">
          <h1 className="m-0 self-stretch relative text-29xl leading-[58px] font-bold mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
            Past Bookings
          </h1>
        </div>
      </div>
      <div className="w-[768px] flex flex-col items-center justify-center gap-[28px] max-w-full text-left text-xl">
        <div className="self-stretch flex flex-row items-center justify-center py-0 px-5 [row-gap:20px] mq750:flex-wrap">
          <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] w-[91px] rounded-11xl box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral hover:bg-gray-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left inline-block min-w-[59px]">
              View all
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2 px-4 bg-[transparent] flex flex-row items-center justify-center gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--moon.svg"
            />
            <div className="relative text-base leading-[150%] font-medium font-text-medium-normal text-text-primary text-left inline-block min-w-[69px]">
              Boarding
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2 px-4 bg-[transparent] flex flex-row items-center justify-center gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--sun1.svg"
            />
            <div className="relative text-base leading-[150%] font-medium font-text-medium-normal text-text-primary text-left inline-block min-w-[70px]">
              Day Care
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2 px-4 bg-[transparent] flex flex-row items-center justify-center gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--bed.svg"
            />
            <div className="relative text-base leading-[150%] font-medium font-text-medium-normal text-text-primary text-left inline-block min-w-[50px]">
              Sitting
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2 px-4 bg-[transparent] flex flex-row items-center justify-center gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--walk.svg"
            />
            <div className="relative text-base leading-[150%] font-medium font-text-medium-normal text-text-primary text-left inline-block min-w-[61px]">
              Walking
            </div>
          </button>
        </div>
        <div className="self-stretch box-border flex flex-col items-start justify-start max-w-full border-b-[1px] border-solid border-text-primary">
          <div className="self-stretch box-border flex flex-row flex-wrap items-center justify-center pt-[30px] px-0 pb-8 gap-[32px] max-w-full border-t-[1px] border-solid border-color-neutral-neutral-dark mq450:gap-[16px]">
            <img
              className="h-36 w-36 relative rounded-71xl object-cover"
              loading="lazy"
              alt=""
              src="/placeholder-image@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[385px] max-w-full mq450:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[210px] pl-0 gap-[10px] mq450:pr-5 mq450:box-border mq750:flex-wrap mq750:pr-[105px] mq750:box-border">
                  <b className="relative leading-[150%] inline-block min-w-[100x] mq450:text-base mq450:leading-[24px]">
                    Business Name
                  </b>
                  
                       </div>
                <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[410px] pl-0 gap-[8px] text-base mq450:pr-5 mq450:box-border mq750:flex-wrap mq750:pr-[205px] mq750:box-border">
                  <div className="relative leading-[150%] inline-block min-w-[38px]">
                    Date
                  </div>
                  <div className="relative text-sm leading-[150%] font-text-small-normal inline-block min-w-[5px] mq750:w-full mq750:h-[5px]">
                    •
                  </div>
                  <div className="relative leading-[150%] inline-block min-w-[38px]">
                    Time
                  </div>
                  <div className="relative text-sm leading-[150%] font-text-small-normal inline-block min-w-[5px] mq750:w-full mq750:h-[5px]">
                    •
                  </div>
                  <div className="relative leading-[150%] inline-block min-w-[38px]">
                    Location
                  </div>
                </div>
              </div>
              
              <div className="self-stretch flex flex-row items-end justify-end py-0 px-[15px]">
                
                <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center gap-[8px] whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-dark hover:bg-gray-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/icon--edit.svg"
                    />
                    <div className="relative text-base leading-[150%] font-text-regular-normal1 text-text-primary text-left inline-block min-w-[83px]">
                      Add Review
                    </div>
                  </button>
              </div>
            </div>
          </div>

          <PastBookingCard
            dayCareIconSun="/boarding-icon--moon.svg"
            dayCare="Boarding"
          />
          
          <PastBookingCard
            dayCareIconSun="/icon--sun.svg"
            dayCare="Day Care"
          />
          <PastBookingCard
            dayCareIconSun="/sitting-icon--bed.svg"
            dayCare="Sitting"
            propMinWidth="50px"
            dayCareServiceTagWidth="unset"
            dayCareWidth="unset"
          />
          <PastBookingCard
            dayCareIconSun="/walking-icon--walk.svg"
            dayCare="Walking"
            propMinWidth="61px"
            dayCareServiceTagWidth="unset"
            dayCareWidth="unset"
          />
        </div>
        <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-dark hover:bg-gray-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
          <div className="relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left inline-block min-w-[86px]">
            Show More
          </div>
        </button>
        <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-dark hover:bg-gray-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
          <div className="relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left inline-block min-w-[82px]">
            Show Less
          </div>
        </button>
      </div>
    </div>
  );
};

export default PastBookingsSectionCont;
