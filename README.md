# LearnNetworkModulePart01
学习 网络模块封装
Learn Network Module Encapsulation
  
### 一.资料整理来源  
coderwhy老师  B站账号：ilovecoding  
bilibili URL：https://space.bilibili.com/36139192  
视频(142-p) URL：https://www.bilibili.com/video/BV15741177Eh?p=142
  
# 二、本部分知识大纲
(数字表示视频URL分p)  
### 一、为什么选择axios网络模块
#### 1.1 了解axios
官方文档 URL:http://www.axios-js.com/zh-cn/docs/  
**Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中.**  
#### 1.2 axios的特点
* 官方在2016年11月宣布vue-resource不再是官方推荐的ajax库了，推荐使用axios.
* axios的一些功能特点：
1. 在浏览器中发送XMLHttpRequests请求
2. 在node.js中发送http请求
3. 支持Promise API
4. 拦截请求和响应
5. 转换请求和响应数据
6. 自动转换 JSON 数据 .等等
#### 1.3 axios有多种请求方式
```javaScript
axios(config)  axios.request(config)  axios.get(url[,config])
axios.delete(url[,config])  axios.head(url[,config])  
axios.post(url[,date[,config]])  axios.put(url[,date[,config]])  axios.patch(url[,date[,config]])
```
### 二、安装和使用axios
#### 2.1 创建项目
* 项目创建指令：`vue init webpack learnaxios`  
* 安装axios指令：`npm install axios@0.18.0 --save`  
#### 2.2 初步使用axios
* 请求：coderwhy 老师的项目域名：http://123.207.32.32  
* 在main.js里面导入并使用axios
```javaScript
import axios from 'axios'
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then(res => {
  console.log('Get请求',res);
})
```
#### 2.3 axios发送并发请求
* 除了直接返回一个**数组**，**ES6数组的解构**和**axios.spread**功能也差不多
```javaScript
axios.all([axios({..}),axios({..})]).then(results => {..})
//ES6 数组的解构赋值 也是Promise.all的then方法
.then(([res1,res2]) => {..})
// axios.spread拆解数组，axios.all的then
.then(axios.spread((res1, res2) => {..}))
```

### 三、axios的配置信息相关
#### 3.1 axios常见的配置
1. url（必写）:请求地址
2. method:请求方法，默认是get
3. baseURL：会添加到url前（url是绝对地址除外）。
4. transformRequest：允许我们在请求发送到服务器之前对请求的数据做出一些改动，该选项只适用于以下请求方式：put/post/patch
5. transformResponse：允许我们在数据传送到then/catch方法之前对数据进行改动
6. headers：自定义请求头信息（如设置请求头json类型）
7. params：（只有get请求设置params，其他请求需设置params,即只有get的请求参数位于url后，其他请求参数都在请求体中）params选项是要随请求一起发送的请求参数----一般链接在URL后面
8. paramsSerializer:查询对象序列化函数function（params）{}
9. data：是作为一个请求体(request body)而需要被发送的数据，该选项只适用于方法：put/post/patch在浏览器上data只能是FormData, File, Blob格式
10. timeout：设置请求超时的时间
11. withCredentials：选项表明了是否是跨域请求、默认是default
12. onUploadProgress：上传进度事件
13. onDownloadProgress：下载进度的事件
14. maxContentLength：相应内容的最大值
15. responseType:响应的数据格式json/blob/document/arraybuffer/text/stream
16. adapter:自定义请求处理function(resolve,reject,config)),
17. auth:身份验证信息,如{uname:'abc',pwd:'123'}
  
### 四、axios的实例和封装
#### 4.1 axios的实例
* 创建axios的实例，使用**axios.create()**方法  
```javaScript
// 创建axios的实例
const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})
// 用实例进行多个网络请求
instance1({...}).then(...)
```
#### 4.2 axios的封装
* 方法一：避免直接在组件里导入网络模块，`import axios from 'axios'`，依赖性太强，维护工作量大
* (正解)在src里创建`network文件夹`，创建`request.js`
#### 4.3 网络封装的另外2种方案和优化
(以下代码包括`request.js定义网络请求方法`和`main.js调用代码`)  
1. 方法二：封装**request方法**，3个参数：`配置对象、成功回调、失败回调`.(此方法传递参数太多，调用时比较复杂)
```javaScript
export function request(config, success, failure) {
  const instance = axios.create({..})
  instance(config).then(res => success(res)).catch(err => failure(err))
}
request({
  url: '/home'
}, res => {
  console.log(res);
}, err => {
  console.log(err);
})
```
2. 方法二(优化): 1个参数：`配置对象`(**基本配置**和**回调函数**等).(此方法虽然只用传递一个参数，但定义和使用时的`对象属性要保持一致`,代码量较大，不利于修改)
```javaScript
export function request(config) {
  const instance = axios.create({..})
  instance(config.baseConfig)
  .then(res => config.success(res)).catch(err => config.failure(err))
}
request({
  baseConfig: {
    url: '/home'
  },
  success: res => {
    console.log(res);
  },
  failure: err => {
    console.log(err);
  }
})
```
3.  方法三：使用ES6的Promise，一个参数：`配置对象`
```javaScript
export function request(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({..})
    instance(config)
      .then(res => resolve(res)).catch(err => reject(err))
  })
}
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
```
4. **方法三(最终优化)**: **axios.create创建**的对象返回的就是一个**Promise对象**，所以可以**直接返回axios实例**.
```javaScript
export function request(config) {
  const instance = axios.create({..})
  return instance(config)
}
//使用方法同 方法三
```
* 总结：创建**network文件夹**，使用一些js文件实现对**axios实例和模块**的封装，而不是直接在组件里使用axios实例. 这样的封装便于网络请求**模块的维护和更改**，在更换框架时不至于对该**框架的过分依赖**，使用**ES6语法的Promise方法**进行调用，`模块再怎么变换，也不用修改调用的代码`.

