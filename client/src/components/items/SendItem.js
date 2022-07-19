import { useDispatch } from 'react-redux'
import { deleteSend } from '../../features/sends/sendsSlice'

function SendItem({ send }) {
    const dispatch = useDispatch()

    return (
        <div className='send'>
            <div>{new Date(send.createdAt).toLocaleString('en-US')}</div>
            <h2>{send}</h2>
            <button onClick={() => dispatch(deleteSend(send._id))} className='close'>
                X
            </button>
        </div>
    )
}

export default SendItem
