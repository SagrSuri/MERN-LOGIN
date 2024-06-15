import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App h-screen flex justify-center items-center">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:resetPasswordToken" element={<ResetPassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
