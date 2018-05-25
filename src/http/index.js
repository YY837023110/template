/**
 * 作用：对axios数据请求插件进一步封装
 * 前端只需要传参数，拿结果即可
 */

import servers from './server'
// import config from './../config'

function Get(url, par, callback) {
  par = par || ''
  servers.GetMethods (url, par, callback)
}
function Post(url, par, callback) {
  par = par || ''
  servers.PostMethods (url, par, callback)
}

export { Get,Post }
