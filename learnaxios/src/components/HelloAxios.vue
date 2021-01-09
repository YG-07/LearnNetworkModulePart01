<template>
  <p>{{category}}</p>
</template>

<script>
// 方法一，每个组件都依赖axios
  import axios from 'axios'

  export default {
    name: "HelloAxios",
    data() {
      return {
        category: ''
      }
    },
    created() {
      axios({
        url:'http://123.207.32.32:8000/category'
      }).then(res => {
        this.category = res
        // console.log(res);
      })
    }
  }
</script>

<style scoped>

</style>