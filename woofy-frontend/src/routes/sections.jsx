import { useAuth } from "../provider/AuthProvider";
import Signup from "../Pages/Signup";
import Registration from "../Pages/Registration";
import BusinessDashboard from "../Pages/BusinessDashboard";
import ServiceRegisterView from "../Sections/User/Business/ServicesRegistration/ServiceRegisterView";
import UserDashboard from "../Pages/UserDashboard";
import DogRegisterView from "../Sections/User/Customer/DogRegister/DogRegisterView";
import { USERTYPE } from "../models/RegistrationModel";
import { UserContext } from "../provider/UserProvider";
import { Suspense, useContext } from "react";
import BusinessListPage from "../layouts/Appointment/BusinessListPage";
import { Outlet, useRoutes } from "react-router-dom";
import LoginPage from "../Pages/Login";
import DashboardLayout from "../layouts/dashboard";
import NotFoundPage from "../Pages/PageNotFound";
import CustomerReviewsView from "../Sections/User/Business/Reviews/CustomerReviewsView";
import UserProfileView from "../Sections/User/UserProfile/UserProfileView";
import ServicesDetails from "../Sections/User/Business/ServicesDetails";
import UpComingBookings from "../Sections/User/UpComingBookings/UpcomingBookingsView";
import PastBookingsSectionCont from "../Sections/User/PastBookings/PastBookingsView";
import MapPage from "../layouts/Map/MapPage";
import BusinessProfilePage from "../Pages/BusinessProfilePage";

const Router = () => {
    const { token } = useAuth();
    const { userDetails } = useContext(UserContext);


    // Define public routes accessible to all users
    const routesForPublic = [
        {
            path: "/",
            element: <LoginPage />,
        },
        {
            path: "business-list",
            element: <BusinessListPage />,
        },
        {
            path: "/map",
            element: <MapPage />,
        },
        {
            path: "404",
            element: <NotFoundPage />,
        },
        {
            path: "*",
            element: <NotFoundPage />,
        },
        {
            path: "/business-profile/:id",
            element: <BusinessProfilePage />,
        },
        
        
    ];

    // Define routes accessible only to authenticated users
    const routesForAuthenticatedBusinessOnly = [
        {
            path: "/",
            element:(
                    <DashboardLayout>
                        <Suspense>
                            <Outlet />
                        </Suspense>
                    </DashboardLayout>
            ), // Wrap the component in ProtectedRoute
            children: [
                {
                    path: "/",
                    element: <BusinessDashboard />,
                },
                {
                    path: "/service-register",
                    element: <ServiceRegisterView />,
                },
                {
                    path: "/services",
                    element: <ServicesDetails />,
                },
                {
                    path: "/reviews",
                    element: <CustomerReviewsView />,
                },
                {
                    path: "/profile",
                    element: <UserProfileView />,
                },


            ],
        },
    ]

    const routesForAuthenticatedCustomerOnly = [
        {
            path: "/",
            element: (
                <DashboardLayout>
                <Suspense>
                    <Outlet />
                </Suspense>
            </DashboardLayout>),
            children: [
                {
                    path: "/",
                    element: <UserDashboard />,
                },
                {
                    path: "/bookings",
                    element: <UpComingBookings />,
                },
                {
                    path: "/dog-register",
                    element: <DogRegisterView />,
                },                {
                    path: "/reviews",
                    element: <CustomerReviewsView />,
                },
                {
                    path: "/profile",
                    element: <UserProfileView />,
                },                {
                    path: "/past-bookings",
                    element: <PastBookingsSectionCont />,
                },


            ],
        },
    ];

    // Define routes accessible only to non-authenticated users
    const routesForNotAuthenticatedOnly = [
        {
            path: "/",
            element: <LoginPage />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/sign-up",
            element: <Signup />,
        },
        {
            path: "/registration",
            element: <Registration />,
        }
    ];

    // Combine and conditionally include routes based on authentication status
    const routing = useRoutes([
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...(userDetails?.role === USERTYPE[USERTYPE.BUSINESS] ? routesForAuthenticatedBusinessOnly : []),
        ...(userDetails?.role === USERTYPE[USERTYPE.CUSTOMER] ? routesForAuthenticatedCustomerOnly : []),
        ...routesForPublic,
    ]);

    // Return the routing configuration
    return routing;
};

export default Router;