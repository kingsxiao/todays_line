<template>
  <div class="container">
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="Home">
        <i slot="icon" class="el-icon-s-home size"></i>
        Home
      </mt-tab-item>
      <mt-tab-item id="Video">
        <i slot="icon" class="el-icon-video-camera size"></i>
        小视频
      </mt-tab-item>
      <mt-tab-item id="Movie">
        <i slot="icon" class="el-icon-s-marketing size"></i>
        放映厅
      </mt-tab-item>
      <mt-tab-item id="Mine">
        <i slot="icon" class="el-icon-user-solid size"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model="selected" :style={height}>
      <mt-tab-container-item :is="selected">
        <component :is="selected"></component>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { url, windowSize } from "../components/public";
import Home from "./Home";
import Video from "./Video";
import Movie from "./Movie";
import Mine from "./Mine";
export default {
  name: "Container",
  data() {
    return {
      selected: this.$store.state.tabState,
      value:'11',
      height: 0
    };
  },
  mounted(){
    this.height = windowSize().height - 58 + "px";
  },
  destroyed() {
    this.$store.commit("changeTabState", this.selected);
  },
  components: {
    Home,
    Video,
    Movie,
    Mine,
  },
};
</script>
<style lang="less">
div.container {
  header {
    background: #ef5353;
  }
}
</style>