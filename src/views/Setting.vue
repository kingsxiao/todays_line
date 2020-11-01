<template>
  <div class="Setting">
    <Header>
      <mt-header title="设置" fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </Header>
    <div class="option">
      <ul>
        <li><router-link to="/">隐私</router-link><img src="@/assets/images/rightarrow.png" alt=""></li>
      </ul>
      <ul>
        <li><router-link to="#">夜间模式</router-link><mt-switch v-model="switchOne"></mt-switch></li>
        <li><router-link to="/">字体大小</router-link><span>中</span><img src="@/assets/images/rightarrow.png" alt=""></li>
      </ul>
      <ul>
        <li><router-link to="/">清除缓存</router-link><span>132.14MB</span><img src="@/assets/images/rightarrow.png" alt=""></li>
        <li><router-link to="/">网络设置</router-link><img src="@/assets/images/rightarrow.png" alt=""></li>
        <li><router-link to="/">推送通知设置</router-link><img src="@/assets/images/rightarrow.png" alt=""></li>
        <li><router-link to="#">提示音开关</router-link><mt-switch v-model="switchTwo"></mt-switch></li>
        <li><router-link to="#">通知搜索栏设置</router-link><mt-switch v-model="switchThree"></mt-switch></li>
      </ul>
      <ul>
        <li><router-link to="#">H5广告过滤</router-link><mt-switch v-model="switchFour"></mt-switch></li>
      </ul>
      <ul>
        <li><router-link to="/">检查版本</router-link><span>7.9.3</span><img src="@/assets/images/rightarrow.png" alt=""></li>
        <li><router-link to="/">关于头条</router-link><img src="@/assets/images/rightarrow.png" alt=""></li>
      </ul>
      <ul class="logOut" v-show="isLogin">
        <li @click="logOut()"><router-link to="#">退出登录</router-link><img src="@/assets/images/rightarrow.png" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Setting",
  data() {
    return {
      switchOne: false,
      switchTwo: false,
      switchThree: false,
      switchFour: false,
      isLogin: false
    };
  },
  mounted(){
    this.isLogin = this.$store.state.isLogin
  },
  methods: {
    logOut(){
      this.isLogin = false;
      this.$store.commit('changeLoginState', this.isLogin);
      this.$router.replace('./')
    }
  },
  components: {
    Header,
  },
};
</script>
<style lang="less" scoped>
div.Setting {
  background: rgb(245, 245, 245);
  height: 700px;
  font-size: 14px;
  > div.Header {
    > header {
      background: white;
      color: black;
    }
  }
  > div.option {
    padding-top: 40px;
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: white;
      margin: 10px 0;
      border-top: 1px solid #aaa;
      border-bottom: 1px solid #aaa;
      li {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 40px;
        width: 100%;
        line-height: 40px;
        list-style: none;
        label{
          position: absolute;
          right: 10px;
        }
        span{
          position: absolute;
          right: 20px;
          color: #aaa;
          font-size: 12px;
        }
        img{
          position: absolute;
          height: 1em;
        }
        a {
          display: block;
          float: right;
          width: 95%;
          color: black;
          text-decoration: none;
        }
        &:not(:last-child){
          a{
            border-bottom: 1px solid #aaa;
          }
        }
      }
      &.logOut{
        li{
          a{
            width: 100%;
            color: #fc8a8e;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>

