import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import vueStore from './store'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store: vueStore
})
