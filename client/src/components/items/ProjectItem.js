import { useDispatch } from 'react-redux'
import { deleteProject, updateProject } from '../../features/climbingProjects/projectsSlice'
import { GrUpdate } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';

function ProjectItem({ projects }) {
  const dispatch = useDispatch()
  const ifSent = () => {
    if (projects.sendProject === 'true') {
      return ('Project sent!')
    } else {
      return ('Project was not sent!')
    }
  }
  return (
    <div className='send-item'>
      <div className='send-item-buttons'>
        <div>
          <h3>{projects.createdAt}</h3>
          {ifSent()}
        </div>
        <div className='div-padding-1'></div>

        <div>
          <button onClick={() => dispatch(updateProject(projects._id))} className='close'>
            <GrUpdate />
          </button>
          <button onClick={() => dispatch(deleteProject(projects._id))} className='close margin-side'>
            <AiFillDelete />
          </button>
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'><p>
          Grade: <b>{projects.actualGrade}</b>
        </p>
        </div>
        <div className='div-padding-1'></div>
        <div className='send-item-grades-div'>
          <p>
            It felt like: <b>{projects.feltGrade}</b>
          </p>
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'><p>
          Total Attempts: <b>{projects.totalAttempts}</b>
        </p>
        </div>
        <div className='div-padding-1'></div>
        <div className='send-item-grades-div'>
          <p>
            Total Sessions: <b>{projects.totalSessions}</b>
          </p>
        </div>
      </div>
      <div className='send-item-grades'>
        <div className='send-item-grades-div'><p>
          Notes: <b>{projects.notes}</b>
        </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem