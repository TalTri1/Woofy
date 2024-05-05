import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider";
import api from "../../api/api";
import { toast } from "react-toastify";
import BasicSignInModel from "../../models/UserModels/BasicSignInModel";
import { getImage } from "../LogInAndSignUpAndRegistrationPages/component/imageComponent";

const NavbarAfterLogin: FunctionComponent = () => {

  const { userDetails } = useContext(UserContext);
  const [imageSrc, setImageSrc] = useState("/user-avatar-image@2x.png");

  useEffect(() => {
    const fetchImage = async () => {
      if (userDetails?.profilePhotoID) {
        const image = await getImage(userDetails.profilePhotoID);
        setImageSrc(image || "/user-avatar-image@2x.png");
      }
    };

    fetchImage();
  }, [userDetails]);

  return (
    <nav className="m-0 self-stretch bg-text-alternate flex flex-row items-start justify-start py-4 px-16 box-border sticky top-[0] z-[99] max-w-full mq1050:hidden mq750:pl-8 mq750:pr-8 mq750:box-border">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
        <div className="w-[168px] flex flex-row items-start justify-start">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-10 flex-1 flex flex-row items-center justify-between relative">
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
                  <h2 className="m-0 relative text-9xl leading-[36px] font-bold font-volkhov text-text-primary text-left inline-block min-w-[91px] whitespace-nowrap mq450:text-3xl mq450:leading-[28px]">
                    Woofy
                  </h2>
                </div>
              </div>
            </button>
          </Link>
        </div>
        <div className="w-[605px] flex flex-row items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[32px] mq450:gap-[16px] mq1050:hidden">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left inline-block min-w-[45px]">
                Home
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left inline-block min-w-[66px]">
                Discover
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[150%] font-semibold font-text-medium-normal text-text-primary text-left inline-block whitespace-nowrap">
                Become a Caregiver
              </button>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <button
              className="cursor-pointer [border:none] p-2 bg-[transparent] flex flex-row items-center justify-start"
              id="Notification Button"
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon--bell.svg"
              />
            </button>
            <img
              className="h-10 w-10 relative object-cover min-h-[40px]"
              loading="lazy"
              alt=""
              src={imageSrc}
            />
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[150%] font-text-small-normal text-text-primary text-left inline-block min-w-[111px] whitespace-nowrap"
                id="Settings Button"
              >
                {userDetails?.firstName + " " + userDetails?.lastName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAfterLogin;
