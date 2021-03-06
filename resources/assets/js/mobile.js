
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
import { AlertPlugin, ToastPlugin } from 'vux'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const routes = [
    {
        'path' : 'mobile'
    }
];

const app = new Vue({
    el: '#app',
    router: router,
    render: app => app(App)
});
