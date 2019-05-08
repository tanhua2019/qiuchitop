import axios from 'axios'
import store from '@/store'

// 创建axios实例
const service = axios.create({// api 的 base_url
  timeout: 5000 // 请求超时时间
})


//Axios请求拦截器
service.interceptors.request.use(config => {
  if (localStorage.getItem("userToken")) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = localStorage.getItem("userToken");
  }
  return config
}, error => {
  return Promise.reject(error)
})

export default service
