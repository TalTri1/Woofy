import React, { FunctionComponent, useCallback, useState } from "react";
import Navbar from "../NavBarPage/NavbarPage";
import { useLocation, useNavigate } from "react-router-dom";
import RegistrationComponent from "./component/RegistrationComponent";

import api from "../../api/api";
import RegistrationModel, { USERTYPE } from "../../models/RegistrationModel";

const RegistrationPage: FunctionComponent = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const basicSignUpUser = location.state;
    const [isDogOwnerButtonClicked, setDogOwnerButtonClicked] = useState(false);
    const [isCaregiverButtonClicked, setCaregiverButtonClicked] = useState(false);
    const [activeButton, setActiveButton] = useState('');

    const [completeRegistrationUser, setCompleteRegistrationUser] = useState
        (new RegistrationModel(basicSignUpUser, USERTYPE.CUSTOMER, '', '', '', '', '', ''));

    // Function to update completeRegistrationUser
    const updateCompleteRegistrationUser = (updatedData: Partial<RegistrationModel>) => {
        setCompleteRegistrationUser(prevState => ({
            ...prevState,
            ...updatedData
        }));
    };

    const onBackButtonTextClick = useCallback(() => {
        navigate("/sign-up-page");
    }, [navigate]);

    const onDogOwnerButtonClick = useCallback(() => {
        console.log('Dog Owner Button Clicked');
        setDogOwnerButtonClicked(!isDogOwnerButtonClicked);
        setActiveButton('dogOwner');
        setCompleteRegistrationUser(prevState => {
            const updatedState = { ...prevState, userType: USERTYPE.CUSTOMER };
            console.log(`Updated completeRegistrationUser: ${JSON.stringify(updatedState)}`);
            return updatedState;
        });
    }, []);


    const onCaregiverButtonClick = useCallback(() => {
        console.log('Caregiver Button Clicked');
        setCaregiverButtonClicked(!isCaregiverButtonClicked);
        setActiveButton('caregiver');
        setCompleteRegistrationUser(prevState => {
            const updatedState = { ...prevState, userType: USERTYPE.BUSINESS };
            console.log(`Updated completeRegistrationUser: ${JSON.stringify(updatedState)}`);
            return updatedState;
        });
    }, []);


    const signupHandler = async (e?: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();

        // Spread the properties of basicSignUpModel into completeRegistrationUser
        const { basicSignUpModel, ...rest } = completeRegistrationUser;

        console.log(`The completeRegistrationUser to be sent to the Backend:\n ${JSON.stringify(completeRegistrationUser)}`);

        // Determine the API endpoint based on the user type
        const apiEndpoint = rest.userType === USERTYPE.BUSINESS ? '/auth/register-business' : '/auth/register-customer';

        // API call for the backend for saving the user
        try {
            const response = await api.post(apiEndpoint, {
                ...rest, // Spread the rest of the properties
                ...basicSignUpModel, // Spread the properties of basicSignUpModel
            });
            console.log(`Response from the backend: ${response}`);
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Error from the backend: ${error.message}`);
                console.error(`Stack trace: ${error.stack}`);
            } else {
                console.error(`Error from the backend: ${error}`);
            }
        }
    };


    const formSubmitHandler = async () => {
        console.log("Submit has been pressed");
        signupHandler();

        // Todo After this works - add api.post call to the backend for saving in DB.
    };

    return (
        <div
            className="w-full relative flex flex-col items-start justify-start tracking-[normal] leading-[normal] text-left text-37xl text-background-color-primary font-text-medium-normal">
            <Navbar woofyTextFrameWidth="unset" />
            <div
                className="self-stretch overflow-hidden flex flex-row items-start justify-start py-28 px-16 box-border bg-[url('/public/header--54@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:gap-[20px] mq450:pt-[73px] mq450:pb-[73px] mq450:box-border mq1025:gap-[40px] mq1025:pl-8 mq1025:pr-8 mq1025:box-border">
                <div
                    className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[27px] box-border gap-[24px] max-w-full">
                    <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-15xl mq450:leading-[40px] mq1025:text-26xl mq1025:leading-[54px]">
                        Register and start using Woofy
                    </h1>
                    <div className="self-stretch relative text-lg leading-[150%]">
                        Complete the forms below to provide your contact information and
                        your business details.
                    </div>
                </div>
            </div>
            <main
                className="self-stretch bg-background-color-primary flex flex-col items-center justify-center max-w-full mq750:gap-[20px]">
                <section
                    className="self-stretch flex flex-col items-center justify-center max-w-full text-center text-5xl text-text-primary font-text-medium-normal">
                    <div
                        className="self-stretch bg-background-color-primary flex flex-row items-end justify-start pt-9 px-0 pb-6 box-border max-w-full">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                            <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-bold font-inherit mq450:text-lgi mq450:leading-[27px]">
                                Welcome to Woofy!
                            </h3>
                            <div className="self-stretch relative text-base leading-[150%]">
                                Please Complete your account information and settings.
                            </div>
                        </div>
                    </div>
                    <div
                        className="self-stretch bg-background-color-primary flex flex-row items-end justify-start pt-3 px-0 pb-6 box-border max-w-full font-roboto">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                            <h3 className="m-0 self-stretch relative text-inherit leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
                                I consider myself a...
                            </h3>
                            <div
                                className="self-stretch flex flex-row items-center justify-center pt-4 px-5 pb-0 gap-[16px] mq450:flex-wrap">
                                <button
                                    className={activeButton === 'dogOwner' ? "cursor-pointer [border:none] py-2 px-5 bg-app1 rounded-11xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue" : "cursor-pointer py-1.5 px-[19px] bg-silver rounded-11xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-text-primary hover:bg-gray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray"}
                                    onClick={onDogOwnerButtonClick}
                                >
                                    <div
                                        className={activeButton === 'dogOwner' ? "relative text-base leading-[150%] font-semibold font-text-medium-normal text-background-color-primary text-left inline-block min-w-[87px]" : "relative text-base leading-[150%] font-semibold font-text-medium-normal text-text-primary text-left inline-block min-w-[87px] cursor-pointer"}
                                    >
                                        Dog Owner
                                    </div>
                                </button>

                                <button
                                    className={activeButton === 'caregiver' ? "cursor-pointer [border:none] py-2 px-5 bg-app1 rounded-11xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue" : "cursor-pointer py-1.5 px-[19px] bg-silver rounded-11xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-text-primary hover:bg-gray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray"}
                                    onClick={onCaregiverButtonClick}
                                >
                                    <div
                                        className={activeButton === 'caregiver' ? "relative text-base leading-[150%] font-semibold font-text-medium-normal text-background-color-primary text-left inline-block min-w-[76px] cursor-pointer" : "relative text-base leading-[150%] font-semibold font-text-medium-normal text-text-primary text-left inline-block min-w-[76px] cursor-pointer"}
                                    >
                                        Caregiver
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <RegistrationComponent updateCompleteRegistrationUser={updateCompleteRegistrationUser} />
                </section>
                <section
                    className="self-stretch flex flex-row items-center justify-center py-6 px-5 box-border gap-[16px] min-h-[104px] mq450:flex-wrap">
                    <button
                        className="cursor-pointer py-2 px-[18.5px] bg-[transparent] h-[42px] w-[78px] rounded-11xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-color-neutral-neutral-light hover:bg-gray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-200">
                        <div
                            className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-color-neutral-neutral-dark text-left inline-block min-w-[39px] cursor-pointer"
                            onClick={onBackButtonTextClick}
                        >
                            Back
                        </div>
                    </button>
                    <button
                        className="cursor-pointer [border:none] py-2 px-5 bg-app1 rounded-11xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue"
                        onClick={formSubmitHandler}>
                        <div
                            className="relative text-base leading-[150%] font-semibold font-text-medium-normal text-background-color-primary text-left inline-block min-w-[55px]">{`Submit `}</div>
                    </button>
                </section>
            </main>
        </div>
    );
};

export default RegistrationPage;
