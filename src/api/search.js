import axios from 'axios'

export const getSearchHotKeyword = () => {
  return axios.get('https://so.m.jd.com/ware/hotKeyWord.action?_format_=json', {
  }).then(res => {
    res = JSON.parse(res.data.hotKeyWord)
    if (res && res.owner) { // succeed
      return res.owner
    }
    throw new Error('没有成功获取到数据！')
  }).catch(err => {
    if (err) {
      console.log(err)
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res)
      }, 1000)
    })
  })
}
