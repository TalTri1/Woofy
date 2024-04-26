import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type NavbarType = {
  /** Style props */
  woofyTextFrameWidth?: CSSProperties["width"];

  /** Action props */
  onBecomeACaregiverClick?: () => void;
  onJoinNowButtonClick?: () => void;
  onSignInButtonClick?: () => void;
};

const Navbar: FunctionComponent<NavbarType> = ({
  woofyTextFrameWidth,
  onBecomeACaregiverClick,
  onJoinNowButtonClick,
  onSignInButtonClick,
}) => {
  const woofyTextFrameStyle: CSSProperties = useMemo(() => {
    return {
      width: woofyTextFrameWidth,
    };
  }, [woofyTextFrameWidth]);

  return (
    <header className="self-stretch bg-background-color-primary overflow-hidden flex flex-row items-start justify-start py-4 px-16 box-border sticky top-[0] z-[99] max-w-full mq900:pl-8 mq900:pr-8 mq900:box-border">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] h-10 w-[168px] flex flex-row items-center justify-between relative"
          id="Logo Button"
        >
          <div className="!m-[0] absolute top-[-10px] left-[0px] flex flex-row items-center justify-start">
            <img
              className="h-[60px] w-[60px] relative rounded-[50%] object-cover"
              loading="lazy"
              alt=""
              src="/photo-in-ellipse@2x.png"
            />
          </div>
          <div
            className="h-[31px] !m-[0] absolute top-[4.5px] left-[47px] flex flex-row items-start justify-start py-0 pr-0 pl-3 box-border z-[1]"
            style={woofyTextFrameStyle}
          >
            <div className="mt-[-9.699999999999818px] flex flex-row items-start justify-start p-2.5">
              <h2 className="m-0 relative text-9xl leading-[36px] font-bold font-volkhov text-text-primary text-left inline-block min-w-[91px] whitespace-nowrap">
                Woofy
              </h2>
            </div>
          </div>
        </button>
        <div className="w-[601px] flex flex-row items-center justify-center gap-[32px] max-w-full mq700:gap-[16px] mq900:w-[251px]">
          <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[32px] max-w-full mq450:gap-[16px] mq900:hidden">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left inline-block min-w-[45px]"
              id="Home Link Button"
            >
              Home
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left inline-block min-w-[66px]"
              id="Discover Link Button"
            >
              Discover
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[150%] font-semibold font-text-medium-normal text-text-primary text-left inline-block whitespace-nowrap"
              id="Become a Caregiver Button"
              onClick={onBecomeACaregiverClick}
            >
              Become a Caregiver
            </button>
          </div>
          <div className="flex flex-row items-center justify-center gap-[16px]">
            <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral hover:bg-gray-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
              <div
                className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-text-primary text-left inline-block min-w-[70px] cursor-pointer"
                onClick={onJoinNowButtonClick}
              >
                Join now
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-2 px-5 bg-app1 rounded-11xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue">
              <div
                className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-background-color-primary text-left inline-block min-w-[53px]"
                onClick={onSignInButtonClick}
              >
                Sign in
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
