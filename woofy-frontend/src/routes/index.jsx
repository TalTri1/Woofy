import { RouterProvider, createBrowserRouter, useNavigationType, useLocation } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import SignInPage from "../layouts/LogInAndSignUpAndRegistrationPages/SignInPage";
import SignUpPage from "../layouts/LogInAndSignUpAndRegistrationPages/SignUpPage";
import RegistrationPage from "../layouts/LogInAndSignUpAndRegistrationPages/RegistrationPage";
import BusinessDashboardPageHome from "../layouts/BusinessDashboardPages/BusinessDashboardPageHome";
import SerivcesSection from "../layouts/BusinessDashboardPages/SerivcesSection";
import UserDashboardPageHome from "../layouts/UserDashboardPages/UserDashboardPageHome";
import DogDetailsSection from "../layouts/UserDashboardPages/DogDetailsSection";
import PersonalDetailsSection from "../layouts/BusinessDashboardPages/PersonalDetailsSection";
import BusinessDetailsSection from "../layouts/BusinessDashboardPages/BusinessDetailsSection";
import { USERTYPE } from "../models/RegistrationModel";
import { UserContext } from "../provider/UserProvider";
import { useContext } from "react";


const Routes = () => {
    const { token } = useAuth();
    const { userDetails } = useContext(UserContext);

    // Define public routes accessible to all users
    const routesForPublic = [
        {
            path: "/",
            element: <SignInPage />,
        },
        {
            path: "/business-personaldetails-section",
            element: <PersonalDetailsSection />,
        },
        {
            path: "/business-personaldetails-section",
            element: <BusinessDetailsSection />,
        },

    ];

    // Define routes accessible only to authenticated users
    const routesForAuthenticatedBusinessOnly = [
        {
            path: "/",
            element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
            children: [
                {
                    path: "/",
                    element: <BusinessDashboardPageHome />,
                },
                {
                    path: "/profile",
                    element: <div>User Profile</div>,
                },
                {
                    path: "/logout",
                    element: <div>Logout</div>,
                },
                {
                    path: "/serivces-section",
                    element: <SerivcesSection />,
                },

            ],
        },
    ]

    const routesForAuthenticatedCustomerOnly = [
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/",
                    element: <UserDashboardPageHome />,
                },
                {
                    path: "/dogdetails-section",
                    element: <DogDetailsSection />,
                }

            ],
        },
    ];

    // Define routes accessible only to non-authenticated users
    const routesForNotAuthenticatedOnly = [
        {
            path: "/",
            element: <SignInPage />,
        },
        {
            path: "/login",
            element: <SignInPage />,
        },
        {
            path: "/sign-up",
            element: <SignUpPage />,
        },
        {
            path: "/registration",
            element: <RegistrationPage />,
        }
    ];

    // Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...(userDetails?.role === USERTYPE[USERTYPE.BUSINESS] ? routesForAuthenticatedBusinessOnly : []),
        ...(userDetails?.role === USERTYPE[USERTYPE.CUSTOMER] ? routesForAuthenticatedCustomerOnly : []),
        ...routesForPublic,
    ]);

    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />;
};

export default Routes;