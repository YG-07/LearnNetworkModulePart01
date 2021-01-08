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