import { FunctionComponent } from "react";

export type UserReviewType = {
  avatarImage?: string;
};

const UserReview: FunctionComponent<UserReviewType> = ({ avatarImage }) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start py-4 px-8 box-border gap-[24px] min-w-[280px] max-w-full text-left text-base text-text-primary font-text-medium-normal">
      <div className="flex flex-row items-center justify-start gap-[20px] mq450:flex-wrap">
        <img
          className="h-14 w-14 relative rounded-[50%] object-cover"
          loading="lazy"
          alt=""
          src={avatarImage}
        />
        <div className="flex flex-col items-start justify-start">
          <div className="relative leading-[150%] font-semibold inline-block min-w-[119px]">
            Name Surname
          </div>
          <div className="relative leading-[150%] inline-block min-w-[36px]">
            Date
          </div>
        </div>
      </div>
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[4px]">
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/vector.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/vector.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/vector.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/vector.svg"
        />
        <img
          className="h-[18.9px] w-5 relative min-h-[19px]"
          alt=""
          src="/vector.svg"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-lg">
        <div className="self-stretch relative leading-[150%]">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare."
        </div>
      </div>
    </div>
  );
};

export default UserReview;
