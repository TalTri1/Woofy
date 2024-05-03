import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBarPage/NavbarPage";
import SignUpModal from "./component/SignUpComponent";

const SignUpPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSignInButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="w-full relative flex flex-col items-start justify-start tracking-[normal] leading-[normal]">
      <Navbar
        woofyTextFrameWidth="unset"
        onSignInButtonClick={onSignInButtonClick}
      />
      <main className="self-stretch overflow-hidden flex flex-row items-start justify-center py-[95.5px] px-5 box-border bg-[url('/public/sign-in--modal--2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-10 mq450:pb-10 mq450:box-border mq900:pt-[62px] mq900:pb-[62px] mq900:box-border">
        <SignUpModal />
      </main>
    </div>
  );
};

export default SignUpPage;
