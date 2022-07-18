import axios from 'axios'

const API_URL = '/api/send/'

// Create new send
const createSend = async (sendData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL + 'sends', sendData, config)

  return response.data
}

// Get user sends
const getSends = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + 'sends', config)

  return response.data
}

// Delete user send
const deleteSend = async (sendId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + 'sends/' + sendId, config)

  return response.data
}

// Update sends

const sendService = {
  createSend,
  getSends,
  deleteSend,
}

export default sendService
