import {RouterProvider, createBrowserRouter, useNavigationType, useLocation} from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import SignInPage from "../layouts/LogInAndSignUpAndRegistrationPages/SignInPage";
import SignUpPage from "../layouts/LogInAndSignUpAndRegistrationPages/SignUpPage";
import RegistrationPage from "../layouts/LogInAndSignUpAndRegistrationPages/RegistrationPage";
import BusinessDashboardPageHome from "../layouts/BusinessDashboardPages/BusinessDashboardPageHome";
import SerivcesSection from "../layouts/BusinessDashboardPages/SerivcesSection";

const Routes = () => {
    const { token } = useAuth();


    // Define public routes accessible to all users
    const routesForPublic = [
        {
            path: "/service",
            element: <div>Service Page</div>,
        },
        {
            path: "/about-us",
            element: <div>About Us</div>,
        },
        {
            path: "/business-dashboard",
            element: <BusinessDashboardPageHome/>,
        },
        {   path: "/serivces-section",
            element: <SerivcesSection/>,
        }

    ];

    // Define routes accessible only to authenticated users
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
            children: [
                {
                    path: "",
                    element: <BusinessDashboardPageHome/>,
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
                    path: "/business-dashboard",
                    element: <BusinessDashboardPageHome/>,
                },
                {   path: "/serivces-section",
                element: <SerivcesSection/>,
            }

            ],
        },
    ];

    // Define routes accessible only to non-authenticated users
    const routesForNotAuthenticatedOnly = [
        {
            path: "/",
            element: <SignInPage/>,
        },
        {
            path: "/login",
            element: <SignInPage/>,
        },
        {
            path: "/sign-up",
            element: <SignUpPage/>,
        },
        {
            path: "/registration",
            element: <RegistrationPage/>,
        }
    ];

    // Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />;
};

export default Routes;