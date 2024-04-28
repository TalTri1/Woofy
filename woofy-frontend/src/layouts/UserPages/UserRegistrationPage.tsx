import React, { FunctionComponent, useCallback } from "react";
import Navbar from "../../components/Navbar";
import TypeOfUser from "../../components/TypeOfUser";
import UserRegistrationFormFields from "../../components/CustomerComponenets/CustomerRegistrationForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Age, Size, TrainingLevel } from "../../models/DogModels/DogModel";
import CustomerRegistrationModel from "../../models/CustomerModels/CustomerRegistrationModel";
import DogModel from "../../models/DogModels/DogModel";
import customerRegistrationModel from "../../models/CustomerModels/CustomerRegistrationModel";

const UserRegistrationPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const basicSignUpModel = location.state;

  const [user, setUserRegistrationDetails] = useState
  (new CustomerRegistrationModel(basicSignUpModel, '', '', '', new DogModel('', '', Age.PUPPY, Size.SMALL, TrainingLevel.BEGINNER, '', '')));

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserRegistrationDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const formSubmitHandler = async () => {
    console.log("Submit has been pressed");
    console.log(`Customer Registration Model has been created:\n ${JSON.stringify(customerRegistrationModel)}`);

    // Todo After this works - add api.post call to the backend for saving in DB.
  };

  const onBackButtonTextClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start tracking-[normal] leading-[normal] text-left text-37xl text-background-color-primary font-text-medium-normal">
      <Navbar woofyTextFrameWidth="unset" />
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-28 px-16 box-border bg-[url('/public/header--541@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:gap-[20px] mq450:pt-[73px] mq450:pb-[73px] mq450:box-border mq900:gap-[40px] mq900:pl-8 mq900:pr-8 mq900:box-border">
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[27px] box-border gap-[24px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-15xl mq450:leading-[40px] mq900:text-26xl mq900:leading-[54px]">
            Enter User Information
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            Complete the forms below to provide your contact information and
            your dog's details.
          </div>
        </div>
      </div>
      <main className="self-stretch bg-background-color-primary flex flex-col items-center justify-center gap-[30px] max-w-full">
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
          <TypeOfUser />
          <UserRegistrationFormFields
            showPuppyRadioButton
            showAdultRadioButton
            showSeniorRadioButton
          />
        </section>
        <section className="self-stretch flex flex-row items-center justify-center py-6 px-5 box-border gap-[16px] min-h-[104px] mq450:flex-wrap">
          <button className="cursor-pointer py-2 px-[18.5px] bg-[transparent] h-[42px] w-[78px] rounded-11xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
            <div
              className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[39px] cursor-pointer"
              onClick={onBackButtonTextClick}
            >
              Back
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2 px-5 bg-app1 rounded-11xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue"
            onClick={formSubmitHandler}>
            <div className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-background-color-primary text-left inline-block min-w-[55px]">{`Submit `}</div>
          </button>
        </section>
      </main>
    </div>
  );
};

export default UserRegistrationPage;
