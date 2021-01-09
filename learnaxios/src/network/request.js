import axios from 'axios'

// 方法二request(config, success, failure)
export function request(config, success, failure) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  instance(config)
  .then(res => success(res)).catch(err => failure(err))
}

// 方法二 优化
// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance(config.baseConfig)
//   .then(res => {
//     config.success(res)
//   }).catch(err => {
//     config.failure(err)
//   })
// }

// 方法三 Promise
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     instance(config)
//       .then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//   })
// }
// 方法三 最终优化 Promise
// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   return instance(config)
// }
/*
  axios.create源码：
  export interface AxiosStatic extends AxiosInstance {
  create(config?: AxiosRequestConfig): AxiosInstance;

  export interface AxiosInstance {
  (config: AxiosRequestConfig): AxiosPromise;

  因此const instance对象返回的就是一个Promise对象
*/