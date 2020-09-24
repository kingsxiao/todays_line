import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import{Button, Tabbar, TabItem, TabContainer, 
  TabContainerItem, Header, Navbar, Loadmore} from 'mint-ui'
import 'mint-ui/lib/style.css'
import Axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.use(ElementUI);
Vue.component(Header.name, Header);
Vue.component(Loadmore.name, Loadmore);

const instance=Axios.create({
  baseURL:'http://localhost:1338/users/',
  // baseURL:'/users/',
  timeout:5000
})
instance.interceptors.request.use(config=>{
  //对config进行处理
  return config
}, err => {
});
instance.interceptors.response.use(res => { //响应拦截
  // console.log(res);
  return res.data;
}, err => {
});
Vue.prototype.$axios=instance

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
