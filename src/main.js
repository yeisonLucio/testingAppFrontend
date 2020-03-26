import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import 'material-design-icons/iconfont/material-icons.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import App from './App.vue';
import VueCookies from 'vue-cookies';
import {store} from './store/store';

Vue.use(VueRouter);
Vue.use(VueCookies);
Vue.use(BootstrapVue);
const router = new VueRouter({
    routes
}) 

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})