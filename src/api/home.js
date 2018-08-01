import axios from 'axios'
import jsonp from 'common/js/jsonp'

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

/*获取热门推荐的数据jsonp*/  //eslint-disable-line
export const getHomeRecommend = (page = 1, psize = 20) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json'
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  }
  return jsonp(url, params, {param: 'callback'})  /*返回的数据延迟一秒后返回,则使用一个loading效果*/  //eslint-disable-line
    .then(data => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(data)
        }, 13)
      })
    })
  /*当总页数大于当前页数的时候,在then下做处理并且返回,这个不做配置*/ //eslint-disable-line
}
