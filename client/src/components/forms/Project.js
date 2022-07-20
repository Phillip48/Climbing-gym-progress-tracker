import React, { useState } from 'react'
import { Label, Input, Row, Col, FormGroup } from 'reactstrap';
import { useDispatch } from 'react-redux'
import { createProject } from '../../features/climbingProjects/projectsSlice'

function ProjectForm() {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let format = year + '/' + month + '/' + day;

  const dispatch = useDispatch()
  const [formState, setFormState] = useState({
    actualGrade: '',
    boulderingActualGrade: '',
    boulderingOrSportClimbing: '',
    boulderingFeltGrade: '',
    sportClimbingActualGrade: '',
    sportClimbingFeltGrade: '',
    feltGrade: '',
    notes: '',
    indoorOutdoor: '',
    createdAt: format,
    sendProject: '',
    totalAttempts: '',
    totalSessions: '',
    videoOrImg: '',
    climbingSession: '',
  });
  const { boulderingOrSportClimbing, indoorOutdoor, boulderingActualGrade, boulderingFeltGrade, sportClimbingActualGrade, sportClimbingFeltGrade, createdAt, notes, sendProject, totalAttempts, totalSessions,
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
      boulderingOrSportClimbing, boulderingActualGrade, boulderingFeltGrade, sportClimbingActualGrade, sportClimbingFeltGrade,
      notes,
      indoorOutdoor,
      createdAt,
      sendProject,
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
    //   sendProject: '',
    //   totalAttempts: '',
    //   totalSessions: '',
    //   videoOrImg: '',
    //   climbingSession: '',
    // }
    // console.log('After dispatch', userData)
  };
  const ifBoulderingOrSportClimb = () => {
    if (formState.boulderingOrSportClimbing === 'Bouldering') {
      return (
        <Row className="user-grades-inputs">
          <Col md={5} className="user-grades-inputs-col">
            <FormGroup>
              <Label className="labels user-grades-inputs-col" for="boulderingActualGrade">
                What was the bouldering grade??
              </Label>
              <select className="signup-grade-option" id="exampleboulderingActualGrade" name="boulderingActualGrade" value={formState.boulderingActualGrade} onChange={handleChange} required>
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
          <Col md={5} className="user-grades-inputs-col">
            <FormGroup>
              <Label className="labels user-grades-inputs-col" for="boulderingFeltGrade">
                What did the send feel like?
              </Label>
              <select className="signup-grade-option" id="exampleboulderingFeltGrade" name="boulderingFeltGrade" value={formState.boulderingFeltGrade} onChange={handleChange} required>
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
      )
    } else if (formState.boulderingOrSportClimbing === 'Sport Climb') {
      return (
        <Row className="user-grades-inputs">
          <Col md={5} className="user-grades-inputs-col">
            <FormGroup>
              <Label className="labels user-grades-inputs-col" for="sportClimbingActualGrade">
                What was the sport climbing grade??
              </Label>
              <select className="signup-grade-option" id="examplesportClimbingActualGrade" name="sportClimbingActualGrade" value={formState.sportClimbingActualGrade} onChange={handleChange} required>
                <option onChange={handleChange} value=""></option>
                <option onChange={handleChange} value="5.6">5.6</option>
                <option onChange={handleChange} value="5.7">5.7</option>
                <option onChange={handleChange} value="5.8">5.8</option>
                <option onChange={handleChange} value="5.9">5.9</option>
                <option onChange={handleChange} value="5.10a">5.10a</option>
                <option onChange={handleChange} value="5.10b">5.10b</option>
                <option onChange={handleChange} value="5.10c">5.10c</option>
                <option onChange={handleChange} value="5.10d">5.10d</option>
                <option onChange={handleChange} value="5.11a">5.11a</option>
                <option onChange={handleChange} value="5.11b">5.11b</option>
                <option onChange={handleChange} value="5.11c">5.11c</option>
                <option onChange={handleChange} value="5.11d">5.11d</option>
                <option onChange={handleChange} value="5.12a">5.12a</option>
                <option onChange={handleChange} value="5.12b">5.12b</option>
                <option onChange={handleChange} value="5.12c">5.12c</option>
                <option onChange={handleChange} value="5.12d">5.12d</option>
                <option onChange={handleChange} value="5.13a">5.13a</option>
                <option onChange={handleChange} value="5.13b">5.13b</option>
                <option onChange={handleChange} value="5.13c">5.13c</option>
                <option onChange={handleChange} value="5.13d">5.13d</option>
                <option onChange={handleChange} value="5.14a">5.14a</option>
                <option onChange={handleChange} value="5.14b">5.14b</option>
                <option onChange={handleChange} value="5.14c">5.14c</option>
                <option onChange={handleChange} value="5.14d">5.14d</option>
                <option onChange={handleChange} value="5.15a">5.15a</option>
                <option onChange={handleChange} value="5.15b">5.15b</option>
                <option onChange={handleChange} value="5.15c">5.15c</option>
                <option onChange={handleChange} value="5.15d">5.15d</option>
                <option onChange={handleChange} value="5.16a">5.16a</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={5} className="user-grades-inputs-col">
            <FormGroup>
              <Label className="labels user-grades-inputs-col" for="sportClimbingFeltGrade">
                What did the send feel like?
              </Label>
              <select className="signup-grade-option" id="examplesportClimbingFeltGrade" name="sportClimbingFeltGrade" value={formState.sportClimbingFeltGrade} onChange={handleChange} required>
                <option onChange={handleChange} value=""></option>
                <option onChange={handleChange} value="5.6">5.6</option>
                <option onChange={handleChange} value="5.7">5.7</option>
                <option onChange={handleChange} value="5.8">5.8</option>
                <option onChange={handleChange} value="5.9">5.9</option>
                <option onChange={handleChange} value="5.10a">5.10a</option>
                <option onChange={handleChange} value="5.10b">5.10b</option>
                <option onChange={handleChange} value="5.10c">5.10c</option>
                <option onChange={handleChange} value="5.10d">5.10d</option>
                <option onChange={handleChange} value="5.11a">5.11a</option>
                <option onChange={handleChange} value="5.11b">5.11b</option>
                <option onChange={handleChange} value="5.11c">5.11c</option>
                <option onChange={handleChange} value="5.11d">5.11d</option>
                <option onChange={handleChange} value="5.12a">5.12a</option>
                <option onChange={handleChange} value="5.12b">5.12b</option>
                <option onChange={handleChange} value="5.12c">5.12c</option>
                <option onChange={handleChange} value="5.12d">5.12d</option>
                <option onChange={handleChange} value="5.13a">5.13a</option>
                <option onChange={handleChange} value="5.13b">5.13b</option>
                <option onChange={handleChange} value="5.13c">5.13c</option>
                <option onChange={handleChange} value="5.13d">5.13d</option>
                <option onChange={handleChange} value="5.14a">5.14a</option>
                <option onChange={handleChange} value="5.14b">5.14b</option>
                <option onChange={handleChange} value="5.14c">5.14c</option>
                <option onChange={handleChange} value="5.14d">5.14d</option>
                <option onChange={handleChange} value="5.15a">5.15a</option>
                <option onChange={handleChange} value="5.15b">5.15b</option>
                <option onChange={handleChange} value="5.15c">5.15c</option>
                <option onChange={handleChange} value="5.15d">5.15d</option>
                <option onChange={handleChange} value="5.16a">5.16a</option>
              </select>
            </FormGroup>
          </Col>
        </Row>
      )
    }
    // else if (formState.boulderingOrSportClimbing === 'Sport Climb and Boulder') {
    //     return(
    //         <>
    //             <Row className="user-grades-inputs">
    //                 <Col md={5} className="user-grades-inputs-col">
    //                     <FormGroup>
    //                         <Label className="labels user-grades-inputs-col" for="sportClimbing">
    //                             What was the sport climbing grade??
    //                         </Label>
    //                         <select className="signup-grade-option" id="examplesportClimbing" name="sportClimbing" value={formState.sportClimbing} onChange={handleChange} required>
    //                             <option onChange={handleChange} value=""></option>
    //                             <option onChange={handleChange} value="V0">V0</option>
    //                             <option onChange={handleChange} value="V1">V1</option>
    //                             <option onChange={handleChange} value="V2">V2</option>
    //                             <option onChange={handleChange} value="V3">V3</option>
    //                             <option onChange={handleChange} value="V4">V4</option>
    //                             <option onChange={handleChange} value="V5">V5</option>
    //                             <option onChange={handleChange} value="V6">V6</option>
    //                             <option onChange={handleChange} value="V7">V7</option>
    //                             <option onChange={handleChange} value="V8">V8</option>
    //                             <option onChange={handleChange} value="V9">V9</option>
    //                             <option onChange={handleChange} value="V10">V10</option>
    //                             <option onChange={handleChange} value="V11">V11</option>
    //                             <option onChange={handleChange} value="V12">V12</option>
    //                             <option onChange={handleChange} value="V13">V13</option>
    //                             <option onChange={handleChange} value="V14">V14</option>
    //                             <option onChange={handleChange} value="V15">V15</option>
    //                         </select>
    //                     </FormGroup>
    //                 </Col>
    //                 <Col md={5} className="user-grades-inputs-col">
    //                     <FormGroup>
    //                         <Label className="labels user-grades-inputs-col" for="feltGrade">
    //                             What did the send feel like?
    //                         </Label>
    //                         <select className="signup-grade-option" id="examplesportClimbing" name="sportClimbing" value={formState.sportClimbing} onChange={handleChange} required>
    //                             <option onChange={handleChange} value=""></option>
    //                             <option onChange={handleChange} value="V0">V0</option>
    //                             <option onChange={handleChange} value="V1">V1</option>
    //                             <option onChange={handleChange} value="V2">V2</option>
    //                             <option onChange={handleChange} value="V3">V3</option>
    //                             <option onChange={handleChange} value="V4">V4</option>
    //                             <option onChange={handleChange} value="V5">V5</option>
    //                             <option onChange={handleChange} value="V6">V6</option>
    //                             <option onChange={handleChange} value="V7">V7</option>
    //                             <option onChange={handleChange} value="V8">V8</option>
    //                             <option onChange={handleChange} value="V9">V9</option>
    //                             <option onChange={handleChange} value="V10">V10</option>
    //                             <option onChange={handleChange} value="V11">V11</option>
    //                             <option onChange={handleChange} value="V12">V12</option>
    //                             <option onChange={handleChange} value="V13">V13</option>
    //                             <option onChange={handleChange} value="V14">V14</option>
    //                             <option onChange={handleChange} value="V15">V15</option>
    //                         </select>
    //                     </FormGroup>
    //                 </Col>
    //             </Row>
    //             <Row className="user-grades-inputs">
    //                 <Col md={5} className="user-grades-inputs-col">
    //                     <FormGroup>
    //                         <Label className="labels user-grades-inputs-col" for="boulderingActualGrade">
    //                             What was the bouldering grade??
    //                         </Label>
    //                         <select className="signup-grade-option" id="exampleboulderingActualGrade" name="boulderingActualGrade" value={formState.boulderingActualGrade} onChange={handleChange} required>
    //                             <option onChange={handleChange} value=""></option>
    //                             <option onChange={handleChange} value="V0">V0</option>
    //                             <option onChange={handleChange} value="V1">V1</option>
    //                             <option onChange={handleChange} value="V2">V2</option>
    //                             <option onChange={handleChange} value="V3">V3</option>
    //                             <option onChange={handleChange} value="V4">V4</option>
    //                             <option onChange={handleChange} value="V5">V5</option>
    //                             <option onChange={handleChange} value="V6">V6</option>
    //                             <option onChange={handleChange} value="V7">V7</option>
    //                             <option onChange={handleChange} value="V8">V8</option>
    //                             <option onChange={handleChange} value="V9">V9</option>
    //                             <option onChange={handleChange} value="V10">V10</option>
    //                             <option onChange={handleChange} value="V11">V11</option>
    //                             <option onChange={handleChange} value="V12">V12</option>
    //                             <option onChange={handleChange} value="V13">V13</option>
    //                             <option onChange={handleChange} value="V14">V14</option>
    //                             <option onChange={handleChange} value="V15">V15</option>
    //                         </select>
    //                     </FormGroup>
    //                 </Col>
    //                 <Col md={5} className="user-grades-inputs-col">
    //                     <FormGroup>
    //                         <Label className="labels user-grades-inputs-col" for="boulderingFeltGrade">
    //                             What did the send feel like?
    //                         </Label>
    //                         <select className="signup-grade-option" id="exampleboulderingFeltGrade" name="boulderingFeltGrade" value={formState.boulderingFeltGrade} onChange={handleChange} required>
    //                             <option onChange={handleChange} value=""></option>
    //                             <option onChange={handleChange} value="V0">V0</option>
    //                             <option onChange={handleChange} value="V1">V1</option>
    //                             <option onChange={handleChange} value="V2">V2</option>
    //                             <option onChange={handleChange} value="V3">V3</option>
    //                             <option onChange={handleChange} value="V4">V4</option>
    //                             <option onChange={handleChange} value="V5">V5</option>
    //                             <option onChange={handleChange} value="V6">V6</option>
    //                             <option onChange={handleChange} value="V7">V7</option>
    //                             <option onChange={handleChange} value="V8">V8</option>
    //                             <option onChange={handleChange} value="V9">V9</option>
    //                             <option onChange={handleChange} value="V10">V10</option>
    //                             <option onChange={handleChange} value="V11">V11</option>
    //                             <option onChange={handleChange} value="V12">V12</option>
    //                             <option onChange={handleChange} value="V13">V13</option>
    //                             <option onChange={handleChange} value="V14">V14</option>
    //                             <option onChange={handleChange} value="V15">V15</option>
    //                         </select>
    //                     </FormGroup>
    //                 </Col>
    //             </Row>
    //         </>
    //     )
    // }
  }
  return (
    <>
      <section className=''>
        <div className=''>
          <form onSubmit={handleFormSubmit} className=''>
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
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label className="labels user-grades-inputs-col" for="indoorOutdoor">
                    Was it an indoor or outdoor climb?
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
                      value={'Indoor'}
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
                      value={'Outdoor'}
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label className="labels user-grades-inputs-col" for="boulderingOrSportClimbing">
                    Did you sport climb or boulder?
                  </Label>
                  <div className='div-padding-verysmall'></div>
                  <div className='form-inputs-center'>
                    <p>Sport Climb</p>
                    <Input
                      id="exampleboulderingOrSportClimbing"
                      name="boulderingOrSportClimbing"
                      placeholder="Indoor"
                      type="radio"
                      onChange={handleChange}
                      required
                      value={'Sport Climb'}
                    />
                  </div>
                  <div className='form-inputs-center'>
                    <p>Boulder</p>
                    <Input
                      id="exampleboulderingOrSportClimbing"
                      name="boulderingOrSportClimbing"
                      placeholder="Indoor"
                      type="radio"
                      onChange={handleChange}
                      required
                      value={'Bouldering'}
                    />
                  </div>
                </FormGroup>
              </Col>
            </Row>
            {ifBoulderingOrSportClimb()}
            <Col md={12} className="user-grades-inputs-col">
              <FormGroup >
                <Label className="labels user-grades-inputs-col" for="examplesendProject">
                  Was it sent?
                </Label>
                <div className='div-padding-verysmall'></div>
                <div className='form-inputs-center'>
                  <p>Yes</p>
                  <Input
                    id="examplesendProject"
                    name="sendProject"
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
                    id="examplesendProject"
                    name="sendProject"
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

export default ProjectForm