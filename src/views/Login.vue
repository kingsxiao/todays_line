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
    <strong ref="title" v-if="!phone">手机登录</strong>
    <strong ref="title" v-else>输入验证码</strong>
    <span ref="describe" v-if="!phone"
      >登录即表示同意"用户协议"和"隐私政策"</span
    >
    <span ref="describe" v-else>验证码已发送至+86{{ phone }}</span>
    <div class="input">
      <select name="" id="" ref="select" v-show="!phone">
        <option value="+86">+86</option>
      </select>
      <input
        type="text"
        v-if="!phone"
        maxlength="11"
        placeholder="手机号"
        ref="input"
        @input="changeColorOne()"
        pattern="^1[3,4,5,6,7,8,9]\d{9}"
      />
      <input
        type="text"
        v-else
        maxlength="6"
        placeholder="验证码"
        ref="input"
        @input="changeColorTwo()"
        pattern="^1[3,4,5,6,7,8,9]\d{9}"
      />
    </div>
    <span>未注册的手号验证通过后将自动注册</span>
    <button ref="getYzm" v-if="!phone" @click="getYzm" disabled>
      获取短信验证码
    </button>
    <button ref="getYzm" v-else @click="Login" disabled>确定</button>
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
import { Toast } from "mint-ui";
import Qs from "qs";
export default {
  name: "Login",
  data() {
    return {
      json:{phone: 0},
      phone: "",
      captcha: 0,
      isLogin: false,
    };
  },
  mounted() {},
  methods: {
    getYzm() {
      this.$axios.get("getCaptcha").then((rs) => {
        this.captcha = rs;
      });
      this.phone = this.$refs.input.value;
      this.json.phone = this.$refs.input.value;
      this.$refs.input.value = "";
    },
    Login() {
      this.$axios
        .get("Login")
        .then((rs) => {
          if (this.$refs.input.value === rs) {
            this.isLogin = true;
            this.$store.commit("changeLoginState", this.isLogin);
            this.$store.commit('changePhone',this.phone);
            this.$router.replace("/");
          } else {
            Toast({
              message: "验证码错误！",
              position: "botttom",
              duration: 5000,
            });
            throw '失败'
          }
        })
        .then(() => {
          const data = Qs.stringify(this.json);
          this.$axios.post("LoginInfo", data).then((res) => {
            if(res == 1){
              Toast({
              message: "已自动创建用户",
              position: "botttom",
              duration: 2000,
            })
            }else{
              Toast({
              message: "登陆成功",
              position: "botttom",
              duration: 2000,
            })
            }
          });
        }).catch(
          reason=>{
            // console.log(reason)
          }
        )
    },
    changeColorOne() {
      if (this.$refs.input.value.length == 11) {
        this.$refs.getYzm.style.background = "rgb(200,0,0)";
        this.$refs.getYzm.removeAttribute("disabled");
      } else {
        this.$refs.getYzm.style.background = "#fc8a8e";
        this.$refs.getYzm.setAttribute("disabled", null);
      }
    },
    changeColorTwo() {
      if (this.$refs.input.value.length == 6) {
        this.$refs.getYzm.style.background = "rgb(200,0,0)";
        this.$refs.getYzm.removeAttribute("disabled");
      } else {
        this.$refs.getYzm.style.background = "#fc8a8e";
        this.$refs.getYzm.setAttribute("disabled", null);
      }
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
  > p {
    display: block;
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%);
    border-radius: 15px;
    width: 30%;
    height: 30px;
    text-align: center;
    background: rgb(54, 50, 50);
    line-height: 30px;
    color: white;
  }
}
</style>

