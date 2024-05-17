import { FunctionComponent } from "react";
import {Business} from "../../../../models/BusinessModels/BusinessModel";

interface BusinessFrameProps {
  business: Business;
}

const BusinessFrame: FunctionComponent<BusinessFrameProps> = ({ business }) => {
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
                  alt="Location icon"
                  src="/icon--map.svg"
              />
              <div className="relative leading-[150%] font-medium inline-block min-w-[83px] mq450:text-base mq450:leading-[24px]">
                {business.address}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start text-center">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <img
                    className="h-[18.9px] w-5 relative"
                    loading="lazy"
                    alt="Rating icon"
                    src="/vector.svg"
                />
              </div>
              <div className="relative leading-[150%] mq450:text-base mq450:leading-[24px]">
                {`${business.rating} stars • ${business.reviewsCount} reviews`}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <img
                className="h-16 w-16 relative rounded-13xl object-cover"
                loading="lazy"
                alt="Owner avatar"
                src="/user-avatar-image@2x.png"
            />
            <div className="relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
              {business.firstName} {business.lastName}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-13xl">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch h-[42px] relative inline-block mq450:text-base">
                  <b className="leading-[130%]">{`${business.pricePerNight} ₪ `}</b>
                  <span className="text-xl leading-[150%] font-semibold text-color-neutral-neutral">
                  Per Night*
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-13xl">
          <div className="self-stretch h-px relative bg-text-primary box-border border-[1px] border-solid border-color-neutral-neutral" />
          <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px]">
            About {business.businessName}
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-3 box-border max-w-full">
            <div className="flex-1 relative leading-[150%] inline-block max-w-full mq450:text-base mq450:leading-[24px]">
              {business.about}
            </div>
          </div>
        </div>
      </div>
  );
};

export default BusinessFrame;