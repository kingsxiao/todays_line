<template style>
  <div class="VideoCar" :style="{ height }">
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
          <figure>
            <img :src="el.src" alt="" />
            <span>{{ el.title }}</span>
            <div class="mask">
              <img src="@/assets/images/play.png" alt="" />
            </div>
          </figure>

          <div class="comment">
            <div class="left">
              <img :src="el.src" alt="" />
              <span>北碚新闻</span>
              <p>关注</p>
            </div>
            <div class="right">
              <i class="el-icon-chat-square"></i>
              <i class="el-icon-more"></i>
            </div>
          </div>
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
  name: "VideoCar",
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
        params: { size: 6, start },
      };
      this.$axios.get("getVideo", params).then((arr) => {
        if (arr.length === 0) {
          this.flag = false;
          Toast({
            message: "已经没有数据啦！",
            position: "botttom",
            duration: 5000,
          });
          return (this.allLoaded = false);
        }
        arr.forEach((el) => {
          el.src = url + "video/" + el.src;
        });
        let arrTemp = arr;
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
div.VideoCar {
  overflow: scroll;
  ul {
    margin-top: 10px;
    li {
      list-style: none;

      figure {
        color: #333;
        position: relative;
        > img {
          width: 100%;
        }
        > span {
          position: absolute;
          left: 0px;
          top: 0px;
          color: rgb(11, 6, 36);
          // display: -webkit-box;
          // -webkit-box-orient: vertical;
          // -webkit-line-clamp: 1;
          // overflow: hidden;
          color: white;
          padding: 10px;
        }
        > div.mask {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          border-radius: 50%;
          width: 6vh;
          height: 6vh;
          background: rgba(0,0,0,.4);
          img {
            width: 50%;
            height: 50%;
            position: absolute;
            left: 55%;
            top: 50%;
            transform: translate(-50%,-50%);
          }
        }
      }
      div.comment {
        margin-top: -4px;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div.left {
          margin-left: 10px;
          display: flex;
          align-items: center;
          img {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            border: 1px solid red;
          }
          span {
            line-height: 30px;
            margin-left: 10px;
            position: relative;
            font-size: 14px;
            &::after {
              content: "";
              position: absolute;
              height: 20px;
              right: -5px;
              top: 5px;
              border-left: 1px solid #eee;
            }
          }
          p {
            color: red;
            margin-left: 10px;
            line-height: 30px;
            font-size: 14px;
          }
        }
        div.right {
          display: flex;
          align-items: center;
          margin-right: 10px;
          i {
            font-size: 20px;
            margin-left: 15px;
          }
        }
      }
    }
  }
}
</style>
