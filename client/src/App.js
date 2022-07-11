import React from 'react';
// import logo from './logo.svg';
import './App.css';

// Needed for react router
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Component imports
import Nav from '../src/components/nav/index.js';
// import Footer from '../src/components/footer/index.js';

// Page imports
import HomePage from '../src/pages/Home';
import SignupPage from '../src/pages/Signup';
import LoginPage from '../src/pages/Login';
import ProfilePage from '../src/pages/Profile';

function App() {
  return (
    <BrowserRouter>
      {/* The Navbar is added here to be added to every page that renders */}
      <Nav />
      <main>
        {/* Routing to render different pages when needed */}
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/signup"
            element={<SignupPage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
        </Routes>
        {/* Renders the footer to the bottom of each page */}
        {/* <Footer /> */}
      </main>

    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
