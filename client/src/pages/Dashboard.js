import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { getSends, reset } from '../features/sends/sendsSlice'
import { getProjects } from '../features/climbingProjects/projectsSlice'
// import { getClimbingSessions, reset } from '../features/climbingSessions/climbingSessionSlice'
// import { getTrainingSessions, reset } from '../features/trainingSessions/trainingSessionSlice'
import SendItem from '../components/items/SendItem'
import ProjectItem from '../components/items/ProjectItem'
// import TrainingItem from '../components/items/TrainingSessionItem'
// import ClimbingItem from '../components/items/climbingSessionItem'

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const [active, setActive] = useState("LogSend", "LogClimbingSession");
    const { sends, isLoading, isError, message } = useSelector(
        (state) => state.sends
    )
    const { projects } = useSelector(
        (state) => state.projects
    )
    console.log('dash', projects)
    // ============================================= //
    const isActive = () => {
        if (active === "LogSend") {
            if (sends.length > 0) {
                return (sends.map((sends) => <SendItem key={sends.id} sends={sends} />))
            } else {
                return ('You have not logged any Sends')
            }
        } else if (active === "LogClimbingSession") {
            if (sends.length > 0) {
                return ('test1')
            } else {
                return ('You have not logged any Climbing Sessions')
            }
        } else if (active === "LogTrainingSession") {
            if (sends.length > 0) {
                return ('test2')
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

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }

        if (isError) {
            console.log(message)
        }

        dispatch(getSends())
        dispatch(getProjects())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='dash-heading'>
                <h1>Welcome</h1>
                <p>Dashboard</p>
            </section>

            <section className='dash-form-buttons'>
                <Link to={'/logforms'}><button className='different-form-buttons'>Get Logging!</button></Link>
            </section>

            <section className='dash-holds-stats'>
                <div className='dash-stat-3'>
                    <h3>Total Climbing Sessions:</h3>
                    <span>0</span>
                </div>
                <div className='dash-stat-3'>
                    <h3>Total Sends:</h3>
                    <span>0</span>
                </div>
                <div className='dash-stat-3'>
                    <h3>Total Training Sessions:</h3>
                    <span>0</span>
                </div>
            </section>

            <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>Previous Logs</h3>
            <p style={{ textAlign: 'center' }}>Select one to see your older logs</p>

            <section className='dash-mapping'>
                <section className='dash-form-buttons'>
                    <button onClick={() => setActive("LogClimbingSession")} className='different-form-buttons'>Log Climbing Session</button>
                    <div className='div-padding-1'></div>
                    <button onClick={() => setActive("LogSend")} className='different-form-buttons'>Log Send</button>
                    <div className='div-padding-1'></div>
                    <button onClick={() => setActive("LogTrainingSession")} className='different-form-buttons'>Log Trainging Session</button>
                    <div className='div-padding-1'></div>
                    <button onClick={() => setActive("LogProject")} className='different-form-buttons'>Log Project</button>
                </section>

                <section className="forms-rendered-user-selection">
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
