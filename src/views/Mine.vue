<template>
  <div class="Mine">
    <Header>
      <mt-header fixed>
        <router-link to="/" slot="left">
          <img src="@/assets/images/scan.png" alt="" />
        </router-link>
        <router-link to="/Setting" slot="right">
          <img src="@/assets/images/setting.png" alt="" />
        </router-link>
      </mt-header>
    </Header>
    <div v-if="!isLogin" class="unlogin">
      <router-link to="/Login">
        <div class="ball">登录</div>
      </router-link>
    </div>
    <div v-else class="logined">
      <div class="user">
        <img :src="portrait" alt="头像" />
        <h4>{{nickname}}</h4>
        <span>个人主页</span>
      </div>
      <ul>
        <li>
          <router-link to="#"><span>{{headlines}}</span> <span>头条</span></router-link>
        </li>
        <li>
          <router-link to="#"><span>{{liked}}</span> <span>获赞</span></router-link>
        </li>
        <li>
          <router-link to="#"><span>{{fans}}</span> <span>粉丝</span></router-link>
        </li>
        <li>
          <router-link to="#"><span>{{describe}}</span> <span>关注</span></router-link>
        </li>
      </ul>
    </div>
    <div class="box">
      <ul>
        <li>
          <router-link to="/"
            ><img src="@/assets/images/message.png" alt="" /><span
              >消息通知</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><img src="@/assets/images/collect.png" alt="" /><span
              >收藏</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><img src="@/assets/images/history.png" alt="" /><span
              >浏览历史</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><img src="@/assets/images/download.png" alt="" /><span
              >下载管理</span
            ></router-link
          >
        </li>
      </ul>
    </div>
    <div class="publish">
      <span>你创作的，就是头条</span>
      <button>+ 发布</button>
    </div>
    <div class="more">
      <ul>
        <li>
          <router-link to="/"
            ><img src="@/assets/images/feedback.png" alt="" /><span
              >用户反馈</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><img src="@/assets/images/purse.png" alt="" /><span
              >钱包</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><img src="@/assets/images/adv.png" alt="" /><span
              >广告推广</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><img src="@/assets/images/datatrafic.png" alt="" /><span
              >免流量服务</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><img src="@/assets/images/comment.png" alt="" /><span
              >评论</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><img src="@/assets/images/like.png" alt="" /><span
              >点赞</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><img src="@/assets/images/nightmodel.png" alt="" /><span
              >夜间模式</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><img src="@/assets/images/describe.png" alt="" /><span
              >关注</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><img src="@/assets/images/order.png" alt="" /><span
              >订单</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><img src="@/assets/images/shoppingcart.png" alt="" /><span
              >购物车</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><img src="@/assets/images/welfare.png" alt="" /><span
              >圆梦公益</span
            ></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Setting from "./Setting";
import Qs from 'qs';
export default {
  name: "Mine",
  data() {
    return {
      isLogin: false,
      nickname: '',
      liked: 0,
      describe: 0,
      fans: 0,
      headlines: 0,
      phone: 0,
      portrait: require('@/assets/images/portrait.jpg')
    };
  },
  mounted(){
    this.isLogin = this.$store.state.isLogin;
    this.phone = this.$store.state.phone; 
    this.getInfo()
  },
  methods: {
    getInfo(){
      const data = Qs.stringify({phone:this.phone});
      this.$axios.post('getUserInfo', data).then(arr=>{
        this.nickname = arr.nickname;
        this.liked = arr.liked;
        this.describe = arr.describe;
        // this.portrait = require('@/assets/images/'+arr.portrait);
        this.fans = arr.fans;
        this.headlines = arr.headlines;
      })
    }
  },
  components: {
    Header,
    Setting,
  },
  // beforeRouteEnter(to, from, next) {
  //   if (sessionStorage.getItem("token")) {
  //     console.log("通过");
  //     next();
  //   } else {
  //     console.log("拦截");
  //     next("/Login");
  //   }
  // },
};
</script>
<style lang="less" scoped>
div.Mine {
  width: 100%;
  height: 673px;
  background: rgb(245, 245, 245);
  > div.Header {
    > header {
      height: 40px;
      background: rgb(245, 245, 245);
      a {
        display: block;
        margin-top: 0px;
        img {
          width: 20px;
        }
      }
    }
  }
  > div.unlogin {
    margin-top: 40px;
    width: 100%;
    height: 120px;
    background: rgb(245, 245, 245);
    > a {
      color: white;
      text-decoration: none;
      > div.ball {
        margin: 0 auto;
        width: 100px;
        height: 100px;
        background: #ff3539;
        border-radius: 50%;
        text-align: center;
        line-height: 100px;
      }
    }
  }
  > div.logined {
    margin-top: 40px;
    margin-bottom: 15px;
    div.user {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: 3em;
        height: 3em;
        border-radius: 50%;
        border: 1px solid black;
      }
      h4 {

      }
      span {
        font-size: 12px;
      }
    }
    ul {
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      font-size: 12px;
      li {
        a {
          text-decoration: none;
          color: black;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          span{
            &:nth-of-type(1){
              font-weight: bold;
              margin-bottom: 5px;
            }
          }
        }
      }
    }
  }
  > div.box {
    border-radius: 5px;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      height: 70px;
      width: 90%;
      margin: 0 auto;
      background: white;

      li {
        width: 25%;
        font-size: 12px;
        text-align: center;
        a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: black;
          height: 70px;
          img {
            width: 25%;
          }
          span {
            line-height: 30px;
          }
        }
      }
    }
  }
  > div.publish {
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    width: 90%;
    margin: 10px auto;
    background: white;
    span {
      font-size: 14px;
      margin-left: 10px;
    }
    button {
      margin-right: 10px;
      border: 1px solid red;
      border-radius: 13px;
      background: white;
      color: #e55050;
      width: 70px;
      height: 25px;
      outline: none;
    }
  }
  > div.more {
    border-radius: 5px;
    margin-top: 10px;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      list-style: none;
      height: 210px;
      width: 90%;
      margin: 0 auto;
      background: white;

      li {
        width: 25%;
        font-size: 12px;
        text-align: center;
        a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: black;
          line-height: 70px;
          img {
            width: 25%;
          }
          span {
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
