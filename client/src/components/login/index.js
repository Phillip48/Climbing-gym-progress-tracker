import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../login/style.css'

const Login = () => {


    return (
        <>
            <section className="hold-everything-login">
                <section className="holds-login-interaction">
                    <div className="login-form">
                        <h1 className="login-form-text">Login:</h1>
                    </div>

                    <div className="login-info">
                        <h1 className="login-info-text ">Don't have an account?</h1>
                        <p className="login-info-subtext">
                            No worries! You can signup for free! It's quick and easy. When you do signup you'll be on the track to 
                            logging your climbing progress!
                        </p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Login;