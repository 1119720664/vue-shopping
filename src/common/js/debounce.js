export const debounce = (func, delay = 200) => {           /*函数节流*/ //eslint-disable-line
  let timer = null
  return function (...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this.args)
    }, delay)
  }
}
