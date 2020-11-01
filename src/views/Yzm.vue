<template>
  <div class="Login">
    <Header>
      <mt-header fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </Header>

    <img src="" alt="" />
    <strong>输入验证码</strong>
    <span>验证码已发送至+86{{phone}}</span>
    <div class="input">
      <select name="" id="">
        <option value="+86">+86</option>
      </select>
      <input type="number" placeholder="手机号" />
    </div>
    <span>未注册的手号验证通过后将自动注册</span>
    <button ref="getYzm" @click="getCaptcha">获取短信验证码</button>
    <div class="icon">
      <img src="@/assets/images/wechat.png" alt="" />
      <img src="@/assets/images/more.png" alt="" />
    </div>
    <div class="bottom">
      <router-link to="/">隐私设置</router-link>
      <router-link to="/">遇到问题</router-link>
    </div>
    <p>{{ captcha }}</p>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Login",
  data() {
    return {
      json: { username: "", password: "", capthcha: "" },
      phone: "",
      captcha: 0,
    };
  },
  mouted() {},
  methods: {
    getCaptcha() {
      this.$axios.get("getCaptcha").then((rs) => {
        this.captcha = rs;
      });
    },
  },
  components: {
    Header,
  },
};
</script>
<style lang="less" scoped>
div.Login {
  > div.Header {
    height: 0;
    > header {
      background: white;
      color: black;
    }
  }
  margin: 50px auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > strong {
    line-height: 40px;
    font-size: 28px;
  }
  > div.input {
    width: 100%;
    height: 40px;
    margin-top: 50px;
    border-bottom: 2px solid #aaa;
    > select {
      font-size: 22px;
      width: 20%;
      height: 40px;
      border: none;
      outline: none;
      background: white;
    }
    > input {
      width: 80%;
      height: 40px;
      border: none;
      outline: none;
      font-size: 23px;
    }
  }
  > span {
    font-size: 12px;
    color: #999;
    margin: 15px 0;
  }
  > button {
    width: 100%;
    height: 40px;
    background: #fc8a8e;
    border-radius: 5px;
    outline: none;
    border: 1px solid;
    color: white;
  }
  > div.icon {
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translate(-50%);
    > img {
      width: 20px;
      height: 20px;
      margin: 5px;
      display: inline-block;
      font-size: 15px;
    }
  }
  > div.bottom {
    font-size: 12px;
    position: absolute;
    left: 50%;
    bottom: 25px;
    transform: translate(-50%);
    &::after {
      content: "";
      position: absolute;
      width: 2px;
      height: 2px;
      background: black;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    a {
      text-decoration: none;
      color: black;
      margin: 10px;
    }
  }
}
</style>

