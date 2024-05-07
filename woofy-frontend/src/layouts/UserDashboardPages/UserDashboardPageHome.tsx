import { FunctionComponent, useContext } from "react";
import NavbarAfterLogin from "../NavBarPage/NavbarAfterLogin";
import UserDashboardMenuList from "../UserDashboardPages/components/UserDashboardMenuList";
import RegisterYourDogCTA from "../UserDashboardPages/components/RegisterYourDogCTA";
import UpcomingBookingsSection from "../UserDashboardPages/components/UpcomingBookingsSection";
import PastBookingsSection from "./components/PastBookingsSection";
import { UserContext } from "../../provider/UserProvider";



const UserDashboardPageHome: FunctionComponent = () => {

  const { userDetails } = useContext(UserContext); // The user details

  return (
    <div className="w-full relative bg-text-alternate overflow-hidden flex flex-col items-start justify-start tracking-[normal] leading-[normal]">
      <NavbarAfterLogin />
      <main className="self-stretch flex flex-row items-start justify-start max-w-full shrink-0 text-center text-29xl text-white font-text-medium-normal mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
        <nav className="m-0 w-[312px] bg-text-alternate overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[3204.8px] box-border lg:pb-[1354px] lg:box-border mq1050:hidden mq1050:pb-[880px] mq1050:box-border mq750:pb-[572px] mq750:box-border">
          <UserDashboardMenuList />

        </nav>
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
          <UpcomingBookingsSection />




        </div>
      </main>
    </div>
  );
};

export default UserDashboardPageHome;
