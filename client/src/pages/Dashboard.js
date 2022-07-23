import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { getSends, reset } from '../features/sends/SendsSlice'
import { getProjects } from '../features/climbingProjects/projectsSlice'
import { getClimbingSessions } from '../features/climbingSessions/climbingSessionSlice'
import { getTrainingSessions } from '../features/trainingSessions/trainingSessionSlice'
// import {isTokenExpired} from '../features/auth/authSlice'
import SendItem from '../components/items/SendItem'
import ProjectItem from '../components/items/ProjectItem'
import TrainingItem from '../components/items/TrainingSessionItem'
import ClimbingItem from '../components/items/ClimbingSessionItem'
// import decode from 'jwt-decode';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Dashboard() {
    // const formatDate = () => {
    //     const date = new Date();
    //     let year = date.getFullYear();
    //     let month = date.getMonth() + 1;
    //     let day = date.getDate();
    //     if(month > 0 && month < 10){
    //         month.toString()
    //         month = '0' + month
    //         // console.log('month', month)
    //         parseInt(month)
    //         // console.log('month', month)
    //     }
    //     let format = year + '/' + month + '/' + day;
    //     return (format)
    // }
    // console.log(formatDate())
    const [calenderValue, calenderOnChange] = useState(new Date());
    console.log(calenderValue)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    // const { isTokenExpired } = useSelector((state) => state.auth)
    const [active, setActive] = useState("nothing");
    const { sends, isLoading, isError, message } = useSelector(
        (state) => state.sends
    )
    const { projects } = useSelector(
        (state) => state.projects
    )
    const { climbingSessions } = useSelector(
        (state) => state.climbingSessions
    )
    const { trainingSessions } = useSelector(
        (state) => state.trainingSessions
    )
    // ============================================= //
    const isActive = () => {

        if (active === "nothing") {
            return ('Get Logging!')
        } else if (active === "LogSend") {
            if (sends.length > 0) {
                return (sends.map((sends) => <SendItem key={sends.id} sends={sends} />))
            } else {
                return ('You have not logged any Sends')
            }
        } else if (active === "LogClimbingSession") {
            if (climbingSessions.length > 0) {
                return (climbingSessions.map((climbingSessions) => <ClimbingItem key={climbingSessions.id} climbingSessions={climbingSessions} />))
            } else {
                return ('You have not logged any Climbing Sessions')
            }
        } else if (active === "LogTrainingSession") {
            if (trainingSessions.length > 0) {
                return (trainingSessions.map((trainingSessions) => <TrainingItem key={trainingSessions.id} trainingSessions={trainingSessions} />))
            } else {
                return ('You have not logged any Training Sessions')
            }
        } else if (active === "LogProject") {
            if (projects.length > 0) {
                return (projects.map((projects) => <ProjectItem key={projects.id} projects={projects} />))
            } else {
                return ('You have not logged any Projects')
            }
        }
    }
    const isActiveTitle = () => {
        if (active === "LogSend") {
            return ('Previous Sends')
        } else if (active === "LogClimbingSession") {
            return ('Previous Climbing Session')
        } else if (active === "LogTrainingSession") {
            return ('Previous Training Session')
        } else if (active === "LogProject") {
            return ('Previous Projects')
        }
    }

    useEffect(() => {

        // Auth.loggedIn();
        // Check if theres an error from redux
        if (isError) {
            localStorage.removeItem('user');
            window.location.reload();
            navigate('/login')
            console.log(message)
        }
        // const token = JSON.parse(localStorage.getItem("user"));
        // Check if theres a user and check if the user JWT is expired
        if (!user) {
            // Testing the localstorage to fix a problem
            localStorage.removeItem('user');
            navigate('/login')
        }
        // Not sure about this// doesnt work
        // if (isTokenExpired(token.token)) {
        //     navigate('/login')
        // }
        // console.log(token.token)
        // console.log(decode(token.token).exp)

        // Get everything needed for the page
        dispatch(getSends())
        dispatch(getProjects())
        dispatch(getClimbingSessions())
        dispatch(getTrainingSessions())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }

    let sendsCount = 0;
    let climbingSessionsCount = 0;
    let trainingSessionsCount = 0;

    const sendStatCounter = () => {
        sends.forEach(sends => {
            sendsCount++
        });
        return (sendsCount)
    }
    const cSessionStatCounter = () => {
        climbingSessions.forEach(climbingSessions => {
            climbingSessionsCount++
        });
        return (climbingSessionsCount)
    }
    const tSessionStatCounter = () => {
        trainingSessions.forEach(trainingSessions => {
            trainingSessionsCount++
        });
        return (trainingSessionsCount)
    }
    return (
        <>
            <section className='dash-heading'>
                <h1>Welcome </h1>
                <p>Dashboard</p>
            </section>

            <section className='dash-form-buttons'>
                <Link to={'/logforms'}><button className='different-form-buttons'>Get Logging!</button></Link>
            </section>

            <section className='dash-holds-stats'>
                <div className='dash-stat-3'>
                    <h3 className='dash-stat-response' style={{ textAlign: 'center' }}>Total Climbing Sessions:</h3>
                    <span>{cSessionStatCounter()}</span>
                </div>
                <div className='dash-stat-3'>
                    <h3 className='dash-stat-response' style={{ textAlign: 'center' }}>Total Sends:</h3>
                    <span>{sendStatCounter()}</span>
                </div>
                <div className='dash-stat-3'>
                    <h3 className='dash-stat-response' style={{ textAlign: 'center' }}>Total Training Sessions:</h3>
                    <span>{tSessionStatCounter()}</span>
                </div>
            </section>

            <div className='dash-holds-calender'>
                <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>Previous Logs</h3>
                <p style={{ textAlign: 'center' }}>Select one to see your older logs or search by date!</p>
                <Calendar onChange={calenderOnChange} value={calenderValue} />
            </div>
            <section className='dash-mapping'>
                <section className='dash-form-buttons'>
                    <div className='holds-different-form-buttons'>
                        <button onClick={() => setActive("LogClimbingSession")} className='different-form-buttons'>Climbing Sessions</button>
                        <button onClick={() => setActive("LogSend")} className='different-form-buttons'>Sends</button>
                    </div>
                    <div className='holds-different-form-buttons'>
                        <button onClick={() => setActive("LogTrainingSession")} className='different-form-buttons'>Training Sessions</button>
                        <button onClick={() => setActive("LogProject")} className='different-form-buttons'>Projects</button>
                    </div>
                </section>

                <section className="forms-rendered-user-selection">
                    <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>{isActiveTitle()}</h3>
                    <div className='dash-holds-info'>
                        {isActive()}
                        {/* {sends.map(() => <SendItem key={sends._id} sends={sends} />)} */}
                    </div>
                </section>
            </section>
        </>
    )
}

export default Dashboard
