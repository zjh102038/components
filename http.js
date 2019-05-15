import { getCookie } from './cookie'
import { message } from 'antd'
const http = {
  get(url, params) {
    let arr = [];
    for (let i in params) {
      arr.push(i + '=' + params[i])
    };
    let str = arr.join('&');
    url = url + '?' + str;
    return new Promise((resolve, reject) => {
      fetch(url, {
        headers: {
          'Authorization': getCookie('token')
        }
      }).then(res => res.json()).then(res => { resolve(res) }).catch(err=>{
        reject(err)
      })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': ['application/json','multipart/form-data'],
          'Authorization': getCookie('token')
        },
        body: JSON.stringify(params)
      }).then(res => res.json()).then((res) => { resolve(res) }).catch(err => {
        reject(err)
      })
    })
  },
  delete(url, params) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
        body:JSON.stringify(params)
      }).then(res => res.json()).then(res => resolve(res))
    })
  },
  put(url, params) {
    let arr = [];
    for (let i in params) {
      arr.push(i + '=' + params[i])
    };
    let str = arr.join('&');
    url = url + '?' + str;
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        }
      }).then(res => res.json()).then(res => resolve(res))
    })
  }
}
export default http

