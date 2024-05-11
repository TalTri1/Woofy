import React, {createContext, useState, useEffect, useMemo, useContext} from 'react';
import api from '../api/api';
import {useAuth} from "./AuthProvider"; // adjust the path according to your project structure

export const UserContext = createContext(); // Add export here

const UserProvider = ({children}) => {
    const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem('userDetails')));
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await api.get('/user');
                setUserDetails(response.data);
                // Store the response data in local storage
                localStorage.setItem('userDetails', JSON.stringify(response.data));
            } catch (error) {
                console.error("Failed to fetch user details: ", error);
            }
        };

        if (isLoggedIn) {
            fetchUserDetails();
        }
    }, [isLoggedIn]);

    const contextValue = useMemo(() => ({userDetails, setUserDetails,}), [userDetails, isLoggedIn]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

export {UserProvider};