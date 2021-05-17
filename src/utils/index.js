/**
 * 防抖函数
 */
export const debounce = (fn) => {
  let timer = null
  return function(...params) {
    if(timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, params)
      timer = null
    }, 100)
  }
}