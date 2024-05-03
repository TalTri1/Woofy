import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignInPage from "./layouts/LogInAndSignUpAndRegistrationPages/SignInPage";
import SignUpPage from "./layouts/LogInAndSignUpAndRegistrationPages/SignUpPage";
import RegistrationPage from "./layouts/LogInAndSignUpAndRegistrationPages/RegistrationPage";
import BusinessDashboardPageHome from "./layouts/BusinessDashboardPages/BusinessDashboardPageHome";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/business-dashboard-page-home-section":
        title = "";
        metaDescription = "";
        break;
      case "/registration-page":
        title = "";
        metaDescription = "";
        break;

    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route
        path="/business-dashboard-page-home-section"
        element={<BusinessDashboardPageHome />}
      />
      <Route
        path="/registration-page"
        element={<RegistrationPage />}
      />
    </Routes>
  );
}
export default App;
