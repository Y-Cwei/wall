import axios from 'axios'

// 超时设定
axios.defaults.timeout = 100000
axios.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.resolve(err)
})

// axios response 拦截器
axios.interceptors.response.use(res => {
  // 设置全局拦截
  const data = res.data
  switch (data.code) {
    case 400:
    case 401:
    case 403:
    case 500:
      return data
    default: // 200
      return data
  }
}, err => {
  return Promise.resolve(err)
})

const baseUrl = '/api'

export const getRequest = (url, params) => {
  return axios({
    method: 'get',
    url: `${baseUrl}${url}`,
    params
  })
}

export const postRequest = (url, data) => {
  return axios({
    method: 'get',
    url: `${baseUrl}${url}`,
    data
  })
}
