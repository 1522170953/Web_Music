import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css';
import echarts from 'echarts';


import router from './router';
import service from './service';

Vue.use(ElementUI);


// 将axios挂载到原型 ==>全局使用
Vue.prototype.service = service
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

// 路由导航守卫
router.beforeEach((to,from,next) => {
  if(!localStorage.getItem('username')){
    if(to.path !== '/login'){
      next('/login')
    }else next()
  }else{
    next()
  }
})



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
