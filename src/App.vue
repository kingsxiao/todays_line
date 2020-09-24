<template>
  <div id="app">
    <div v-if="flag">
      <img src="@/assets/images/logo.png" alt />
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
    };
  },
  mounted() {
    Indicator.open();
    setTimeout(() => {
      this.flag = false;
      Indicator.close();
    }, 2000);
  },
};
</script>
<style lang="less">
body{
  margin: 0;
  padding: 0;
}
#app {
  img {
    width: 100%;
  }
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active{
  transition: all 0.4s ease-in-out;
}
</style>
