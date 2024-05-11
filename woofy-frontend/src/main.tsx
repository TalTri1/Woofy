import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {UserProvider} from "./provider/UserProvider";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <UserProvider>
                <App/>
                <ToastContainer/>
            </UserProvider>
        </AuthProvider>
    </React.StrictMode>,
)