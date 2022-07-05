import React from "react";
// import Auth from '../../utils/auth';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../login/style.css'

const Login = () => {
    // // state for login
    // const [formState, setFormState] = useState({ email: '', password: '' });
    // //   const [login, { error, data }] = useMutation(LOGIN);

    // // update state based on form input changes
    // const handleChange = (event) => {
    //     const { name, value } = event.target;

    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    // // submit form
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(formState);
    //     try {
    //         const { data } = await Login({
    //             variables: { ...formState },
    //         });

    //         Auth.login(data.login.token);
    //     } catch (e) {
    //         console.error(e);
    //     }

    //     // clear form values
    //     setFormState({
    //         email: '',
    //         password: '',
    //     });
    // };

    return (
        <>
            <section className="hold-everything-login">
                <section className="holds-login-interaction">
                    <div className="login-form">
                        <h1 className="login-form-text">Login:</h1>

                        <form className="actual-login-form">
                            <label className="form-labels-login" for="exampleEmail">
                                Email
                            </label>
                            <input
                                id="exampleEmail"
                                name="email"
                                placeholder="Email Address"
                                type="email"
                                // onChange={handleChange}
                            />

                            <label className="form-labels-login" for="examplePassword">
                                Password
                            </label>
                            <input
                                id="examplePassword"
                                name="password"
                                placeholder="Password"
                                type="password"
                                // onChange={handleChange}
                            />
                            <button className="login-button">Submit</button>
                        </form>
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