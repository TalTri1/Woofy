import {createContext, useContext, useEffect, useMemo, useState} from "react";
import axios from "axios";
import api from "../api/api";
import {toast} from "react-toastify";
import {useRouter} from "../routes/hooks";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const router = useRouter();

    const login = async (basicSignInUser) => {
        try {
            const res = await api.post("auth/login", basicSignInUser);
            setToken(res.data.access_token);
            localStorage.setItem("token", res.data.access_token);
            localStorage.setItem("refreshToken", res.data.refresh_token);
        } catch (error) {
            console.error("Error occurred while registering user: ", error);
            // @ts-ignore
            toast.error(error.response.data || "An error occurred");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userDetails");
        setToken(null);
        router.push("/");
        router.reload();
    }

    // Memoized value of the authentication context
    const contextValue = useMemo(
        () => ({
            login,
            logout,
            token,
            setToken,
        }),
        [token,setToken]
    );

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;