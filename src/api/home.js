import axios from 'axios'
import jsonp from 'common/js/jsonp'

const shuffle = (arr) => {
  const arrLength = arr.length
  let i = arrLength
  let rndNum

  while (i--) {
    if (i !== (rndNum = Math.floor(Math.random() * arrLength))) {
      [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]]
    }
  }
  return arr
}

export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider').then(res => {
    if (res.data.code === 0) {
      let sliders = res.data.slider
      let slider = [sliders[Math.floor(Math.random() * sliders.length)]]
      /*数组随机一个,找到后放入新的数组里,筛选完成后,在打乱数组*/  //eslint-disable-line
      sliders = shuffle(sliders.filter(() => Math.random() >= 0.5))
      if (sliders.length === 0) {
        sliders = slider
      }
      return sliders
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
        }, 1000)
      })
    })
  /*当总页数大于当前页数的时候,在then下做处理并且返回,这个不做配置*/ //eslint-disable-line
}
