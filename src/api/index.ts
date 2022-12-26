import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sample-posts.coderockr.com/api',
})

export default api
