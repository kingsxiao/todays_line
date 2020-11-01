<template>
  <div id="app">
    <div v-if="flag">
      <img src="@/assets/images/logo.png" alt :style="{width:'100%',height}"/>
    </div>
    <div v-else>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { Indicator } from "mint-ui";
export default {
  name: "app",
  data() {
    return {
      flag: true,
      height: 0
    };
  },
  mounted() {
    this.height = window.screen.height - 4 + 'px';
    Indicator.open();
    setTimeout(() => {
      this.flag = false;
      Indicator.close();
    }, 2000);
  },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease-in-out;
}
.mint-tab-item-label {
  font-size: 15px !important;
}
.mint-spinner-fading-circle {
  left: 50%;
  transform: translate(-50%);
}
div.detail {
  section {
    div.content {
      img {
        width: 100%;
        margin: 10px,0;
      }
      p {
        line-height: 1.8;
        text-align: justify;
      }
    }
  }
}
.mint-indicator-wrapper{
  opacity: .4;
}

// .mint-loadmore-top, .mint-loadmore-bottom{
//   margin-left: 0px;
// }
</style>
