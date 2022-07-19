import { useDispatch } from 'react-redux'
import { deleteTrainingSession, updateTrainingSession } from '../../features/trainingSessions/trainingSessionSlice'
import { GrUpdate } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';

function TrainingSessionItem({ trainingSession }) {
  const dispatch = useDispatch()
  const liftWeights = () => {
    if (trainingSession.liftWeights) {
      return ('Lifted Weights')
    } else {
      return (`Didn't Lifted Weights`)
    }
  }
  const hangBoard = () => {
    if (trainingSession.hangBoard) {
      return ('HangBoard session')
    } else {
      return (`Didn't hangboard`)
    }
  }
  const kelterBoard = () => {
    if (trainingSession.kelterBoard) {
      return ('KelterBoard session')
    } else {
      return (`Didn't kelterboard`)
    }
  }
  const moonBoard = () => {
    if (trainingSession.moonBoard) {
      return ('Moonboard session')
    } else {
      return (`Didn't moonboard`)
    }
  }
  const sprayBoard = () => {
    if (trainingSession.sprayBoard){
      return('Sprayboard session')
    } else {
      return(`Didn't sprayboard`)
    }
  }
  return (
    <div className='send-item'>
      <div className='send-item-buttons'>
        <div>
          <h3>{trainingSession.createdAt}</h3>
          {/* {ifSent()} */}
        </div>
        <div className='div-padding-1'></div>

        <div>
          <button onClick={() => dispatch(updateTrainingSession(trainingSession._id))} className='close'>
            <GrUpdate />
          </button>
          <button onClick={() => dispatch(deleteTrainingSession(trainingSession._id))} className='close margin-side'>
            <AiFillDelete />
          </button>
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'><p>
          Session Length: <b>{trainingSession.durationMinutes}</b>
        </p>
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'><p>
          Hangboard Notes: <b>{trainingSession.hangBoardNotes}</b>
        </p>
        </div>
        <div className='div-padding-1'></div>
        <div className='send-item-grades-div'>
          {hangBoard()}
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'><p>
          Board Training:
          <ul>
            {kelterBoard()}
            {moonBoard()}
            {sprayBoard()}
          </ul>
        </p>
        </div>
        <div className='div-padding-1'></div>
        <div className='send-item-grades-div'>
          <p>
            Training Board Notes: <b>{trainingSession.trainingBoardNotes}</b>
          </p>
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'><p>
          {liftWeights()}
        </p>
        </div>
        <div className='div-padding-1'></div>
        <div className='send-item-grades-div'>
          <p>
            Total Sessions: <b>{trainingSession.rating}</b>
          </p>
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'><p>
          Training Notes: <b>{trainingSession.trainingNotes}</b>
        </p>
        </div>
      </div>
    </div>
  )
}

export default TrainingSessionItem