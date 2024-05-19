import React, {createContext, useState, useEffect, useMemo, useContext} from 'react';
import api from '../api/api';
import {useAuth} from "./AuthProvider";

export const UserContext = createContext(); // Add export here

const UserProvider = ({children}) => {
    const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem('userDetails')));
    const {token} = useAuth();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await api.get('/user');
                setUserDetails(response.data);
                console.log("User details: ", userDetails)
                // Store the response data in local storage
                localStorage.setItem('userDetails', JSON.stringify(response.data));
            } catch (error) {
                console.error("Failed to fetch user details: ", error);
            }
        };

        if (token) {
            fetchUserDetails();
        }
    }, [token]);

    const contextValue = useMemo(() => ({userDetails, setUserDetails,}), [userDetails]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

export {UserProvider};