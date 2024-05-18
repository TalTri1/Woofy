import { FunctionComponent } from "react";
import { Business } from "../../../../models/BusinessModels/BusinessModel";
import { DogSitterModel } from "../../../../models/BusinessModels/BusinessTypesModels/HomeStay/DogSitterModel";
import { DogWalkerModel } from "../../../../models/BusinessModels/BusinessTypesModels/HomeStay/DogWalkerModel";
import { BoardingModel } from "../../../../models/BusinessModels/BusinessTypesModels/StayAtBusiness/BoardingModel";
import { DayCareModel } from "../../../../models/BusinessModels/BusinessTypesModels/StayAtBusiness/DayCareModel";
import { BUSINESS_TYPES } from "../../../../models/Enums/Enums";

interface BusinessFrameProps {
  business: Business;
  serviceData: DogSitterModel | DogWalkerModel | BoardingModel | DayCareModel;
  selectedService: BUSINESS_TYPES;
}

  const BusinessFrame: FunctionComponent<BusinessFrameProps> = ({ business, serviceData, selectedService }) => {
    const renderDetailBox = (title: string, values: string[]) => (
        <div className="border rounded-md p-4 mb-4 w-full">
          <h3 className="font-bold mb-2">{title}</h3>
          <div className="flex flex-wrap">
            {values.map((value, index) => (
                <div key={index} className="flex items-center w-full md:w-1/2 lg:w-1/3">
                  <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt="check"
                      src="/check.svg"
                  />
                  <div className="ml-2">{value}</div>
                </div>
            ))}
          </div>
        </div>
    );

  return (
      <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[400px] max-w-full text-left text-xl text-text-primary font-text-medium-normal mq750:gap-[16px] mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="flex flex-row items-center justify-start text-21xl">
            <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
              {business.businessName}
            </h1>
          </div>
          <div className="flex flex-row items-center justify-start text-center">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <img
                  className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
                  loading="lazy"
                  alt=""
                  src="/icon--map.svg"
              />
              <div className="relative leading-[150%] font-medium inline-block min-w-[83px] mq450:text-base mq450:leading-[24px]">
                {business.city}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start text-center">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <img
                    className="h-[18.9px] w-5 relative"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                />
              </div>
              <div className="relative leading-[150%] mq450:text-base mq450:leading-[24px]">
                (4.5 stars) • 10 reviews
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <img
                className="h-16 w-16 relative rounded-13xl object-cover"
                loading="lazy"
                alt=""
                src="/user-avatar-image@2x.png"
            />
            <div className="relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
              {`${business.firstName} ${business.lastName}`}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-13xl">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch h-[42px] relative inline-block mq450:text-base">
                  <b className="leading-[130%]">{`${serviceData.price} ₪ `}</b>
                  <span className="text-xl leading-[150%] font-semibold text-color-neutral-neutral">
                                    {selectedService === BUSINESS_TYPES.BOARDING || selectedService === BUSINESS_TYPES.DAY_CARE ? "Per Night*" : "Per Service*"}
                                </span>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div
                  className="self-stretch flex flex-row items-start justify-start pt-2 px-0 pb-0 box-border gap-[16px] max-w-full mq750:flex-wrap">
                <button
                    className="cursor-pointer [border:none] py-3 px-6 bg-app1 flex-1 rounded-11xl flex flex-row items-center justify-center box-border min-w-[359px] max-w-full hover:bg-cornflowerblue mq750:min-w-full">
                  <b className="flex-1 relative text-base leading-[150%] inline-block font-text-regular-normal1 text-white text-center max-w-full">
                    Book Appointment
                  </b>
                </button>
                <div className="h-12 w-12 rounded-71xl flex flex-row items-center justify-center p-2 box-border">
                  <img
                      className="h-8 w-8 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/icon--heart.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-13xl">
          <div
              className="self-stretch h-px relative bg-text-primary box-border border-[1px] border-solid border-color-neutral-neutral"/>
          <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px]">
            About {business.businessName}
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-3 box-border max-w-full">
            <div
                className="flex-1 relative leading-[150%] inline-block max-w-full mq450:text-base mq450:leading-[24px]">
              {serviceData.about}
            </div>
          </div>
          <div
              className="self-stretch h-px relative bg-text-primary box-border border-[1px] border-solid border-color-neutral-neutral" />
          <div className="self-stretch flex items-start justify-start gap-[0.5px] max-w-full text-5xl">
            {selectedService === BUSINESS_TYPES.BOARDING || selectedService === BUSINESS_TYPES.DAY_CARE ? (
                <>
                  {renderDetailBox("Home Conditions", (serviceData as BoardingModel | DayCareModel).homeConditions || [])}
                  {renderDetailBox("Pets in Home", (serviceData as BoardingModel | DayCareModel).petsInHome || [])}
                </>
            ) : null}
            {renderDetailBox("Dog Capacity", [`${serviceData.dogCapacity}`])}
            {renderDetailBox("Working Days", (serviceData.workingDays || []).map(day => day))}
            {renderDetailBox("Working Hours", [`${serviceData.startTime} - ${serviceData.endTime}`])}
            {renderDetailBox("Acceptable Dog Sizes", (serviceData.acceptableDogSizes || []))}
          </div>
        </div>
      </div>
  );
};

export default BusinessFrame;
