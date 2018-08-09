import axios from 'axios'

const CancelToken = axios.CancelToken
let cancel

export const getCategoryContent = (id) => {       /*发送完请求后,取消请求,避免多次发送*/  //eslint-disable-line
  cancel && cancel('取消了前一次的请求！')
  cancel = null
  return axios.get(`http://www.imooc.com/api/category/content/${id}`, {
    cancelToken: new CancelToken(function executor(c) {
      cancel = c
    })
  }).then(res => {
    if (res.data.code === 0) {
      return res.data
    }
    throw new Error('没有成功获取到数据！')
  }).catch(err => {
    if (axios.isCancel(err)) {
      console.log(err)
    } else {
      // handle error
      console.log(err)
    }
  })
}
