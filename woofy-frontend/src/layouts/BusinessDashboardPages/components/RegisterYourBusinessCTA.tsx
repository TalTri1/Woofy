import { FunctionComponent, useCallback } from "react";

const RegisterYourBusinessCTA: FunctionComponent = () => {
  const onRegisterYourBusinessButtonClick = useCallback(() => {
    // Please sync "Business Dashboard Page / Serivces Section" to the project
  }, []);

  return (
    <div className="self-stretch bg-text-alternate overflow-hidden flex flex-col items-center justify-start pt-[50px] px-16 pb-0 box-border max-w-full text-left text-13xl text-text-primary font-text-medium-normal lg:gap-[40px] lg:pl-8 lg:pr-8 lg:box-border mq750:gap-[20px]">
      <div className="self-stretch rounded-31xl flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch box-border flex flex-col items-start justify-start py-0 px-[31px] max-w-full border-[1px] border-solid border-app1">
          <div className="self-stretch flex flex-row items-center justify-start py-5 px-0 box-border max-w-full">
            <div className="w-[1064px] flex flex-row items-start justify-start shrink-0 max-w-[114%]">
              <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <b className="self-stretch relative leading-[42px] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px]">
                    Final Steps to Start Enjoying Woofy!
                  </b>
                  <div className="self-stretch relative text-lg leading-[150%]">
                    Please enter your business and services details in order to
                    start serving costumers.
                  </div>
                  <button
                    className="cursor-pointer [border:none] py-3 px-6 bg-app1 rounded-11xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue"
                    onClick={onRegisterYourBusinessButtonClick}
                  >
                    <div className="relative text-lg leading-[150%] font-semibold font-text-medium-normal text-white text-left">
                      Register your Business
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterYourBusinessCTA;
