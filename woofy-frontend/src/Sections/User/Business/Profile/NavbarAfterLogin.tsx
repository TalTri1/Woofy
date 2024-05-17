import { FunctionComponent } from "react";

const NavbarAfterLogin: FunctionComponent = () => {
  return (
    <header className="self-stretch bg-text-alternate overflow-hidden flex flex-row items-start justify-start py-4 px-16 box-border top-[0] z-[99] sticky max-w-full text-left text-9xl text-text-primary font-volkhov mq750:pl-8 mq750:pr-8 mq750:box-border">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
        <div className="w-[168px] flex flex-row items-start justify-start">
          <div className="h-10 flex-1 flex flex-row items-center justify-between relative">
            <div className="!m-[0] absolute top-[-10px] left-[0px] flex flex-row items-center justify-start">
              <img
                className="h-[60px] w-[60px] relative rounded-[50%] object-cover"
                loading="lazy"
                alt=""
                src="/photo-in-ellipse@2x.png"
              />
            </div>
            <div className="h-[31px] !m-[0] absolute top-[4.5px] left-[47px] flex flex-row items-start justify-start py-0 pr-0 pl-3 box-border z-[1]">
              <div className="mt-[-9.700000000000728px] flex flex-row items-start justify-start p-2.5">
                <h2 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit inline-block min-w-[91px] whitespace-nowrap">
                  Woofy
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[605px] flex flex-row items-start justify-start gap-[32px] max-w-full text-base font-text-medium-normal mq750:gap-[16px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[32px] mq1050:hidden mq450:gap-[16px]">
              <div className="relative leading-[150%] inline-block min-w-[45px]">
                Home
              </div>
              <div className="relative leading-[150%] inline-block min-w-[66px]">
                Discover
              </div>
              <div className="relative text-lg leading-[150%] font-semibold whitespace-nowrap">
                Become a Caregiver
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px] font-text-regular-normal1">
            <div className="flex flex-row items-center justify-start p-2">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/icon--bell.svg"
              />
            </div>
            <div className="h-10 w-10 relative rounded-[50%] bg-gainsboro" />
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
              <div className="relative leading-[150%] inline-block min-w-[111px] whitespace-nowrap">
                Name Surname
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarAfterLogin;
