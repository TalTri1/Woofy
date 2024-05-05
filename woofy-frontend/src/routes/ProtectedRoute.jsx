import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import {useContext} from "react";
import {UserContext} from "../provider/UserProvider";
import {USERTYPE} from "../models/RegistrationModel";

export const ProtectedRoute = () => {
    const { token } = useAuth();
    const { userDetails } = useContext(UserContext);

    // Check if the user is authenticated
    if (!token) {
        // If not authenticated, redirect to the login page
        return <Navigate to="/login" />;
    }

    // If authenticated, render the child routes
    return <Outlet />;
};