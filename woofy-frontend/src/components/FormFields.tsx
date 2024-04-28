import { FunctionComponent } from "react";
import DogNameInput from "./DogNameInput";

export type UserRegistrationFormFieldsType = {
  showPuppyRadioButton?: boolean;
  showAdultRadioButton?: boolean;
  showSeniorRadioButton?: boolean;
};

const UserRegistrationFormFields: FunctionComponent<
  UserRegistrationFormFieldsType
> = ({
  showPuppyRadioButton = false,
  showAdultRadioButton = false,
  showSeniorRadioButton = false,
}) => {
  return (
    <form className="m-0 w-[600px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
          Owner Picture
        </div>
        <div className="flex flex-row items-center justify-start py-0 pr-[318px] pl-0 gap-[24px] mq450:pr-5 mq450:box-border mq700:flex-wrap mq700:pr-[159px] mq700:box-border">
          <img
            className="h-20 w-20 relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/caregiver-avatar-image@2x.png"
          />
          <button className="cursor-pointer py-2 px-[16.5px] bg-[transparent] h-[42px] rounded-11xl box-border flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-darker text-left inline-block min-w-[103px]">
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
      <DogNameInput
        dogNameLabel="What is your dog's name?"
        dogNamePlaceholderPlaceho="Dog Name*"
      />
      <DogNameInput
        dogNameLabel="What is your dog's breed?"
        dogNamePlaceholderPlaceho="Dog Breed*"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
          How old is your pet?
        </div>
        <div className="flex flex-row flex-wrap items-start justify-start py-0 pr-[217px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq700:pr-[108px] mq700:box-border">
          {showPuppyRadioButton && (
            <button
              className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200"
              id="Puppy Button"
            >
              <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-center">
                <p className="m-0">{`Puppy `}</p>
                <p className="m-0">0-1 years</p>
              </div>
            </button>
          )}
          {showAdultRadioButton && (
            <button
              className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200"
              id="Adult Button"
            >
              <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-center">
                <p className="m-0">{`Adult `}</p>
                <p className="m-0">2-8 years</p>
              </div>
            </button>
          )}
          {showSeniorRadioButton && (
            <button
              className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs box-border flex flex-row items-center justify-center min-w-[41px] border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200"
              id="Senior Button"
            >
              <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-center">
                <p className="m-0">{`Senior `}</p>
                <p className="m-0">9 years +</p>
              </div>
            </button>
          )}
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
          How big is your dog?
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-[145px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq700:pr-[72px] mq700:box-border">
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
          <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] flex-1 rounded-3xs box-border flex flex-row items-center justify-center min-w-[41px] border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-center">
              <p className="m-0">Large</p>
              <p className="m-0">22-45 kg</p>
            </div>
          </button>
          <button
            className="cursor-pointer py-1.5 px-[15px] bg-[transparent] w-[90px] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200"
            id="Giant Size Button"
          >
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-center">
              <p className="m-0">Giant</p>
              <p className="m-0">45 kg +</p>
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
          Training Level
        </div>
        <div className="flex flex-row flex-wrap items-start justify-start py-0 pr-48 pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq700:pr-24 mq700:box-border">
          <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] w-[100px] rounded-3xs box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[68px]">
              Beginner
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2 px-4 bg-app1 rounded-3xs flex flex-row items-center justify-center hover:bg-cornflowerblue">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-background-color-primary text-left inline-block min-w-[96px]">
              Intermediate
            </div>
          </button>
          <button className="cursor-pointer py-1.5 px-[15px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[76px]">
              Advanced
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
        <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
          About
        </div>
        <textarea
          className="bg-background-color-primary [outline:none] self-stretch h-[180px] box-border flex flex-row items-start justify-start pt-0.5 pb-[1.8px] pr-2.5 pl-3 font-text-medium-normal text-base text-color-neutral-neutral min-w-[250px] min-h-[180px] max-w-full border-[1px] border-solid border-color-neutral-neutral-light"
          placeholder="Tell us about your dog..."
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
        <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
          Any special requirements for your dog?
        </div>
        <select className="self-stretch h-12 bg-background-color-primary box-border flex flex-row items-center justify-start py-2.5 px-[11px] font-text-medium-normal text-base text-color-neutral-neutral max-w-full border-[1px] border-solid border-color-neutral-neutral-light" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
          Add a Picture of Your Dog (at least 1 photo*)
        </div>
        <div className="flex flex-row items-center justify-start py-0 pr-1.5 pl-0 gap-[24px] mq700:flex-wrap">
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
            <div className="relative text-base leading-[150%] font-text-medium-normal text-color-neutral-neutral-darker text-left inline-block min-w-[103px]">
              Upload photo
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserRegistrationFormFields;
