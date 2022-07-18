import axios from 'axios'

const API_URL = '/api/climbing/'
// climbingSession

// Create new ClimbingSession
const createClimbingSession = async (climbingSessionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL + 'climbingsession', climbingSessionData, config)

  return response.data
}

// Get user ClimbingSessions
const getClimbingSessions = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + 'climbingsession', config)

  return response.data
}

// Delete user ClimbingSession
const deleteClimbingSession = async (climbingSessionId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + 'climbingsession/' + climbingSessionId, config)

  return response.data
}

const climbingSessionService = {
  createClimbingSession,
  getClimbingSessions,
  deleteClimbingSession,
}

export default climbingSessionService
