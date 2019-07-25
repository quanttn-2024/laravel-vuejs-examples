import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import routes from './routes';
import VueI18n from 'vue-i18n';
import enMessage from '@/lang/en.json';

require('./bootstrap');

Vue.use(VueRouter);
Vue.use(VueI18n);

const messages = {
    en: enMessage,
};

const router = new VueRouter({
    mode: 'history',
    routes,
});

const i18n = new VueI18n({
    locale: 'en',
    messages,
    fallbackLocale: 'en',
});

new Vue({
    el: '#app',
    store,
    i18n,
    render: h => h(App),
    router,
});
