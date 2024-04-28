import { FunctionComponent, useCallback } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import BusinessRegistrationFormFields from "../../components/BusinessComponenets/BusinessRegistrationForm";

const BusinessRegistrationPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDogOwnerButtonClick = useCallback(() => {
    navigate("/registration-page");
  }, [navigate]);

  return (
    <div className="w-full relative flex flex-col items-start justify-start tracking-[normal] leading-[normal] text-left text-37xl text-background-color-primary font-text-medium-normal">
      <Navbar woofyTextFrameWidth="unset" />
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-28 px-16 box-border bg-[url('/public/header--54@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:gap-[20px] mq450:pt-[73px] mq450:pb-[73px] mq450:box-border mq1025:gap-[40px] mq1025:pl-8 mq1025:pr-8 mq1025:box-border">
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[27px] box-border gap-[24px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-15xl mq450:leading-[40px] mq1025:text-26xl mq1025:leading-[54px]">
            Register as a caregiver
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            Complete the forms below to provide your contact information and
            your business details.
          </div>
        </div>
      </div>
      <main className="self-stretch bg-background-color-primary flex flex-col items-center justify-center max-w-full mq750:gap-[20px]">
        <section className="self-stretch flex flex-col items-center justify-center max-w-full text-center text-5xl text-text-primary font-text-medium-normal">
          <div className="self-stretch bg-background-color-primary flex flex-row items-end justify-start pt-9 px-0 pb-6 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
              <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-bold font-inherit mq450:text-lgi mq450:leading-[27px]">
                Welcome to Woofy!
              </h3>
              <div className="self-stretch relative text-base leading-[150%]">
                Please Complete your account information and settings.
              </div>
            </div>
          </div>
          <div className="self-stretch bg-background-color-primary flex flex-row items-end justify-start pt-3 px-0 pb-6 box-border max-w-full font-roboto">
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
              <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
                I consider myself a...
              </h3>
              <div className="self-stretch flex flex-row items-center justify-center pt-4 px-5 pb-0 gap-[16px] mq450:flex-wrap">
                <button className="cursor-pointer py-1.5 px-[19px] bg-silver rounded-11xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-text-primary hover:bg-gray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray">
                  <div
                    className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-text-primary text-left inline-block min-w-[87px] cursor-pointer"
                    onClick={onDogOwnerButtonClick}
                  >
                    Dog Owner
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-2 px-5 bg-app1 rounded-11xl flex flex-row items-center justify-center hover:bg-cornflowerblue">
                  <div className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-background-color-primary text-left inline-block min-w-[76px]">
                    Caregiver
                  </div>
                </button>
              </div>
            </div>
          </div>
          <BusinessRegistrationFormFields />
        </section>
      </main>
    </div>
  );
};

export default BusinessRegistrationPage;
