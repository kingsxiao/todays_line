<template>
  <div class="Search">
    <Header>
      <button @click="back()">
        <img src="@/assets/images/back.png" alt="" class="left" />
      </button>
      <div>
        <input type="text" v-model="value" />
      </div>
      <button class="right" @click="searchNews()">搜索</button>
    </Header>
    <div class="record" v-show="!show">
      <ul>
        <li><router-link to="#">英雄联盟S10</router-link></li>
        <li><router-link to="#">英雄联盟S10</router-link></li>
      </ul>
      <ul>
        <li>
          <span>历史记录</span>
        </li>
        <li><img src="@/assets/images/delete.png" alt="" /></li>
        <li><router-link to="#">英雄联盟S10</router-link></li>
        <li><router-link to="#">英雄联盟S10</router-link></li>
        <li><router-link to="#">英雄联盟S10</router-link></li>
        <li><router-link to="#">英雄联盟S10</router-link></li>
        <li><router-link to="#">英雄联盟S10</router-link></li>
        <li><router-link to="#">英雄联盟S10</router-link></li>
        <li><router-link to="#">英雄联盟S10</router-link></li>
        <li><router-link to="#">英雄联盟S10</router-link></li>
        <li><router-link to="#">英雄联盟S10</router-link></li>
        <li><router-link to="#">英雄联盟S10</router-link></li>
      </ul>
      <ul>
        <li>
          <span>猜你想搜</span>
        </li>
        <li><img src="@/assets/images/shield.png" alt="" /></li>
        <li><router-link to="#">英雄联盟S10</router-link></li>
        <li><router-link to="#">英雄联盟S10</router-link></li>
      </ul>
    </div>
    <div class="SearchResult" :style="{ height }" v-show="show">
      <mt-loadmore
        :top-method="loadTop"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        :autoFill="false"
        :bottomDistance="100"
        :bottomPullText="'上拉加载更多'"
        ref="loadmore"
      >
        <ul>
          <li v-for="el in arr" :key="el.id">
            <router-link :to="'/detail/News/' + el.id">
              <figure>
                <img :src="el.src" alt="" />
                <figcaption>
                  <h4>{{ el.title }}</h4>
                  <p>{{ el.content }}</p>
                </figcaption>
              </figure>
              <i class="el-icon-arrow-right"></i>
            </router-link>
          </li>
          <mt-spinner
            style="text-align: center"
            type="fading-circle"
            v-show="flag"
            color="red"
          ></mt-spinner>
        </ul>
      </mt-loadmore>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus === 'toploading'">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Qs from "qs";
import { url, windowSize } from "../components/public";
import { Toast } from "mint-ui";
export default {
  name: "Search1",
  data() {
    return {
      arr1: [
        "学校党委理论学习中心组专题学习习近平总书记给中国石油大学",
        "bbb北京师范大学张立教授及其合作团队共同揭示大熊猫分布区内大型食肉动物种群下降与分布区退缩的影响因素",
        "[研讨]外国语言文学学院举办第一期外语课程思政云端论坛",
      ],
      value: "学校党委理论学习中心组专题学习习近平总书记给中国石油大学",
      show: false,
      arr: [],
      allLoaded: false,
      topStatus: "",
      bottomStatus: "",
      flag: false,
      toploading: true,
      height: 0,
    };
  },
  mounted() {
    this.changeValue();
    this.height = windowSize().height - 40 - 4 + "px";
    this.loadBottom();
    this.show = this.$store.state.showResult;
  },
  methods: {
    back() {
      this.$store.state.showResult = false;
      this.$router.go(-1);
    },
    changeValue() {
      this.arr1.forEach((el) => {
        setTimeout(() => {
          this.value = el;
        }, 3000);
      });
    },
    searchNews() {
      this.show = true;
      this.$store.commit("changeShowResult", this.show);
      this.loadBottom();
    },
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
      this.arr = [];
      this.data(true);
    },
    loadBottom() {
      this.loadMore();
      this.$refs.loadmore.onBottomLoaded();
    },
    loadMore() {
      this.flag = true;
      this.data(false);
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    data(bool) {
      this.allLoaded = true;
      let start = bool ? 0 : this.arr.length;
      let keyword = this.value;
      const size = 7;
      const json = {
        keyword,
        start,
        size,
      };
      const data = Qs.stringify(json);
      this.$axios.post("searchNews", data).then((arr) => {
        console.log(arr);
        if (arr.length === 0) {
          this.flag = false;
          Toast({
            message: "已经没有数据啦！",
            position: "botttom",
            duration: 5000,
          });
          return (this.allLoaded = false);
        }
        let arrTemp = arr.map((el) => {
          let src = el.content.match(/src="[^"]+/)[0].substr(5);
          el.src = src;
          el.content = el.content.replace(/<[^>]+>/g, "");
          return el;
        });
        if (this.arr.length === 0) {
          this.arr = arrTemp;
          this.allLoaded = false;
          this.flag = false;
        } else this.arr = [...arrTemp, ...this.arr];
        this.allLoaded = false;
        this.flag = false;
      });
    },
  },
  components: {
    Header,
  },
};
</script>
<style lang="less" scoped>
div.Search {
  div.Header {
    position: fixed;
    font-size: 12px;
    height: 40px;
    background: white;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      background: white;
      outline: none;
      border: none;
      img {
        width: 1.4em;
        margin-left: -10px;
        vertical-align: middle;
        margin-right: -5px;
      }
    }
    div {
      flex: 8;

      input {
        margin-left: 0%;
        border-radius: 15px;
        outline: none;
        border: none;
        height: 30px;
        width: 95%;
        position: relative;
        padding-left: 10%;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        background: #eee;
      }

      &::after {
        content: "";
        position: absolute;
        left: 13%;
        top: 50%;
        transform: translateY(-50%);
        width: 1.4em;
        height: 1.4em;
        background: url("../assets/images/search.png");
        background-size: cover;
      }
    }
    button.right {
      width: 40px;
      height: 40px;
      background: white;
      outline: none;
      border: none;
      color: black;
      line-height: 40px;
      padding-right: 10px;
    }
  }
  div.record {
    position: absolute;
    top: 40px;
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: calc(100%-10px);
      margin: 10px 0 10px 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;

      li {
        width: 50%;
        height: 1.7em;
        line-height: 1.7em;
        a {
          text-decoration: none;
          color: black;
        }
        span {
          width: 100%;
          color: #888;
          height: 1.7em;
          line-height: 1.7em;
        }
        img {
          width: 1em;
          height: 1em;
          vertical-align: middle;
          margin-left: 140px;
        }
      }
    }
  }
  div.SearchResult {
    position: absolute;
    top: 40px;
    overflow: scroll;
    ul {
      margin-top: 10px;
      li {
        list-style: none;
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
        padding-bottom: 6px;
        a {
          color: #333;
          text-decoration: none;
          display: flex;
          align-items: center;
          figure {
            align-items: center;
            flex: 9;
            display: flex;
            img {
              width: 80px;
              height: 80px;
            }
            figcaption {
              flex: 4;
              h4 {
                margin: 0;
                color: rgb(11, 6, 36);
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                margin-bottom: 4px;
              }
              p {
                font-size: 13px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                line-height: 1.5em;
                height: 4.5em;
                overflow: hidden;
              }
            }
          }
        }
        i {
          flex: 1;
        }
      }
    }
  }
}
</style>
