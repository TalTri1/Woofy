import {createContext, useContext, useEffect, useMemo, useState} from "react";
import axios from "axios";
import api from "../api/api";
import {toast} from "react-toastify";
import {UserContext} from "./UserProvider";


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"));
    const {setIsLoggedIn} = useContext(UserContext);


    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem("token", token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("token");
        }
    }, [token]);

    const login = async (basicSignInUser) => {
        try {
            const res = await api.post("auth/login", basicSignInUser);
            setToken(res.data.access_token);
            setRefreshToken(res.data.refresh_token);
            setIsLoggedIn(true);
        } catch (error) {
            console.error("Error occurred while registering user: ", error);
            // @ts-ignore
            toast.error(error.response.data || "An error occurred");
        }
    };

    // Memoized value of the authentication context
    const contextValue = useMemo(
        () => ({
            token,
            setToken,
            refreshToken,
            setRefreshToken,
            login,
        }),
        [token, refreshToken]
    );

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;