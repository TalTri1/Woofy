import {FunctionComponent, useCallback, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../provider/AuthProvider";
import {UserContext} from "../../../provider/UserProvider";
import api from "../../../api/api";
import {toast} from "react-toastify";

const UserDashboardMenuList: FunctionComponent = () => {

    const navigate = useNavigate();
    const {logout, setIsLoggedIn} = useAuth();

    const onUserDetailsButtonClick = useCallback(() => {
        // Please sync "User Dashboard Page / User Details" to the project
    }, []);

    const onLogoutButtonClick = useCallback(async () => {
        logout()
        setIsLoggedIn(false)
        try {
            const res = await api.post("auth/logout",);
        } catch (error) {
            toast.error("An error occurred while logging out. Please try again.");
        }
    }, []);

    return (
        <div className="self-stretch flex flex-col items-start justify-start pt-6 px-4 pb-0">
            <button
                className="cursor-pointer [border:none] p-2 bg-text-alternate self-stretch flex flex-row items-center justify-start">
                    <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/icon--home1.svg"
                    />
                    <div
                        className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                        Home
                    </div>
            </button>
            <button
                className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-start"

            >
                <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                    <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        loading="lazy"
                        alt=""
                        src="/icon--briefcase.svg "
                    />
                    <div
                        className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                        Bookings
                    </div>
                </div>
            </button>
            <div className="self-stretch flex flex-col items-start justify-start">

            </div>
            <button
                className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                    <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        loading="lazy"
                        alt=""
                        src="/icon--chat.svg"
                    />
                    <div
                        className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                        Messages
                    </div>
                    <div className="rounded-31xl flex flex-row items-start justify-start py-0 px-2">
                        <b className="relative text-sm leading-[150%] inline-block font-text-medium-normal text-text-primary text-left min-w-[10px]">
                            0
                        </b>
                    </div>
                </div>
            </button>
            <button
                className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                    <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        loading="lazy"
                        alt=""
                        src="/icon--star.svg"
                    />
                    <div
                        className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                        Reviews
                    </div>
                </div>
            </button>
            <div className="self-stretch flex flex-col items-start justify-start">
                <button
                    className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                        <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            alt=""
                            src="/icon--usercircle.svg"
                        />
                        <div
                            className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                            Manage Account
                        </div>
                    </div>
                    <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/booking-dashboard-chevron-down@2x.png"
                    />
                </button>
                <button
                    className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                        <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            loading="lazy"
                            alt=""
                            src="/icon--usercircle.svg"
                        />
                        <div
                            className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                            Manage Account
                        </div>
                    </div>
                    <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 object-contain"
                        loading="lazy"
                        alt=""
                        src="/booking-dashboard-chevron-down-1.svg"
                    />
                </button>
                <button
                    className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-end">
                    <div className="w-[228px] flex flex-row items-start justify-start gap-[12px]">
                        <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            loading="lazy"
                            alt=""
                            src="/icon--idcard.svg"
                        />
                        <div
                            className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                            Personal Details
                        </div>
                    </div>
                </button>
                <button
                    className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-end"
                    onClick={onUserDetailsButtonClick}
                >
                    <div className="w-[228px] flex flex-row items-start justify-start gap-[12px]">
                        <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                            loading="lazy"
                            alt=""
                            src="icon--dog.svg"

                        />
                        <div
                            className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                            Dog Details
                        </div>
                    </div>
                </button>

                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-4 pb-6 mq450:gap-[16px]">
                    <div className="self-stretch flex flex-col items-start justify-start pt-20 px-0 pb-0">
                        <button
                            className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-start">
                            <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                    loading="lazy"
                                    alt=""
                                    src="/buttoniconhelpcircle.svg"
                                />
                                <div
                                    className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                                    Support
                                </div>
                            </div>
                        </button>
                        <button
                            className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-start">
                            <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                    loading="lazy"
                                    alt=""
                                    src="./icon--cog.svg"
                                />
                                <div
                                    className="flex-1 relative text-base leading-[150%] font-text-medium-normal text-text-primary text-left">
                                    Settings
                                </div>
                            </div>
                        </button>
                        <button
                            className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch flex flex-row items-center justify-start">
                            <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                    alt=""
                                    src="/icon--log-out.svg"
                                />
                                <div
                                    className="flex-1 relative text-base leading-[150%] font-text-regular-normal text-text-primary text-left"
                                    onClick={onLogoutButtonClick}
                                >
                                    Log out
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboardMenuList;
