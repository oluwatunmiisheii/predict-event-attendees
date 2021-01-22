// api.js
import Axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const apiClient = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// before a request is made start the nprogress
apiClient.interceptors.request.use(config => {
  nprogress.start()
  return config
})

// before a response is returned stop nprogress
apiClient.interceptors.response.use(response => {
  nprogress.done()
  return response
}, function (error) {
  nprogress.done()
  return Promise.reject(error);
})

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default apiClient
