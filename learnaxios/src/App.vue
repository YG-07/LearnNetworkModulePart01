<template>
  <div id="app">
    <p>{{result}}</p>
    <hr>
    <hello-axios/>
  </div>
</template>

<script>
// 避免直接在组件里导入网络模块，依赖性太强，维护工作量大
// 方法一
import axios from 'axios'
import HelloAxios from './components/HelloAxios'

export default {
  name: 'App',
  components: {
    HelloAxios
  },
  data() {
    return {
      result: ''
    }
  },
  created() {
    axios({
      url:'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
      this.result = res
      // console.log(res);
    })
  }
}
</script>

<style>

</style>
