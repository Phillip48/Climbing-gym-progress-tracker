import axios from 'axios'

const API_URL = '/api/send/'

// Create new send
const createSend = async (sendData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, sendData, config)

  return response.data
}

// Get user sends
const getSends = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user send
const deleteSend = async (sendId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + sendId, config)

  return response.data
}

const sendService = {
  createSend,
  getSends,
  deleteSend,
}

export default sendService
