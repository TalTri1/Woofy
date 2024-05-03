import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type PendingRequestCardType = {
  boardingIconMoon?: string;
  boarding?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  boardingServiceTagWidth?: CSSProperties["width"];
  boardingWidth?: CSSProperties["width"];
};

const PendingRequestCard: FunctionComponent<PendingRequestCardType> = ({
  boardingIconMoon,
  boarding,
  propMinWidth,
  boardingServiceTagWidth,
  boardingWidth,
}) => {
  const boardingStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: boardingWidth,
    };
  }, [propMinWidth, boardingWidth]);

  const boardingServiceTagStyle: CSSProperties = useMemo(() => {
    return {
      width: boardingServiceTagWidth,
    };
  }, [boardingServiceTagWidth]);

  return (
    <div className="self-stretch box-border flex flex-row flex-wrap items-center justify-start pt-[30px] px-0 pb-8 gap-[32px] max-w-full text-left text-xl text-text-primary font-text-medium-normal border-t-[1px] border-solid border-color-neutral-neutral-dark mq450:gap-[16px]">
      <img
        className="h-36 w-36 relative rounded-71xl object-cover"
        alt=""
        src="/placeholder-image@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[385px] max-w-full mq450:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[210px] pl-0 gap-[10px] mq450:pr-5 mq450:box-border mq750:flex-wrap mq750:pr-[105px] mq750:box-border">
            <b className="relative leading-[150%] inline-block min-w-[10px] mq450:text-base mq450:leading-[24px]">
              Dog Name
            </b>
            <b className="relative leading-[150%] inline-block min-w-[10px] mq450:text-base mq450:leading-[24px] mq750:w-full mq750:h-2.5">
              •
            </b>
            <b className="relative leading-[150%] inline-block min-w-[127px] mq450:text-base mq450:leading-[24px]">
              Owner Name
            </b>
            <div
              className="rounded-11xl bg-app1 flex flex-row items-center justify-start py-1 px-2 gap-[5px] text-white"
              style={boardingServiceTagStyle}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src={boardingIconMoon}
              />
              <div
                className="relative leading-[150%] font-medium inline-block min-w-[69px]"
                style={boardingStyle}
              >
                {boarding}
              </div>
            </div>
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
        <div className="self-stretch relative text-base leading-[150%]">
          Message:...
        </div>
        <div className="self-stretch flex flex-row items-end justify-end py-0 pr-[15px] pl-[387px] [row-gap:20px] mq450:pl-5 mq450:box-border mq750:flex-wrap mq750:pl-[193px] mq750:box-border">
          <button className="cursor-pointer [border:none] py-2 px-[5px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center gap-[4px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/accept-icon--check.svg"
            />
            <div className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-text-primary text-left inline-block min-w-[56px]">
              Accept
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2 px-[5px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center gap-[4px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/decline-icon--x.svg"
            />
            <div className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-text-primary text-left inline-block min-w-[58px]">
              Decline
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PendingRequestCard;
