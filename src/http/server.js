/**
 * 作用：负责发送ajax请求
 */
import config from "./../config";
import axios from 'axios'
import cookie from 'vue-cookie'
var instance = axios.create(config.httpConfig);

instance.interceptors.request.use(config=>{
  //...
  return config
})


export default{
  GetMethods(url,par,cb){
    instance.get(url,{ params: par })
    .then(success => {
      cb(success.data)
    })
    .catch(error => {
       $.toast('您的网络不好')
    })
  },
  PostMethods(url,par,cb){
    instance.post(url,par)
    .then(success => {
      cb(success.data)
    })
    .catch(error => {
       $.toast('您的网络不好')
    })
  }
}