// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import store from './store/index'
Vue.prototype.$axios = axios;

import '../static/UE/ueditor.config.js'　　　　
import '../static/UE/ueditor.all.min.js'　　　　
import '../static/UE/lang/zh-cn/zh-cn.js'　　　　
import '../static/UE/ueditor.parse.min.js'

import './assets/css/reset.css'
import './assets/icon/iconfont.css'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})