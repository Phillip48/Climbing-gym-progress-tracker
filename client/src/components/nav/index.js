import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../nav/style.css'
import ClimbingLogo from '../../assets/logo/The Climbing Wall-logos_transparent.png';

const Nav = () => {


    return (
        <>
            <header className="hold-everything-navbar">
                <section className="header-section">
                    <div className="holds-climbinglogo">
                        <a href="/"><img className="climbinglogo" src={ClimbingLogo} alt='logo'></img></a>
                    </div>
                    {/* 7/4 - IDK if this auth will work to verify user is logged in */}
                    {Auth.loggedIn() ? (
                        // logged in
                        <div className="holds-page-options">
                            <Link to='/profile'><button className="navbar-button">Profile</button></Link>
                            <div className="div-padding-verysmall"></div>
                            <Link to='/logs'><button className="navbar-button">Logs</button></Link>
                        </div>
                    ) : (
                        // not logged in
                        <div className="holds-page-options">
                            <Link to='/signup'><button className="navbar-button">Sign Up</button></Link>
                            <div className="div-padding-verysmall"></div>
                            <Link to='/login'><button className="navbar-button">Log In</button></Link>
                        </div>
                    )}
                </section>
            </header>
            {/* <section className="nav-undernav-holds-banner">
                <div className="nav-undernav-banner">
                    <p className="undernav-text"><b>The Climbing Wall</b> is free to use for all ages. Track your progress and see how you have improved while climbing!</p>
                </div>
            </section> */}
        </>
    )
}

export default Nav;