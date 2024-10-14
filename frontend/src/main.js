// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ApiTable from './components/ApiTable.vue';
import ApiPropertiesTable from './components/ApiPropertiesTable.vue';

// 引入 Bootstrap CSS 文件
import 'bootstrap/dist/css/bootstrap.min.css';
// 引入 Bootstrap JS 文件
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const routes = [
  { path: '/', redirect: '/p_apis' },
  { path: '/p_apis', component: ApiTable },
  { path: '/p_api-properties', component: ApiPropertiesTable }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app');