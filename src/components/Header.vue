<template>
  <div class="Header">
    <slot>
      <div class="left">
        <router-link to="/Search">
          <input type="text" v-model="value" readonly />
        </router-link>
      </div>
      <div class="right">
        <img src="@/assets/images/publish.png" alt="" />
        <span>发布</span>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
       arr1: ["学校党委理论学习中心组专题学习习近平总书记给中国石油大学", "bbb北京师范大学张立教授及其合作团队共同揭示大熊猫分布区内大型食肉动物种群下降与分布区退缩的影响因素", "[研讨]外国语言文学学院举办第一期外语课程思政云端论坛"],
      value: "学校党委理论学习中心组专题学习习近平总书记给中国石油大学",
      selected: this.$store.state.home,
    };
  },
  mounted() {
    this.changeValue();
  },
  methods: {
    changeValue() {
      this.arr1.forEach((el) => {
        setTimeout(() => {
          this.value = el;
        }, 3000);
      });
    },
  },
};
</script>
<style lang="less" scoped>
div.Header {
  position: fixed;
  font-size: 12px;
  height: 40px;
  background: #e75643;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div.left {
    flex: 8;
    a {
      text-decoration: none;
      color: black;
      input {
        margin-left: 5%;
        border-radius: 15px;
        outline: none;
        border: none;
        height: 30px;
        width: 95%;
        position: relative;
        padding-left: 8%;
        box-sizing: border-box;
        overflow: hidden;
        padding-right: 120px;
        text-overflow: ellipsis;

      }
    }
    &::after {
      content: "";
      position: absolute;
      left: 6%;
      top: 50%;
      transform: translateY(-50%);
      width: 1.4em;
      height: 1.4em;
      background: url("../assets/images/search.png");
      background-size: cover;
    }
  }
  div.right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 50%;
      background: white;
      width: 1.4em;
      height: 1.4em;
      padding: 4px;
      box-sizing: border-box;
    }
    span {
      font-size: 15px;
      -webkit-transform: scale(0.7);
      line-height: 15px;
      color: white;
    }
  }
}
</style>
