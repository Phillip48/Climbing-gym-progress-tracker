import React from "react";
import { Label, Input, Row, Col, FormGroup, Form } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../signup/style.css'

const Signup = () => {
    // refractor and use state
    const signupFormHandler = async (event) => {
        event.preventDefault();

        const username = document.querySelector('#username-signup').value.trim();
        const email = document.querySelector('#email-signup').value.trim();
        const password = document.querySelector('#password-signup').value.trim();

        if (username && email && password) {
            const response = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Failed to sign up.');
            }
        }
    };
    const loginFormHandler = async (event) => {
        event.preventDefault();
        console.log("Testing")

        const email = document.querySelector('#email-login').value.trim();
        const password = document.querySelector('#password-login').value.trim();

        if (email && password) {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Failed to log in.');
            }
        }
    };
    return (
        <>
            <section className="hold-everything-Signup">
                <section className="signup-holds-form">
                    <div className="holds-signup">
                        <h1 className="login-form-text" style={{ textAlign: 'center' }}>Sign Up:</h1>
                        <Form className="actual-signup-form">
                            <div>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label className="labels" for="firstName">
                                                First Name
                                            </Label>
                                            <Input
                                                id="firstName"
                                                name="firstName"
                                                placeholder="First Name"
                                                type="text"
                                            // value={formState.firstname}
                                            // onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                    {/* Last Name Input */}
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label className="labels" for="lastName">
                                                Last Name
                                            </Label>
                                            <Input
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Last Name"
                                                type="text"
                                            // value={formState.lastname}
                                            // onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                {/* Email Input */}
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
                                        // value={formState.email}
                                        // onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                {/* Password Input */}
                                <Col md={12}>
                                    <FormGroup>
                                        <Label className="labels" for="examplePassword">
                                            Password
                                        </Label>
                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            placeholder="******"
                                            type="password"
                                        // value={formState.password}
                                        // onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup >
                                        <Label className="labels" for="phoneNumber">
                                            Phone Number
                                        </Label>
                                        <Input
                                            id="examplephoneNumber"
                                            name="phoneNumber"
                                            placeholder="123-456-7890"
                                            type="tel"
                                        // value={formState.email}
                                        // onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label className="labels" for="exampleMaxGrade">
                                            Max Grade
                                        </Label>
                                        <Input
                                            id="exampleMaxGrade"
                                            name="maxGrade"
                                            placeholder="V5"
                                            type="text"
                                        // value={formState.password}
                                        // onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                {/* About Me Input */}
                                <Col md={12}>
                                    <FormGroup>
                                        <Label className="labels" for="aboutMe">
                                            About Me
                                        </Label>
                                        <Input
                                            id="aboutMe"
                                            name="aboutMe"
                                            placeholder="Type Here..."
                                            type="textarea"
                                        // value={formState.aboutMe}
                                        // onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </div>
                            <button className="login-button" type="submit">Get Started</button>
                        </Form>
                        <div className="loginLink">
                            <p>Already have an account? <a href={'login'} className="loginButton">Click here!</a></p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Signup;