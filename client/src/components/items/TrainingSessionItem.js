import { useDispatch } from 'react-redux'
import { deleteTrainingSession, updateTrainingSession } from '../../features/trainingSessions/trainingSessionSlice'
import { GrUpdate } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';

function TrainingSessionItem({ trainingSessions }) {
  const dispatch = useDispatch()
  const liftWeights = () => {
    if (trainingSessions.liftWeights) {
      return ('Lifted Weights')
    } else {
      return (`Didn't Lifted Weights`)
    }
  }
  const hangBoard = () => {
    if (trainingSessions.hangBoard) {
      return ('HangBoard session')
    } else {
      return (`Didn't hangboard`)
    }
  }
  const kelterBoard = () => {
    if (trainingSessions.kelterBoard) {
      return ('KelterBoard session')
    } else {
      return (`Didn't kelterboard`)
    }
  }
  const moonBoard = () => {
    if (trainingSessions.moonBoard) {
      return ('Moonboard session')
    } else {
      return (`Didn't moonboard`)
    }
  }
  const sprayBoard = () => {
    if (trainingSessions.sprayBoard) {
      return ('Sprayboard session')
    } else {
      return (`Didn't sprayboard`)
    }
  }
  return (
    <div className='send-item'>
      <div className='send-item-buttons'>
        <div>
          <h3>{trainingSessions.createdAt}</h3>
          {/* {ifSent()} */}
        </div>
        <div className='div-padding-1'></div>

        <div>
          <button onClick={() => dispatch(updateTrainingSession(trainingSessions._id))} className='close'>
            <GrUpdate />
          </button>
          <button onClick={() => dispatch(deleteTrainingSession(trainingSessions._id))} className='close margin-side'>
            <AiFillDelete />
          </button>
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'><p>
          Session Length: <b>{trainingSessions.durationMinutes}</b> minutes
        </p>
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'>
          {hangBoard()}
        </div>
        <div className='div-padding-1'></div>
        <div className='send-item-grades-div'><p>
          Hangboard Notes: <b>{trainingSessions.hangBoardNotes}</b>
        </p>
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'>
          <p>
            Board Training:</p>
          <ul>
            <li><b>{kelterBoard()}</b></li>
            <li><b>{moonBoard()}</b></li>
            <li><b>{sprayBoard()}</b></li>
          </ul>

        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'>
          <p>
            {liftWeights()}
          </p>
        </div>
        <div className='div-padding-1'></div>
        <div className='send-item-grades-div'>
          <p>
            Total Sessions: <b>{trainingSessions.rating}</b>
          </p>
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'>
          <p>
            Training Board Notes: <b>{trainingSessions.trainingBoardNotes}</b>
          </p>
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'><p>
          Training Notes: <b>{trainingSessions.trainingNotes}</b>
        </p>
        </div>
      </div>
    </div>
  )
}

export default TrainingSessionItem