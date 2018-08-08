import axios from 'axios'

export const getCategoryContent = (id) => {
  return axios.get(`http://www.imooc.com/api/category/content/${id}`).then(res => {
    if (res.data.code === 0) {
      return res.data
    }
    throw new Error('没有获取到数据')
  }).catch(err => {
    if (err) {
      console.log(err)
    }
  }).then(data => {                    /*返回的数据延迟一秒后返回,则使用一个loading效果*/  //eslint-disable-line
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })
  })
}
