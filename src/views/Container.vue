<template>
  <div class="container">
    <mt-header title="固定在顶部"></mt-header>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="home">
        <Home></Home>
      </mt-tab-container-item>
      <mt-tab-container-item id="video">
        小视频
      </mt-tab-container-item>
      <mt-tab-container-item id="swipe">
        轮播图
      </mt-tab-container-item>
      <mt-tab-container-item id="task">
        任务 
      </mt-tab-container-item>
      <mt-tab-container-item id="mine">
        我的
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <i slot="icon" class="el-icon-s-home size"></i>
        Home
      </mt-tab-item>
      <mt-tab-item id="video">
        <i slot="icon" class="el-icon-video-camera size"></i>
        小视频
      </mt-tab-item>
      <mt-tab-item id="swipe">
        <i slot="icon" class="el-icon-video-camera size"></i>
        轮播图
      </mt-tab-item>
      <mt-tab-item id="task">
        <i slot="icon" class="el-icon-s-marketing size"></i>
        任务
      </mt-tab-item>
      <mt-tab-item id="mine">
        <i slot="icon" class="el-icon-user-solid size"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Home from "./Home"
export default {
  name: "Container",
  data() {
    return {
      selected: "home"
    };
  },
  components: {
    Home
  }
};
</script>
