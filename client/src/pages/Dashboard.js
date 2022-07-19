import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { getSends, reset } from '../features/sends/sendsSlice'
import SendItem from '../components/items/SendItem'
import ProjectItem from '../components/items/ProjectItem'
import TrainingItem from '../components/items/TrainingSessionItem'
import ClimbingItem from '../components/items/climbingSessionItem'

function Dashboard() {
    const [active, setActive] = useState("LogSend", "LogClimbingSession");
    const { sends, isLoading, isError, message } = useSelector(
        (state) => state.sends
    )
    const { projects } = useSelector(
        (state) => state.projects
    )
    const mappingSends = sends.map((send) => (
        <SendItem key={send._id} send={send} />
    ))
    const mappingProjects = projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
    ))
    // Refractor
    const mappingClimbingSession = sends.map((send) => (
        <ClimbingItem key={send._id} send={send} />
    ))
    const mappingTrainingSession = sends.map((send) => (
        <TrainingItem key={send._id} send={send} />
    ))
    // ============================================= //
    const isActive = () => {
        if (active === "LogSend") {
            if (sends.length > 0){
                return (mappingSends)
            } else{
                return ('You have not logged any Sends')
            }
        } else if (active === "LogClimbingSession") {
            if (sends.length > 0) {
                return (mappingClimbingSession)
            } else {
                return ('You have not logged any Climbing Sessions')
            }
        } else if (active === "LogTrainingSession") {
            if (sends.length > 0) {
                return (mappingTrainingSession)
            } else {
                return ('You have not logged any Training Sessions')
            }
        } else if (active === "LogProject") {
            if (sends.length > 0) {
                return (mappingProjects)
            } else {
                return ('You have not logged any Projects')
            }
        }
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)


    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        if (!user) {
            navigate('/login')
        }

        dispatch(getSends())

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
                <h1>Welcome {user.userName}</h1>
                <p>Dashboard</p>
            </section>

            <section className='dash-form-buttons'>
                <Link to={'/logforms'}><button className='different-form-buttons'>Get Logging!</button></Link>
            </section>

            <h3 style={{textAlign: 'center', marginTop: '2rem'}}>Previous Logs</h3>
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
                    {isActive()}
                </section>
            </section>
        </>
    )
}

export default Dashboard
