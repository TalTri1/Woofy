import { FunctionComponent } from "react";
import UserReview from "./UserReview";

const TestimonialsContainer: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-text-alternate overflow-hidden flex flex-col items-start justify-start py-0 px-16 box-border max-w-full text-left text-base text-text-primary font-text-medium-normal lg:pl-8 lg:pr-8 lg:box-border mq750:gap-[40px] mq450:gap-[20px]">
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <UserReview avatarImage="/avatar-image@2x.png" />
          <UserReview avatarImage="/avatar-image@2x.png" />
          <UserReview avatarImage="/avatar-image@2x.png" />
        </div>
        <div className="self-stretch flex flex-row items-center justify-center pt-6 px-5 pb-0">
          <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-border-secondary hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[87px]">
              Show More
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsContainer;
