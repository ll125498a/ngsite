import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    list: [
      {
        siteAddress: 'https://www.jd.com/',
        pictureAddress: 'http://www.jianfast.com/images/siteimg/01.png',
        name: '京东',
        show: true,
        dispd: false
      },
      {
        siteAddress: 'https://www.tmall.com/',
        pictureAddress: 'https://www.tmall.com/favicon.ico',
        name: '天猫',
        show: true,
        dispd: false
      },
      {
        siteAddress: 'http://www.ctrip.com/',
        pictureAddress: 'http://www.ctrip.com/favicon.ico',
        name: '携程',
        show: true,
        dispd: false
      },
      {
        siteAddress: 'https://news.qq.com/',
        pictureAddress: 'https://news.qq.com/favicon.ico',
        name: '腾讯新闻',
        show: true,
        dispd: false
      },
      {
        siteAddress: 'https://translate.google.cn/',
        pictureAddress: 'https://translate.google.cn/favicon.ico',
        name: '谷歌翻译',
        show: true,
        dispd: false
      }
    ],
    cound: false
  },
  mutations: {
    addPicture(state, icon) {
      state.list.push(icon)
      const parsed = JSON.stringify(state.list)
      localStorage.setItem('Picture', parsed)
    },
    disp(state) {
      state.cound = !state.cound
    },
    gainPicture(state) {
      if (localStorage.getItem('Picture') != null) {
        state.list = JSON.parse(localStorage.getItem('Picture'))
      }
    },
    deletePicture(state) {
      for (var i = state.list.length - 1; i >= 0; i--) {
        if (!state.list[i].show) {
          state.list.splice(i, 1)
        }
      }
      const parsed = JSON.stringify(state.list)
      localStorage.setItem('Picture', parsed)
    }
  }
})
