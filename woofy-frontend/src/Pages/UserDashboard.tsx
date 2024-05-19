import { FunctionComponent, useContext, useState } from "react";
import RegisterYourDogCTA from "../Sections/User/Customer/DogRegister/RegisterYourDogCTA";
import { UserContext } from "../provider/UserProvider";
import BusinessListComponent from "../layouts/Appointment/components/BusinessListComponent";


const UserDashboard: FunctionComponent = () => {

  const { userDetails } = useContext(UserContext); // The user details

  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start tracking-[normal] leading-[normal]">
      <main className="self-stretch flex flex-row items-start justify-start max-w-full shrink-0 text-center text-29xl text-white font-text-medium-normal mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
        <div className="flex-1 flex flex-col items-start justify-start max-w-[calc(100%_-_312px)] mq1050:max-w-full">
          <div className="self-stretch bg-app1 overflow-hidden flex flex-col items-center justify-start pt-[90px] px-5 pb-[60px] box-border max-w-full mq450:gap-[20px] mq1050:gap-[40px]">
            <div className="flex flex-row items-center justify-center gap-[5px] max-w-full mq750:flex-wrap">
              <h1 className="relative text-[48px] leading-[120%] font-inter text-white text-center">
                Welcome Back,
              </h1>
              <h1 className="relative text-[48px] leading-[120%] font-inter text-white text-center">
                {userDetails?.firstName + " " + userDetails?.lastName}
              </h1>
            </div>
          </div>

          <RegisterYourDogCTA />
          <BusinessListComponent />




        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
