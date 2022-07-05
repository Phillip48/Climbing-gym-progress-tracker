import React from "react";
import { CardTitle, Label, Input, Row, Col, FormGroup, Form } from 'reactstrap';
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
                        <div className="formBody">
                            <CardTitle tag="h3" id="login">
                                Login
                            </CardTitle>
                            <Form className="actual-login-form">
                                <Row>
                                    <div className="inputRow">
                                        <Col md={12}>
                                            <FormGroup >
                                                <Label className="labels" for="exampleEmail">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="exampleEmail"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    type="email"
                                                // onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={12}>
                                            <FormGroup>
                                                <Label className="labels" for="examplePassword">
                                                    Password
                                                </Label>
                                                <Input
                                                    id="examplePassword"
                                                    name="password"
                                                    placeholder="Password"
                                                    type="password"
                                                // onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </div>
                                </Row>
                                <button className="login-button" type="submit">Login</button>
                            </Form>
                        </div>
                    </div>

                    <div className="login-info">
                        <h1 className="login-info-text ">Don't have an account?</h1>
                        <p className="login-info-subtext">
                            No worries! You can signup for free! It's quick and easy. When you do signup you'll be on the track to
                            logging your climbing progress!
                        </p>
                        <div className="loginLink"><p className="login-info-subtext">Don't have an account?
                            <a href={'signup'} className="loginButton"> Click here!</a></p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Login;