import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BusinessDashboardMenuList: FunctionComponent = () => {
  const onServicesButtonClick = useCallback(() => {
    // Please sync "Business Dashboard Page / Serivces Section" to the project
  }, []);

  const onBusinessDetailsButtonClick = useCallback(() => {
    // Please sync "Business Dashboard Page / Business Details" to the project
  }, []);

  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-6 px-4 pb-0">
      <button className="cursor-pointer [border:none] p-2 bg-text-alternate self-stretch flex flex-row items-center justify-start">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/icon--home1.svg"
          />
          <div className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
            Home
          </div>
        </button>
      </button>
      <button
        className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-start"
        onClick={onServicesButtonClick}
      >
        <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/icon--donateheart.svg"
          />
          <div className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
            Services
          </div>
        </div>
      </button>
      <div className="self-stretch flex flex-col items-start justify-start">
        <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[8px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/icon--piechartalt2.svg"
            />
            <div className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
              Bookings Dashboard
            </div>
          </div>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 object-contain"
            alt=""
            src="/booking-dashboard-chevron-down@2x.png"
          />
        </button>
        <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[8px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--piechartalt2.svg"
            />
            <div className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
              Bookings Dashboard
            </div>
          </div>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 object-contain"
            loading="lazy"
            alt=""
            src="/booking-dashboard-chevron-down-1.svg"
          />
        </button>
        <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-end">
          <div className="w-[228px] flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--trendingup.svg"
            />
            <div className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
              Upcoming Bookings
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-end">
          <div className="w-[228px] flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--barchartalt2.svg"
            />
            <div className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
              History
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-end">
          <div className="w-[228px] flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--archive.svg"
            />
            <div className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
              Pending Requests
            </div>
            <div className="rounded-31xl flex flex-row items-start justify-start py-0 px-2">
              <b className="relative text-sm leading-[150%] inline-block font-text-medium-normal text-text-primary text-left min-w-[10px]">
                0
              </b>
            </div>
          </div>
        </button>
      </div>
      <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-start">
        <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/icon--chat.svg"
          />
          <div className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
            Messages
          </div>
          <div className="rounded-31xl flex flex-row items-start justify-start py-0 px-2">
            <b className="relative text-sm leading-[150%] inline-block font-text-medium-normal text-text-primary text-left min-w-[10px]">
              0
            </b>
          </div>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-start">
        <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/icon--star.svg"
          />
          <div className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
            Reviews
          </div>
        </div>
      </button>
      <div className="self-stretch flex flex-col items-start justify-start">
        <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[8px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/icon--usercircle.svg"
            />
            <div className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
              Manage Account
            </div>
          </div>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 object-contain"
            alt=""
            src="/booking-dashboard-chevron-down@2x.png"
          />
        </button>
        <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[8px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--usercircle.svg"
            />
            <div className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
              Manage Account
            </div>
          </div>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 object-contain"
            loading="lazy"
            alt=""
            src="/booking-dashboard-chevron-down-1.svg"
          />
        </button>
        <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-end">
          <div className="w-[228px] flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--idcard.svg"
            />
            <div className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
              Personal Details
            </div>
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-end"
          onClick={onBusinessDetailsButtonClick}
        >
          <div className="w-[228px] flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="icon--briefcase.svg"
              
            />
            <div className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
              Business Details
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BusinessDashboardMenuList;
