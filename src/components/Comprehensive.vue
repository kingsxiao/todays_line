<template>
  <div class="Comprehensive" :style="{ height }">
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
</template>
  

<script>
import { url, windowSize } from "./public";
import { Toast } from "mint-ui";
export default {
  name: "Comprehensive",
  data() {
    return {
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
    this.height = windowSize().height - 58 - 49 - 40 - 4 + "px";
    this.loadBottom();
    console.log(this.height)
  },
  methods: {
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
      let params = {
        params: { type: "comprehensive", size: 7, start },
      };
      this.$axios.get("getNews", params).then((arr) => {
        if (arr.length === 0) {
          this.flag = false;
          Toast({
            message: "已经没有数据啦！",
            position: "botttom",
            duration: 5000,
          });
          return this.allLoaded = false;
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
  filters: {},
};
</script>

<style scoped lang="less">
div.Comprehensive {
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
</style>
