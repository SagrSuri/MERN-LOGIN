import React from 'react'; // Import React from 'react' (useEffect is also imported here)
import './App.css'; // Import your CSS file
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom

// Import your components from their respective files
import Home from './components/Home.js';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App h-[100vh] flex justify-center items-center"> {/* Apply CSS classes */}
      <Routes basename='/'> {/* Use Routes with basename from environment */}
        <Route path="/MERN-LOGIN/" element={<Home />} /> {/* Define route for Home component */}
        <Route path="/MERN-LOGIN/signin" element={<SignIn />} /> {/* Define route for SignIn component */}
        <Route path="/MERN-LOGIN/signup" element={<SignUp />} /> {/* Define route for SignUp component */}
        <Route path="/MERN-LOGIN/forgot-password" element={<ForgotPassword />} /> {/* Define route for ForgotPassword component */}
        <Route path="/MERN-LOGIN/reset-password/:resetPasswordToken" element={<ResetPassword />} /> {/* Define route for ResetPassword component */}
        <Route path="/MERN-LOGIN/*" element={<PageNotFound />} /> {/* Define route for PageNotFound component */}
      </Routes>
    </div>
  );
}

export default App; // Export the App component as the default export
