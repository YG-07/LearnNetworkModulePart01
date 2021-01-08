import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

axios.get('http://123.207.32.32:8000/home/multidata')
.then(res => {
  console.log('get',res);
})

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
axios.all([axios({
  url:'http://123.207.32.32:8000/home/multidata'
}),axios({
  url:'http://123.207.32.32:8000/home/data',
  params: {
    type:'sell',
    page:5
  }
})]).then(results => {
  console.log(results);
})

//ES6 数组的解构赋值
// })]).then(([r1,r2]) => {
//   console.log(r1);
//   console.log(r2);
// })

// 将数组展开成多个
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