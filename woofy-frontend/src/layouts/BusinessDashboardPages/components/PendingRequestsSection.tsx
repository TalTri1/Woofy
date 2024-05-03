import { FunctionComponent } from "react";
import PendingRequestCard from "./PendingRequestCard";

const PendingRequestsSection: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-text-alternate overflow-hidden flex flex-col items-center justify-start pt-[20px] px-5 pb-[30px] box-border gap-[20px] max-w-full text-center text-29xl text-text-primary font-text-medium-normal lg:pt-8 lg:pb-5 lg:box-border mq450:gap-[20px] mq750:pt-[21px] mq750:box-border">
      <div className="w-[768px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start">
          <h1 className="m-0 self-stretch relative text-29xl leading-[58px] font-bold mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
            Pending Requests
          </h1>
        </div>
      </div>
      <div className="w-[768px] flex flex-col items-center justify-center gap-[28px] max-w-full text-left text-xl">
        <div className="self-stretch box-border flex flex-col items-start justify-start max-w-full border-b-[1px] border-solid border-text-primary">
          <PendingRequestCard
            boardingIconMoon="/boarding-icon--moon.svg"
            boarding="Boarding"
          />
          <PendingRequestCard
            boardingIconMoon="/icon--sun.svg"
            boarding="Day Care"
            propMinWidth="70px"
            boardingServiceTagWidth="unset"
            boardingWidth="unset"
          />
          <PendingRequestCard
            boardingIconMoon="/sitting-icon--bed.svg"
            boarding="Sitting"
            propMinWidth="50px"
            boardingServiceTagWidth="unset"
            boardingWidth="unset"
          />
          <PendingRequestCard
            boardingIconMoon="/walking-icon--walk.svg"
            boarding="Walking"
            propMinWidth="61px"
            boardingServiceTagWidth="unset"
            boardingWidth="unset"
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

export default PendingRequestsSection;
