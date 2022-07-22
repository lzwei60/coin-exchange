import qs from 'qs';
import axios from '../axios/index'

export class Request {
  /**
   * get 方法
   * @param {string} url  路径
   * @param {object} params 参数
   * @returns 
   */
  static get = (url: string, params?: any) => {
    return new Promise((resolve,reject) => {
      axios.get(url, { params: params }).then(res =>{
        resolve(res);
      }).catch(err => {
        reject(err)
      })
    })
  }
  /**
   * post 方法
   * @param {string} url  路径
   * @param {object} params 参数
   * @returns 
   */
  static post = (url: string, params?: any) => {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params)).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
}