import React, { useState } from "react";
import { Label, Input, Row, Col, FormGroup, Form } from 'reactstrap';
import axios from 'axios';
import Auth from '../../utils/auth';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../signup/style.css'

const Signup = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        phoneNumber: '',
        maxGrade: '',
        password: '',
        aboutMe: ''
    });

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log('This is from the form state and is the user info:', formState);

        const user = formState;

        console.log('This is the user object', user)

        axios.post('http://localhost:3000/api/user/register', user)
            .then(res => console.log(res.data));

        // redirect to profile and login

        // clear form values
        setFormState({
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            phoneNumber: '',
            maxGrade: '',
            password: '',
            aboutMe: ''
        })

    };

    return (
        <>
            <section className="hold-everything-Signup">
                <section className="signup-holds-form">
                    <div className="holds-signup">
                        <h1 className="login-form-text" style={{ textAlign: 'center' }}>Sign Up:</h1>
                        <Form className="actual-signup-form" onSubmit={handleFormSubmit}>
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
                                                value={formState.firstName}
                                                onChange={handleChange}
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
                                                value={formState.lastName}
                                                onChange={handleChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                {/* Email Input */}
                                <Col md={12}>
                                    <FormGroup >
                                        <Label className="labels" for="exampleuserName">
                                            UserName
                                        </Label>
                                        <Input
                                            id="exampleUserName"
                                            name="userName"
                                            placeholder="User123"
                                            type="text"
                                            value={formState.userName}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
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
                                            value={formState.email}
                                            onChange={handleChange}
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
                                            value={formState.password}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                {/* Phone Number Input */}
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
                                            value={formState.phoneNumber}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                {/* Max Grade Input */}
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
                                            value={formState.maxGrade}
                                            onChange={handleChange}
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
                                            value={formState.aboutMe}
                                            onChange={handleChange}
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