import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import axios from 'axios';
import 'normalize.css';
import App from './App';
import router from './router';
import layoutAdmin from './layouts/layout-admin';
import store from './store';

const instanceAcl = axios.create({
	baseURL: process.env.ACL_URL,
});

const instance = axios.create({
	baseURL: process.env.GIT_URL,
	headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

Vue.use(Vuetify);
Vue.prototype.$httpAcl = instanceAcl;
Vue.prototype.$http = instance;
Vue.config.productionTip = false;
Vue.component('layout-admin', layoutAdmin);

/* eslint-disable no-new */
new Vue({
	store,
	el: '#app',
	router,
	render: h => h(App),
});
