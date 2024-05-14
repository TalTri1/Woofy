import { Helmet } from 'react-helmet-async';
import SignInComponent from "../Sections/LoginAndRegister/LoginView";



// ----------------------------------------------------------------------

export default function LoginPage() {
    return (
        <>
            <Helmet>
                <title> Login | Join Woofy </title>
            </Helmet>

            <SignInComponent />
        </>
    );
}
