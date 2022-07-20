import { useDispatch } from 'react-redux'
import { deleteSend, updateSend } from '../../features/sends/sendsSlice'
import { GrUpdate } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';
// import { updateSend } from '../../features/sends/sendsSlice'

function SendItem({ sends }) {
    const dispatch = useDispatch()

    const ifSent = () => {
        if (sends.sent) {
            return ('Climb sent!')
        } else {
            return ('Climb was not sent!')
        }
    }

    return (
        <div className='send-item'>
            <div className='send-item-buttons'>
                <div>
                    <h3>{sends.createdAt}</h3>
                    <p style={{ marginTop: '-.3rem' }}>{sends.indoorOutdoor} {sends.boulderingOrSportClimbing}</p>
                    <p style={{marginTop: '-1.2rem'}}>{ifSent()}</p>
                </div>
                <div className='div-padding-1'></div>

                <div>
                    <button onClick={() => dispatch(updateSend(sends._id))} className='close'>
                        <GrUpdate />
                    </button>
                    <button onClick={() => dispatch(deleteSend(sends._id))} className='close margin-side'>
                        <AiFillDelete />
                    </button>
                </div>
            </div>
            <div className='send-item-grades'>
                <div className='send-item-grades-div'><p>
                    Grade: <b>{sends.boulderingActualGrade}{sends.sportClimbingActualGrade}</b>
                </p>
                </div>
                <div className='div-padding-1'></div>
                <div className='send-item-grades-div'>
                    <p>
                        It felt like: <b>{sends.boulderingFeltGrade}{sends.sportClimbingFeltGrade}</b>
                    </p>
                </div>
            </div>
            <div className='send-item-grades'>
                <div className='send-item-grades-div'><p>
                    Total Attempts: <b>{sends.totalAttempts}</b>
                </p>
                </div>
                <div className='div-padding-1'></div>
                <div className='send-item-grades-div'>
                    <p>
                        Total Sessions: <b>{sends.totalSessions}</b>
                    </p>
                </div>
            </div>
            <div className='send-item-grades'>
                <div className='send-item-grades-div'><p>
                    Notes: <b>{sends.notes}</b>
                </p>
                </div>
            </div>
        </div>
    )
}

export default SendItem
