import React, { useState } from 'react'
import { Label, Input, Row, Col, FormGroup } from 'reactstrap';
import { useDispatch } from 'react-redux'
import { createProject } from '../../features/climbingProjects/projectsSlice'

function ProjectForm() {
  const dispatch = useDispatch()
  const [formState, setFormState] = useState({
    actualGrade: '',
    feltGrade: '',
    notes: '',
    sent: '',
    totalAttempts: '',
    totalSessions: '',
    videoOrImg: '',
    climbingSession: '',
  });
  const { actualGrade, feltGrade, notes, sent, totalAttempts, totalSessions,
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
      actualGrade,
      feltGrade,
      notes,
      sent,
      totalAttempts,
      totalSessions,
      videoOrImg,
      climbingSession
    }
    console.log('Before dispatch', userData)
    dispatch(createProject(userData))

    // Clear values after submit
    // setFormState = {
    //   actualGrade: '',
    //   feltGrade: '',
    //   notes: '',
    //   sent: '',
    //   totalAttempts: '',
    //   totalSessions: '',
    //   videoOrImg: '',
    //   climbingSession: '',
    // }
    // console.log('After dispatch', userData)
  };
  return (
    <>
      <section className=''>
        <div className=''>
          <form className=''>
            <Col md={12} className="user-grades-inputs-col">
              <FormGroup >
                <Label className="labels user-grades-inputs-col" for="exampleSent">
                  Was it sent?
                </Label>
                <Input
                  id="exampleSent"
                  name="Sent"
                  placeholder="True"
                  type="radio"
                  required
                  value={formState.sent = 1}
                  onChange={handleChange}
                />
                <Input
                  id="exampleSent"
                  name="Sent"
                  placeholder="False"
                  type="radio"
                  required
                  value={formState.sent = 0}
                  onChange={handleChange}
                />
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
                    type="number"
                    onChange={handleChange}
                    required
                    value={formState.totalSessions}
                  />
                </FormGroup>
              </Col>
            </Row>
            <div className='form-center-button'>
              <button className="login-button" onClick={handleFormSubmit}>Log</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default ProjectForm