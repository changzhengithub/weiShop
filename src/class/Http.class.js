import axios from 'axios'
import Url from './url.class.js'
export default class Http {
  successCallback = null
  failCallback = null
  defaultCallback = null
  static send(args) {
    let instance = new Http()
    // let headers = {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
    let headers = {
      'Access-Control-Allow-Origin': '*'
    }
    
    args.data = args.data ? args.data : {}
    axios({
      url: Url[args.url],
      method: 'post',
      baseURL: 'http://192.168.0.169:8080',
      headers: headers,
      params: args.data
    }).then(response => {
      if (instance.successCallback) instance.successCallback(response.data)
    }).catch((response) => {
      if (instance.failCallback) instance.failCallback(response)
    })
    return instance
  }
  success(callback) {
    this.successCallback = callback
    return this
  }
  fail(callback) {
    this.failCallback = callback
    return this
  }
}