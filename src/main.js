
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
        {siteAddress:"https://www.baidu.com/",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东",show:true,dispd:false},
        {siteAddress:"https://www.baidu.com/",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东",show:true,dispd:false},
        {siteAddress:"https://www.baidu.com/",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东",show:true,dispd:false},
        {siteAddress:"https://www.baidu.com/",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东",show:true,dispd:false},
        {siteAddress:"https://www.baidu.com/",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东",show:true,dispd:false},
        {siteAddress:"https://www.baidu.com/",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东",show:true,dispd:false},
        {siteAddress:"https://www.baidu.com/",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东",show:true,dispd:false},
        {siteAddress:"https://www.baidu.com/",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东",show:true,dispd:false},
        {siteAddress:"https://www.baidu.com/",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东",show:true,dispd:false},
        {siteAddress:"https://www.baidu.com/",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东",show:true,dispd:false},
        {siteAddress:"https://www.baidu.com/",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东",show:true,dispd:false},
        {siteAddress:"https://www.baidu.com/",pictureAddress:"http://www.jianfast.com/images/siteimg/01.png",name:"京东",show:true,dispd:false},
    ],
    cound:false
  },
  mutations:{
    Addpicture(state,icon)
        {
            state.list.push(icon)
        },
        disp(state)
        {
          state.cound=!state.cound
        }
  }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
