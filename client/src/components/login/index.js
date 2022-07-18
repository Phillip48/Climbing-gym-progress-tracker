import React, {useState} from "react";
import { CardTitle, Label, Input, Row, Col, FormGroup, Form } from 'reactstrap';
import { FaSignInAlt } from 'react-icons/fa'
import axios from 'axios';
// import Auth from '../../utils/auth';
import Banner from '../banner/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../login/style.css'

const Login = () => {
    // state for login
    const [formState, setFormState] = useState({ email: '', password: '' });

    const { email, password } = formState

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log('This is from the form state and is the user info:', formState);

        try{
            const user = formState;

            axios.post('http://localhost:3000/api/user/signin', user)
            .then(res => console.log(res.data));
            // redirect to profile
            // window.location.assign('/profile')
            // window.location.assign(`/profile/${Auth.getProfile()}`)
        } catch (e) {
            console.error(e);
        }
        
        // window.location.assign(`/profile/${Auth.getProfile}`)
        // clear form values
        setFormState({
            email: '',
            password: '',
        });

    };

    return (
        <>
            <Banner />
            <section className="hold-everything-login">
                <section className="holds-login-interaction">
                    <div className="login-form">
                        <h1 className="login-form-text"><FaSignInAlt /> Login:</h1>
                        <div className="formBody">
                            <CardTitle tag="h3" id="login">
                                Login
                            </CardTitle>
                            <Form className="actual-login-form" onSubmit={handleFormSubmit}>
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
                                                    value={email}
                                                onChange={handleChange}
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
                                                    value={password}
                                                    onChange={handleChange}
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