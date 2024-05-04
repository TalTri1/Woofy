import { FunctionComponent } from "react";

const DogSizeInput: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-text-primary font-text-medium-normal">
      <div className="self-stretch relative leading-[150%]">
        Dog Sizes You Are Able To Work With
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-[137px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq750:pr-[68px] mq750:box-border">
        <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] w-[82px] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
          <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-center">
            <p className="m-0">Small</p>
            <p className="m-0">2-9 kg</p>
          </div>
        </button>
        <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] w-[93px] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
          <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-center">
            <p className="m-0">Medium</p>
            <p className="m-0">9-22 kg</p>
          </div>
        </button>
        <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
          <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-center">
            <p className="m-0">Large</p>
            <p className="m-0">22-45 kg</p>
          </div>
        </button>
        <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] w-[90px] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
          <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-center">
            <p className="m-0">{`Giant `}</p>
            <p className="m-0">45 kg +</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DogSizeInput;
