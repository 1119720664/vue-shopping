import axios from 'axios'

export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider').then(res => {
    if (res.data.code === 0) {
      return res.data.slider
    }
    throw new Error('没有获取到数据')
  }).catch(err => {
    if (err) {
      console.log(err)
    }
    return [
      {
        'linkUrl': 'https://www.imooc.com',
        'picUrl': require('common/image/404.png')
      }
    ]
  }).then(data => {                    /*返回的数据延迟一秒后返回,则使用一个loading效果*/  //eslint-disable-line
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })
  })
}
