import React, { createContext, useState, useEffect, useMemo } from 'react';
import api from '../api/api'; // adjust the path according to your project structure

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await api.get('/user');
                setUserDetails(response.data);
            } catch (error) {
                console.error("Failed to fetch user details: ", error);
            }
        };

        if (isLoggedIn) {
            fetchUserDetails();
        }
    }, [isLoggedIn]);

    const contextValue = useMemo(() => ({ userDetails, setUserDetails, setIsLoggedIn }), [userDetails, isLoggedIn]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };