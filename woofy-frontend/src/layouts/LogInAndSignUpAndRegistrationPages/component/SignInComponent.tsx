import React, { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import BasicSignInModel from "../../../models/UserModels/BasicSignInModel";
import api from "../../../api/api";
import {useAuth} from "../../../provider/AuthProvider";


const SignInComponent: FunctionComponent = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const onSignUpLinkClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

  const [basicSignInUser, setUserDetails] = useState(
      new BasicSignInModel('', ''));

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const signupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`basic signin model has been created:\n ${JSON.stringify(basicSignInUser)}`);

    // Make the Axios request
    try {
      const res = await api.post("auth/login", basicSignInUser);
      console.log(res.data);
      setToken(res.data.access_token);
      navigate("/business-dashboard", { replace: true });
    } catch (error) {
      console.error("Error occurred while registering user: ", error);
    }
  };


  return (
    <div className="w-[480px] rounded-mini bg-background-color-primary flex flex-col items-start justify-start p-12 box-border gap-[24px] max-w-full text-center text-21xl text-text-primary font-text-medium-normal mq700:py-[31px] mq700:px-6 mq700:box-border">
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[10px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-5xl mq450:leading-[29px] mq900:text-13xl mq900:leading-[38px]">
          Sign in
        </h1>
        <div className="self-stretch relative text-base leading-[150%]">
          Welcome back! Sign in here.
        </div>
      </div>
      <form onSubmit={signupHandler}
          className="m-0 self-stretch h-[355px] flex flex-col items-start justify-start gap-[16px] max-w-full mq450:h-auto">
        <div className="self-stretch h-[50px] bg-background-color-primary box-border flex flex-row items-start justify-start p-3 max-w-full border-[1px] border-solid border-color-neutral-neutral-lighter">
          <input
            className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[216px] max-w-full p-0"
            placeholder="Email"
            type="email"
            name="email"
            value={basicSignInUser.email}
            onChange={changeHandler}
            required={true}
          />
        </div>
        <div className="self-stretch bg-background-color-primary box-border flex flex-row flex-wrap items-start justify-start p-3 gap-[8px] min-h-[50px] max-w-full shrink-0 border-[1px] border-solid border-color-neutral-neutral-lighter">
          <input
            className="w-[calc(100%_-_48px)] [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[150px] max-w-[calc(100%_-_32px)] p-0"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={changeHandler}
            value={basicSignInUser.password}
            pattern=".{8,}"
            title="Password must be at least 8 characters long"
            required={true}
          />
          <img
          className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative overflow-hidden shrink-0"
          id="Show Password Button"
          alt=""
          src="/icon--show.svg"
          onClick={togglePasswordVisibility}
          />
        </div>
        <button className="cursor-pointer [border:none] py-3 px-5 bg-app1 self-stretch rounded-11xl flex flex-row items-start justify-center whitespace-nowrap shrink-0 hover:bg-cornflowerblue">
          <div className="relative text-lg leading-[150%] font-semibold font-text-medium-normal text-background-color-primary text-left inline-block min-w-[59px]">
            Sign in
          </div>
        </button>
        <div className="self-stretch h-8 flex flex-row items-start justify-start pt-4 px-0 pb-[15px] box-border max-w-full">
          <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1px] border-solid border-color-neutral-neutral-light" />
        </div>
        <button className="cursor-pointer py-3 px-5 bg-[transparent] self-stretch h-[50px] rounded-11xl box-border flex flex-row items-start justify-center gap-[12px] border-[1px] border-solid border-color-neutral-neutral">
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <img
              className="w-[18px] h-[18px] relative"
              alt=""
              src="/icon--google.svg"
            />
          </div>
          <div className="relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
            Sign in with Google
          </div>
        </button>
        <button
          className="cursor-pointer py-3 px-5 bg-[transparent] self-stretch h-[50px] rounded-11xl box-border flex flex-row items-start justify-center gap-[12px] border-[1px] border-solid border-color-neutral-neutral"
          id="Facebook Button"
        >
          <div className="flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0">
            <div className="w-5 h-[20.3px] relative">
              <img
                className="absolute h-[18.72%] w-[19.5%] top-[42.36%] right-[36%] bottom-[38.92%] left-[44.5%] max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/shape.svg"
              />
              <img
                className="absolute h-[16.26%] w-[31.5%] top-[49.75%] right-[42%] bottom-[33.99%] left-[26.5%] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src="/shape-1.svg"
              />
              <img
                className="absolute h-[17.73%] w-[9%] top-[36.95%] right-[67%] bottom-[45.32%] left-[24%] max-w-full overflow-hidden max-h-full z-[2]"
                alt=""
                src="/shape-2.svg"
              />
              <img
                className="absolute h-[16.26%] w-[31.5%] top-[26.11%] right-[42%] bottom-[57.64%] left-[26.5%] max-w-full overflow-hidden max-h-full z-[3]"
                alt=""
                src="/shape-3.svg"
              />
              <img
                className="absolute h-[39.9%] w-[40.5%] top-[26.11%] right-[35.5%] bottom-[33.99%] left-[24%] max-w-full overflow-hidden max-h-full z-[4]"
                alt=""
              />
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[5]"
                alt=""
                src="/facebook-sign-image@2x.png"
              />
            </div>
          </div>
          <div className="relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
            Sign in with Facebook
          </div>
        </button>
      </form>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[55px] pl-[55.5px] text-lg mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[35px] pl-[35.5px]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[150%] font-bold font-text-medium-normal text-app1 text-center inline-block"
              id="Forgot Password Button"
            >
              Forgot your password?
            </button>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[5px] mq450:flex-wrap">
            <div className="relative leading-[150%]">
              Don't have an account?
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[150%] font-extrabold font-text-medium-normal text-app1 text-center inline-block min-w-[69px] whitespace-nowrap"
              id="Sign up Link Button"
              onClick={onSignUpLinkClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
