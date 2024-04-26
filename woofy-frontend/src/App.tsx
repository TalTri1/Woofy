import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import BusinessRegistrationPage from "./pages/BusinessRegistrationPage";
import UserRegistrationPage from "./pages/UserRegistrationPage";

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
      case "/business-registration-page":
        title = "";
        metaDescription = "";
        break;
      case "/user-registration-page":
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
        path="/business-registration-page"
        element={<BusinessRegistrationPage />}
      />
      <Route
        path="/user-registration-page"
        element={<UserRegistrationPage />}
      />
    </Routes>
  );
}
export default App;
