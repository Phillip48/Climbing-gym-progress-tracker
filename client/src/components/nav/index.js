import React from "react";
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

                    <div className="holds-page-options">
                        <a href='/' className="navbar-a-element"><h4 style={{ textAlign: 'center' }}>Test</h4></a>
                        <div className="div-padding-1"></div>
                        <a href='/' className="navbar-a-element"><h4 style={{ textAlign: 'center' }}>Test</h4></a>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Nav;