import originJSONP from 'jsonp'

export default (url, data, options) => {
  url += (url.indexOf('?') < 0 ? '?' : '&') + parseParam(data)
  console.log(url)
  return new Promise((resolve, reject) => {
    originJSONP(url, options, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const parseParam = param => {
  let params = []
  for (const key in param) {
    params.push([key, param[key]])
  }
  return params.map(value => value.join('=')).join('&')
}
