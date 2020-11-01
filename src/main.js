import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import{Button, Tabbar, TabItem, TabContainer, 
  TabContainerItem, Header, Navbar, Loadmore,
   Cell, Spinner, InfiniteScroll, Search, 
   Switch, Swipe, SwipeItem} from 'mint-ui'
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
Vue.component(Cell.name, Cell);
Vue.component(Spinner.name, Spinner);
Vue.use(InfiniteScroll);
Vue.component(Search.name, Search);
Vue.component(Switch.name, Switch);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

const instance=Axios.create({
  baseURL:'http://120.55.37.30:1338/users/',
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
