import React, { createContext, useState, useEffect, useMemo, useContext } from 'react';
import api from '../api/api';
import { useAuth } from './AuthProvider';

export const UserContext = createContext(); // Add export here

const UserProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState(null);
    const { isLoggedIn, token } = useAuth();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await api.get('/user')
                setUserDetails(response.data);
            } catch (error) {
                console.error("Failed to fetch user details: ", error);
            }
        };

        if (isLoggedIn) {
            fetchUserDetails();
        }
    }, [isLoggedIn, token]);

    const contextValue = useMemo(() => ({ userDetails, setUserDetails }), [userDetails, isLoggedIn]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider };
