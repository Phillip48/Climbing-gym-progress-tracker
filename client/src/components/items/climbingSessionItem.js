import { useDispatch } from 'react-redux'
import { deleteClimbingSession } from '../../features/climbingSessions/climbingSessionSlice'
import { Link } from 'react-router-dom'
import { GrUpdate } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';

function ClimbingSessionItem({ climbingSessions }) {
  const dispatch = useDispatch()
  return (
    <div className='send-item'>
      <div className='send-item-buttons'>
        <div>
          <h3>{climbingSessions.createdAt}</h3>
          <p>{climbingSessions.indoorOutdoor} climbing session</p>
          {/* {ifSent()} */}
        </div>
        <div className='div-padding-1'></div>

        <div>
          <Link to={'/updateforms'}><button className='close'>
            <GrUpdate />
          </button></Link>
          <button onClick={() => dispatch(deleteClimbingSession(climbingSessions._id))} className='close margin-side'>
            <AiFillDelete />
          </button>
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'><p>
          Session Length: <b>{climbingSessions.durationMinutes}</b> minutes
        </p>
        </div>
        <div className='div-padding-1'></div>
        <div className='send-item-grades-div'>
          <p>
            Total Sends: <b>{climbingSessions.numberOfSends}</b>
          </p>
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'><p>
          Total Attempts: <b>{climbingSessions.totalAttempts}</b>
        </p>
        </div>
        <div className='div-padding-1'></div>
        <div className='send-item-grades-div'>
          <p>
            Rating: <b>{climbingSessions.rating}</b>
          </p>
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'><p>
          Climbing Notes: <b>{climbingSessions.climbingNotes}</b>
        </p>
        </div>
      </div>
    </div>
  )
}

export default ClimbingSessionItem