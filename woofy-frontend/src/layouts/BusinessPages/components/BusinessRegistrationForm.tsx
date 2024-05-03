import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BusinessRegistrationFormFields: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackButtonTextClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <form className="m-0 w-[600px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
          Caregiver Picture
        </div>
        <div className="flex flex-row items-center justify-start py-0 pr-[318px] pl-0 gap-[24px] mq450:pr-5 mq450:box-border mq750:flex-wrap mq750:pr-[159px] mq750:box-border">
          <img
            className="h-20 w-20 relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/caregiver-avatar-image@2x.png"
          />
          <button className="cursor-pointer py-2 px-[16.5px] bg-[transparent] h-[42px] rounded-11xl box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[103px]">
              Upload photo
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch bg-background-color-primary box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-color-neutral-neutral-light">
          <input
            className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
            placeholder="First Name*"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch bg-background-color-primary box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-color-neutral-neutral-light">
          <input
            className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
            placeholder="Last Name*"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch bg-background-color-primary box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-color-neutral-neutral-light">
          <input
            className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
            placeholder="Business Name (Optional)"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch bg-background-color-primary box-border flex flex-row items-center justify-start py-2.5 px-[11px] gap-[12px] max-w-full border-[1px] border-solid border-color-neutral-neutral-light">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/icon--phone.svg"
          />
          <input
            className="w-[calc(100%_-_46px)] [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-[calc(100%_-_36px)] p-0"
            placeholder="Phone Number*"
            type="tel"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch bg-background-color-primary box-border flex flex-row items-center justify-start py-2.5 px-[11px] gap-[12px] max-w-full border-[1px] border-solid border-color-neutral-neutral-light">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/icon--home.svg"
          />
          <input
            className="w-[calc(100%_-_46px)] [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-[calc(100%_-_36px)] p-0"
            placeholder="Permanent Address*"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch bg-background-color-primary box-border flex flex-row items-center justify-start py-2.5 px-[11px] gap-[12px] max-w-full border-[1px] border-solid border-color-neutral-neutral-light">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/icon--buildinghouse.svg"
          />
          <input
            className="w-[calc(100%_-_46px)] [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-[calc(100%_-_36px)] p-0"
            placeholder="City*"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch bg-background-color-primary box-border flex flex-row items-center justify-start py-2.5 px-[11px] max-w-full border-[1px] border-solid border-color-neutral-neutral-light">
          <input
            className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[250px] max-w-full p-0"
            placeholder="Zip Code*"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
          Your Type of Services (can choose multiple choices)
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-1.5 pb-0 pr-[26px] pl-0 gap-[16px]">
          <button className="cursor-pointer py-0 pr-[15px] pl-[7px] bg-[transparent] flex-1 rounded-11xl box-border flex flex-row items-center justify-center gap-[8px] min-w-[53px] border-[1px] border-solid border-color-neutral-neutral-light">
            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/icon--moon.svg"
              />
            </div>
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[68px]">
              Boarding
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-0 pr-4 pl-2 bg-app1 flex-1 rounded-11xl flex flex-row items-center justify-center box-border gap-[8px] min-w-[54px]">
            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/icon--sun.svg"
              />
            </div>
            <div className="relative text-base leading-[150%] font-text-medium-normal text-background-color-primary text-left inline-block min-w-[70px]">
              Day Care
            </div>
          </button>
          <button className="cursor-pointer py-0 pr-[15px] pl-[7px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-color-neutral-neutral-light">
            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/icon--bed.svg"
              />
            </div>
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[41px]">
              Sitter
            </div>
          </button>
          <button className="cursor-pointer py-0 pr-[15px] pl-[7px] bg-[transparent] rounded-11xl flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-color-neutral-neutral-light">
            <div className="flex flex-col items-center justify-center py-2 pr-0 pl-2">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/icon--walk.svg"
              />
            </div>
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[51px]">
              Walker
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
          Dog sizes you’re able to work with
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-[145px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq750:pr-[72px] mq750:box-border">
          <button
            className="cursor-pointer py-1.5 px-[15px] bg-[transparent] w-[82px] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200"
            id="Small Size Button"
          >
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-center">
              <p className="m-0">Small</p>
              <p className="m-0">2-9 kg</p>
            </div>
          </button>
          <button
            className="cursor-pointer py-1.5 px-[15px] bg-[transparent] flex-1 rounded-3xs box-border flex flex-row items-center justify-center min-w-[37px] border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200"
            id="Medium Size Button"
          >
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-center">
              <p className="m-0">Medium</p>
              <p className="m-0">9-22 kg</p>
            </div>
          </button>
          <button
            className="cursor-pointer py-1.5 px-[15px] bg-[transparent] flex-1 rounded-3xs box-border flex flex-row items-center justify-center min-w-[41px] border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200"
            id="Large Size Button"
          >
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-center">
              <p className="m-0">Large</p>
              <p className="m-0">22-45kg</p>
            </div>
          </button>
          <button
            className="cursor-pointer py-1.5 px-[15px] bg-[transparent] w-[90px] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200"
            id="Giant Size Button"
          >
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-center">
              <p className="m-0">{`Giant `}</p>
              <p className="m-0">45 kg +</p>
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">{`Home Conditions (for Boarding & Day Care only)`}</div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[120px] pl-0 box-border gap-[16px] min-h-[152px] mq750:pr-[30px] mq750:box-border mq1125:pr-[60px] mq1125:box-border">
          <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] w-[81px] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[49px]">
              House
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2 px-4 bg-app1 rounded-3xs flex flex-row items-center justify-center hover:bg-cornflowerblue">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-background-color-primary text-left inline-block min-w-[81px]">
              Apartment
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[128px]">
              Has Fenced Yard
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left">
              Dogs Allowed on Furniture
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left">
              Dogs Allowed on Bed
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[104px]">
              Non-Smoking
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">{`Pets in Home (for Boarding & Day care)`}</div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[141px] pl-0 box-border gap-[16px] min-h-[96px] mq750:pr-[35px] mq750:box-border mq1025:pr-[70px] mq1025:box-border">
          <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[84px]">
              Own a Dog
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2 px-4 bg-app1 rounded-3xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-background-color-primary text-left inline-block min-w-[80px]">
              Own a Cat
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[127px]">
              Own Caged Pets
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[97px]">
              Has Children
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left">
              Only One Client at a Time
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
        <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
          About
        </div>
        <textarea
          className="bg-background-color-primary [outline:none] self-stretch box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-2.5 pl-3 font-roboto text-base text-color-neutral-neutral min-w-[250px] min-h-[180px] max-w-full border-[1px] border-solid border-color-neutral-neutral-light"
          placeholder="Tell us about yourself..."
          maxLength={1500}
          id="AboutPlaceholder"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
        <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
          Any special requirements for your dog?
        </div>
        <textarea
          className="bg-text-alternate [outline:none] self-stretch h-[100px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-0.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral border-[1px] border-solid border-border-secondary"
          placeholder="Let us know about your dog needs..."
          maxLength={750}
          id="SpecialRequirements"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
          Add Pictures of Your Services (at least 2 photos*)
        </div>
        <div className="flex flex-row items-center justify-start py-0 pr-1.5 pl-0 gap-[24px] mq750:flex-wrap">
          <img
            className="h-20 w-20 relative rounded-[50%] object-cover min-h-[80px]"
            loading="lazy"
            alt=""
            src="/caregiver-avatar-image@2x.png"
          />
          <img
            className="h-20 w-20 relative rounded-[50%] object-cover min-h-[80px]"
            loading="lazy"
            alt=""
            src="/caregiver-avatar-image@2x.png"
          />
          <img
            className="h-20 w-20 relative rounded-[50%] object-cover min-h-[80px]"
            loading="lazy"
            alt=""
            src="/caregiver-avatar-image@2x.png"
          />
          <img
            className="h-20 w-20 relative rounded-[50%] object-cover min-h-[80px]"
            loading="lazy"
            alt=""
            src="/caregiver-avatar-image@2x.png"
          />
          <button className="cursor-pointer py-2 px-[16.5px] bg-[transparent] h-[42px] rounded-11xl box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left inline-block min-w-[103px]">
              Upload photo
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch h-[88px] flex flex-row items-center justify-center py-6 px-5 box-border gap-[16px]">
        <button className="cursor-pointer py-2 px-[18.5px] bg-[transparent] h-[42px] w-[78px] rounded-11xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
          <div
            className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[39px] cursor-pointer"
            onClick={onBackButtonTextClick}
          >
            Back
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-2 px-5 bg-app1 rounded-11xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue">
          <div className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-background-color-primary text-left inline-block min-w-[55px]">{`Submit `}</div>
        </button>
      </div>
    </form>
  );
};

export default BusinessRegistrationFormFields;
