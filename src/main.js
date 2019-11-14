
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(ElementUI,{size:'small',zIndex:3000})
var store=new Vuex.Store({
  state:{
    list:[
        {siteAddress:"https://www.jd.com/",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东",show:true,dispd:false},
        {siteAddress:"https://www.tmall.com/",pictureAddress:"https://www.tmall.com/favicon.ico",name:"天猫",show:true,dispd:false},
        {siteAddress:"http://www.ctrip.com/",pictureAddress:"http://www.ctrip.com/favicon.ico",name:"携程",show:true,dispd:false},
        {siteAddress:"https://news.qq.com/",pictureAddress:"https://news.qq.com/favicon.ico",name:"腾讯新闻",show:true,dispd:false},
        {siteAddress:"https://translate.google.cn/",pictureAddress:"https://translate.google.cn/favicon.ico",name:"谷歌翻译",show:true,dispd:false},
    ],
    cound:false
  },
  mutations:{
        Addpicture(state,icon)
        {
            state.list.push(icon)
            const parsed=JSON.stringify(state.list)
            localStorage.setItem('Picture',parsed)
        },
        disp(state)
        {
          state.cound=!state.cound
        },
        Gainpicture(state){
          if(localStorage.getItem('Picture')!=null)
          {
            state.list=JSON.parse(localStorage.getItem('Picture'))
          }
        },
        Deletepicture(state){
          for(var i =state.list.length-1;i>=0;i--)
          {
            if(!state.list[i].show)
            {
              state.list.splice(i,1)
            }
          }
          const parsed=JSON.stringify(state.list)
          localStorage.setItem('Picture',parsed)
        }
  },
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
