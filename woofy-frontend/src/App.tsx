import React, { useEffect } from 'react';
import AuthProvider from "./provider/AuthProvider";
import Routes from "./routes";

function App() {
  // This is use to clear the local storage when the app is loaded - uncomment if you want to clear the local storage
  // useEffect(() => {
  //   localStorage.clear(); // remove all items
  // }, []);

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;