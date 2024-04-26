import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

const SignInPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBecomeACaregiverClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const onJoinNowButtonClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className="w-full relative flex flex-col items-start justify-start tracking-[normal] leading-[normal]">
      <Navbar
        onBecomeACaregiverClick={onBecomeACaregiverClick}
        onJoinNowButtonClick={onJoinNowButtonClick}
      />
      <main className="self-stretch overflow-hidden flex flex-row items-start justify-center py-[120.5px] px-5 box-border bg-[url('/public/sign-in--modal--2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq900:pt-[78px] mq900:pb-[78px] mq900:box-border">
        <Modal />
      </main>
    </div>
  );
};

export default SignInPage;
