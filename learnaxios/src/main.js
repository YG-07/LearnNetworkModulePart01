import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios.get('http://123.207.32.32:8000/home/multidata')
// .then(res => {
//   console.log('get',res);
// })

// 使用全局的axios和对应的配置在进行网络请求
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'post'
// }).then(res => {
//   console.log('post',res);
// })

/*
axios({
  // url: 'http://123.207.32.32:8000/home/data?type=sell&page=3'
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type:'pop',
    page:3
  }
}).then(res => {
  console.log(res);
})
*/

// 并发请求
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params: {
//     type:'sell',
//     page:5
//   }
// })]).then(results => {
//   console.log(results);
// })

//ES6 数组的解构赋值
// })]).then(([r1,r2]) => {
//   console.log(r1);
//   console.log(r2);
// })

// axios.spread将数组展开成多个
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params: {
//     type:'sell',
//     page:5
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios.spread将数组展开成多个
// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url:'/home/data',
//   params: {
//     type:'sell',
//     page:5
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// 4. 创建axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// 5. 封装自定义的request模块
import {request} from './network/request'

// 方法二
request({
  url: '/home/multidata'
}, res => {
  console.log(res);
}, err => {
  console.log(err);
})

// 方法二 优化
// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success: res => {
//     console.log(res);
//   },
//   failure: err => {
//     console.log(err);
//   }
// })

// 方法三 Promise
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })