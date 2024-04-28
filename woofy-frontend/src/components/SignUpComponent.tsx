import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SignUpModal = () => {

    const navigate = useNavigate();

    const onSignUpLinkClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [user, setUserDetails] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserDetails({ ...user, [name]: value, });
    };

    const signupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Make the Axios request
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/check-valid-email", user);
            console.log(res.data);
            navigate("/user-registration-page", { state: { email: user.email, password: user.password } });
        } catch (error) {
            console.error("Error occurred while registering user: ", error);
        }
    };

    return (
        <div
            className="w-[480px] rounded-mini bg-background-color-primary flex flex-col items-start justify-start pt-12 px-12 pb-[76px] box-border gap-[30px] max-w-full text-center text-21xl text-text-primary font-text-medium-normal mq700:gap-[15px] mq700:pl-6 mq700:pr-6 mq700:box-border mq900:pt-[31px] mq900:pb-[49px] mq900:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit whitespace-nowrap mq450:text-5xl mq450:leading-[29px] mq900:text-13xl mq900:leading-[38px]">
                    Get Started
                </h1>
                <div className="self-stretch relative text-base leading-[150%]">
                    Create an Account and Join Us
                </div>
            </div>
            <form onSubmit={signupHandler}
                className="m-0 self-stretch h-[416px] flex flex-col items-start justify-start gap-[15.5px] max-w-full mq450:h-auto">
                <div
                    className="self-stretch h-[50px] bg-background-color-primary box-border flex flex-row items-start justify-start p-3 max-w-full shrink-0 border-[1px] border-solid border-color-neutral-neutral-lighter">
                    <input
                        className="w-full [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[216px] max-w-full p-0"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={changeHandler}
                        required={true}
                    />
                </div>
                <div
                    className="self-stretch h-[50px] bg-background-color-primary box-border flex flex-row items-start justify-start p-3 gap-[8px] max-w-full shrink-0 border-[1px] border-solid border-color-neutral-neutral-lighter">
                    <input
                        className="w-[calc(100%_-_48px)] [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[150px] max-w-[calc(100%_-_32px)] p-0"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        onChange={changeHandler}
                        value={user.password}
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
                <div
                    className="self-stretch bg-background-color-primary box-border flex flex-row flex-wrap items-start justify-start p-3 gap-[8px] min-h-[50px] max-w-full shrink-0 border-[1px] border-solid border-color-neutral-neutral-lighter">
                    <input
                        className="w-[calc(100%_-_48px)] [border:none] [outline:none] font-text-medium-normal text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block min-w-[150px] max-w-[calc(100%_-_32px)] p-0"
                        placeholder="Password Confirmation"
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        onChange={changeHandler}
                        value={user.confirmPassword}
                        pattern=".{8,}"
                        title="Password must be at least 8 characters long"
                        required={true}
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e.target.value !== user.password) {
                                e.target.setCustomValidity("Passwords do not match");
                            } else {
                                e.target.setCustomValidity("");
                            }
                        }}
                    />
                    <img
                        className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-6 relative overflow-hidden shrink-0"
                        id="Show Password Confirmation Button"
                        alt=""
                        src="/icon--show.svg"
                        onClick={togglePasswordVisibility}
                    />
                </div>
                <button
                    className="cursor-pointer py-3 px-5 bg-app1 self-stretch h-[53px] rounded-11xl box-border flex flex-row items-start justify-center whitespace-nowrap shrink-0 border-[1px] border-solid border-color-neutral-neutral-lighter hover:bg-cornflowerblue hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgray">
                    <div
                        className="relative text-lg leading-[150%] font-semibold font-text-medium-normal text-background-color-primary text-left inline-block min-w-[66px] cursor-pointer"
                    >
                        Sign up
                    </div>
                </button>
                <div
                    className="self-stretch h-8 flex flex-row items-start justify-start pt-4 px-0 pb-[15px] box-border max-w-full shrink-0">
                    <div
                        className="self-stretch flex-1 relative box-border max-w-full border-t-[1px] border-solid border-color-neutral-neutral-light" />
                </div>
                <button
                    className="cursor-pointer py-3 px-5 bg-[transparent] self-stretch h-[50px] rounded-11xl box-border flex flex-row items-start justify-center gap-[12px] shrink-0 border-[1px] border-solid border-color-neutral-neutral-light">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <img
                            className="w-[18px] h-[18px] relative"
                            alt=""
                            src="/icon--google.svg"
                        />
                    </div>
                    <div
                        className="relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                        Sign up with Google
                    </div>
                </button>
                <button
                    className="cursor-pointer py-3 px-5 bg-[transparent] self-stretch h-[50px] rounded-11xl box-border flex flex-row items-start justify-center gap-[12px] shrink-0 border-[1px] border-solid border-color-neutral-neutral-light">
                    <div className="flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0">
                        <div className="w-5 h-[20.3px] relative">
                            <img
                                className="absolute h-[18.72%] w-[19.5%] top-[42.36%] right-[36%] bottom-[38.92%] left-[44.5%] max-w-full overflow-hidden max-h-full"
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
                    <div
                        className="relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                        Sign up with Facebook
                    </div>
                </button>
            </form>
            <div
                className="flex flex-row items-start justify-start py-0 pr-[49px] pl-[49.5px] text-lg mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex flex-row items-start justify-start gap-[5px] mq450:flex-wrap">
                    <div className="relative leading-[150%]">
                        Already have an account?
                    </div>
                    <button
                        className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[150%] font-extrabold font-text-medium-normal text-app1 text-center inline-block min-w-[61px]"
                        id="Sign in Link Button"
                        onClick={onSignUpLinkClick}
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpModal;
