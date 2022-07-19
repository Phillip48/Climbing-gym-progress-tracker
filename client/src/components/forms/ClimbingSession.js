import React, { useState } from 'react'
import { Label, Input, Row, Col, FormGroup } from 'reactstrap';
import { useDispatch } from 'react-redux'
import { createClimbingSession } from '../../features/climbingSessions/climbingSessionSlice'

function ClimbingSessionForm() {

    const dispatch = useDispatch()
    const [formState, setFormState] = useState({
        durationMinutes: '',
        numberOfSends: '',
        indoorOutdoor: '',
        totalAttempts: 0,
        climbingNotes: '',
        rating: 0,
    });

    const { durationMinutes, numberOfSends, indoorOutdoor, climbingNotes, totalAttempts, rating,
        videoOrImg, climbingSession } = formState
    // console.log(formState)

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
            durationMinutes,
            numberOfSends,
            indoorOutdoor,
            totalAttempts,
            climbingNotes,
            rating,
            videoOrImg,
            climbingSession
        }
        // console.log('Before dispatch', userData)
        dispatch(createClimbingSession(userData))
    };
    return (
        <>
            <section className=''>
                <div className=''>
                    <form onSubmit={handleFormSubmit} className=''>
                        <Col md={12}>
                            <FormGroup>
                                <Label className="labels user-grades-inputs-col" for="exampledurationMinutes">
                                    How long was the session?
                                </Label>
                                <Input
                                    id="exampledurationMinutes"
                                    name="durationMinutes"
                                    placeholder="120 minutes"
                                    min='0'
                                    type="number"
                                    required
                                    value={formState.durationMinutes}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Row className="user-grades-inputs">
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="labels" for="totalAttempts">
                                        How many total attempts?
                                    </Label>
                                    <Input
                                        id="exampletotalAttempts"
                                        name="totalAttempts"
                                        placeholder="3"
                                        min='0'
                                        type="number"
                                        onChange={handleChange}
                                        required
                                        value={formState.totalAttempts}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="labels" for="numberOfSends">
                                        How many total sends?
                                    </Label>
                                    <Input
                                        id="examplenumberOfSends"
                                        name="numberOfSends"
                                        placeholder="3"
                                        min='0'
                                        type="number"
                                        onChange={handleChange}
                                        required
                                        value={formState.numberOfSends}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Col md={12}>
                            <FormGroup>
                                <Label className="labels user-grades-inputs-col" for="indoorOutdoor">
                                    Indoor or Outdoor
                                </Label>
                                <div className='div-padding-verysmall'></div>
                                <div className='form-inputs-center'>
                                    <p>Indoor</p>
                                    <Input
                                        id="exampleindoorOutdoor"
                                        name="indoorOutdoor"
                                        placeholder="Indoor"
                                        type="radio"
                                        onChange={handleChange}
                                        required
                                        value={'indoor'}
                                    />
                                </div>
                                <div className='form-inputs-center'>
                                    <p>Outdoor</p>
                                    <Input
                                        id="exampleindoorOutdoor"
                                        name="indoorOutdoor"
                                        placeholder="Indoor"
                                        type="radio"
                                        onChange={handleChange}
                                        required
                                        value={'outdoor'}
                                    />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup>
                                <Label className="labels user-grades-inputs-col" for="rating">
                                    Rating 1-10
                                </Label>
                                <Input
                                    id="examplerating"
                                    name="rating"
                                    placeholder="3"
                                    type="number"
                                    min='1'
                                    max='10'
                                    onChange={handleChange}
                                    required
                                    value={formState.rating}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup >
                                <Label className="labels user-grades-inputs-col" for="exampleclimbingNotes">
                                    Climbing Notes
                                </Label>
                                <Input
                                    id="exampleclimbingNotes"
                                    name="climbingNotes"
                                    placeholder="Notes..."
                                    type="textarea"
                                    required
                                    value={formState.climbingNotes}
                                    onChange={handleChange}
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

export default ClimbingSessionForm