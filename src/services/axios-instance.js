import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL

const axiosInstance = axios.create({
  baseURL,
})

axiosInstance.interceptors.request.use(
  function (config) {
    const token = undefined
    return {
      ...config,
      headers: {
        ...config.headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response.data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const { response: { status = null } = {} } = error

    if (status === 401) {
      // clear all the token stored in local storage
      // navigate to login screen
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
