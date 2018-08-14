import { SEARCH_HISTORY_KEYWORD_KEY } from 'common/js/config'
import storge from 'common/js/storage'

export const searchMixin = {
  methods: {
    $_selectItem(hotWords) {
      let keywords = storge.get(SEARCH_HISTORY_KEYWORD_KEY, [])
      if (keywords) {
        keywords = keywords.filter(val => val !== hotWords)
      }
      keywords.unshift(hotWords)
      storge.set(SEARCH_HISTORY_KEYWORD_KEY, keywords)
      location.href = `https://s.m.taobao.com/h5?event_submit_do_new_search_auction=1&_input_charset=utf-8&topSearch=1&atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&sst=1&n=20&buying=buyitnow&q=${hotWords}`
    }
  }
}
