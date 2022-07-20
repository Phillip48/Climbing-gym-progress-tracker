import React, { useState } from 'react'
import { Label, Input, Row, Col, FormGroup } from 'reactstrap';
import { useDispatch } from 'react-redux'
import { createSend } from '../../features/sends/sendsSlice'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function SendForm() {
    const dispatch = useDispatch()
    const [formState, setFormState] = useState({
        actualGrade: '',
        feltGrade: '',
        notes: '',
        sent: '',
        createdAt: '',
        totalAttempts: '',
        totalSessions: '',
        videoOrImg: '',
        climbingSession: '',
    });
    console.log(formState)
    const { actualGrade, feltGrade, notes, sent, totalAttempts, totalSessions, createdAt,
        videoOrImg, climbingSession } = formState
    console.log(formState)

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

        const userData = {
            actualGrade,
            feltGrade,
            createdAt,
            notes,
            sent,
            totalAttempts,
            totalSessions,
            videoOrImg,
            climbingSession
        }
        console.log('Before dispatch', userData)
        dispatch(createSend(userData))

        // // Clear values after submit
        // formState = {
        //     actualGrade: '',
        //     feltGrade: '',
        //     notes: '',
        //     sent: '',
        //     totalAttempts: '',
        //     totalSessions: '',
        //     videoOrImg: '',
        //     climbingSession: '',
        // }
        // console.log('After dispatch', userData)
    };

    return (
        <>
            <section className=''>
                <div className=''>
                    <form onSubmit={handleFormSubmit} className='holds-log-forms'>
                        <Col md={12} className="user-grades-inputs-col">
                            <FormGroup >
                                <Label className="labels user-grades-inputs-col" for="examplecreatedAt">
                                    Date:
                                </Label>
                                <Input
                                    id="examplecreatedAt"
                                    name="createdAt"
                                    placeholder={'hi'}
                                    type="date"
                                    required
                                    value={formState.createdAt}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Row className="user-grades-inputs">
                            <Col md={5}>
                                <FormGroup>
                                    <Label className="labels" for="actualGrade">
                                        What was the grade?
                                    </Label>
                                    <select className="signup-grade-option" id="exampleactualGrade" name="actualGrade" value={formState.actualGrade} onChange={handleChange} required>
                                        <option onChange={handleChange} value=""></option>
                                        <option onChange={handleChange} value="V0">V0</option>
                                        <option onChange={handleChange} value="V1">V1</option>
                                        <option onChange={handleChange} value="V2">V2</option>
                                        <option onChange={handleChange} value="V3">V3</option>
                                        <option onChange={handleChange} value="V4">V4</option>
                                        <option onChange={handleChange} value="V5">V5</option>
                                        <option onChange={handleChange} value="V6">V6</option>
                                        <option onChange={handleChange} value="V7">V7</option>
                                        <option onChange={handleChange} value="V8">V8</option>
                                        <option onChange={handleChange} value="V9">V9</option>
                                        <option onChange={handleChange} value="V10">V10</option>
                                        <option onChange={handleChange} value="V11">V11</option>
                                        <option onChange={handleChange} value="V12">V12</option>
                                        <option onChange={handleChange} value="V13">V13</option>
                                        <option onChange={handleChange} value="V14">V14</option>
                                        <option onChange={handleChange} value="V15">V15</option>
                                    </select>
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Label className="labels" for="feltGrade">
                                        What did it feel like?
                                    </Label>
                                    <select className="signup-grade-option" id="examplefeltGrade" name="feltGrade" value={formState.feltGrade} onChange={handleChange} required>
                                        <option onChange={handleChange} value=""></option>
                                        <option onChange={handleChange} value="V0">V0</option>
                                        <option onChange={handleChange} value="V1">V1</option>
                                        <option onChange={handleChange} value="V2">V2</option>
                                        <option onChange={handleChange} value="V3">V3</option>
                                        <option onChange={handleChange} value="V4">V4</option>
                                        <option onChange={handleChange} value="V5">V5</option>
                                        <option onChange={handleChange} value="V6">V6</option>
                                        <option onChange={handleChange} value="V7">V7</option>
                                        <option onChange={handleChange} value="V8">V8</option>
                                        <option onChange={handleChange} value="V9">V9</option>
                                        <option onChange={handleChange} value="V10">V10</option>
                                        <option onChange={handleChange} value="V11">V11</option>
                                        <option onChange={handleChange} value="V12">V12</option>
                                        <option onChange={handleChange} value="V13">V13</option>
                                        <option onChange={handleChange} value="V14">V14</option>
                                        <option onChange={handleChange} value="V15">V15</option>
                                    </select>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Col md={12} className="user-grades-inputs-col">
                            <FormGroup >
                                <Label className="labels user-grades-inputs-col" for="exampleSent">
                                    Was it sent?
                                </Label>
                                <div className='div-padding-verysmall'></div>
                                <div className='form-inputs-center'>
                                    <p>Yes</p>
                                    <Input
                                        id="examplesent"
                                        name="sent"
                                        placeholder="True"
                                        type="radio"
                                        required
                                        value={'1'}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='form-inputs-center'>
                                    <p>No</p>
                                    <Input
                                        id="examplesent"
                                        name="sent"
                                        placeholder="False"
                                        type="radio"
                                        required
                                        value={'0'}
                                        onChange={handleChange}
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Row className="user-grades-inputs">
                            <Col md={5}>
                                <FormGroup>
                                    <Label className="labels" for="totalAttempts">
                                        How many attempts did it take?
                                    </Label>
                                    <Input
                                        id="exampletotalAttempts"
                                        name="totalAttempts"
                                        placeholder="3"
                                        type="number"
                                        min='1'
                                        onChange={handleChange}
                                        required
                                        value={formState.totalAttempts}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <Label className="labels" for="totalSessions">
                                        How many sessions did it take?
                                    </Label>
                                    <Input
                                        id="exampletotalSessions"
                                        name="totalSessions"
                                        placeholder="3"
                                        min='1'
                                        type="number"
                                        onChange={handleChange}
                                        required
                                        value={formState.totalSessions}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Col md={12}>
                            <FormGroup >
                                <Label className="labels" for="notes">
                                    Notes
                                </Label>
                                <Input
                                    id="notes"
                                    name="notes"
                                    placeholder="Notes..."
                                    type="textarea"
                                    required
                                    value={formState.notes}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup>
                                <Label className="labels" for="videoOrImg">
                                    Video or Images
                                </Label>
                                <Input
                                    id="videoOrImg"
                                    name="videoOrImg"
                                    // placeholder="Type Here..."
                                    type="file"
                                    value={formState.videoOrImg}
                                    onChange={handleChange}
                                    accept="*"
                                />
                            </FormGroup>
                        </Col>
                        <div className='form-center-button'>
                            <button className="login-button" onClick={handleFormSubmit}>Log</button>
                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}

export default SendForm