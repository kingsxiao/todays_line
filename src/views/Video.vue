<template>
  <div class="Video">
    <Header></Header>
    <mt-navbar fixed v-model="selected" style="top: 40px">
      <mt-tab-item id="VideoRecommend">推荐</mt-tab-item>
      <mt-tab-item id="VideoHot">热门</mt-tab-item>
      <mt-tab-item id="VideoGame">游戏</mt-tab-item>
      <mt-tab-item id="VideoLive">直播</mt-tab-item>
      <mt-tab-item id="VideoMusic">音乐</mt-tab-item>
      <mt-tab-item id="VideoSport">体育</mt-tab-item>
      <mt-tab-item id="VideoFunny">搞笑</mt-tab-item>
      <mt-tab-item id="VideoCar">懂车帝</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected" :swipeable="true" style="top:90px">
      <mt-tab-container-item :is="selected">
        <component :is="selected"></component>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
  

<script>
import Header from "../components/Header"
import VideoRecommend from "../components/VideoRecommend";
import VideoHot from "../components/VideoHot";
import VideoGame from "../components/VideoGame";
import VideoLive from "../components/VideoLive";
import VideoMusic from "../components/VideoMusic";
import VideoSport from "../components/VideoSport";
import VideoFunny from "../components/VideoFunny";
import VideoCar from "../components/VideoCar";
import { url, windowSize } from "../components/public";
export default {
  name: "Video",
  data() {
    return {
      selected: this.$store.state.video,
    };
  },
  mounted() {
    this.height = windowSize().height - 58 - 49 - 40 - 4 + "px";
  },
  destroyed() {
    this.$store.commit("changeVideo", this.selected);
  },
  components: {
    VideoRecommend,
    VideoHot,
    VideoGame,
    VideoLive,
    VideoMusic,
    VideoSport,
    VideoFunny,
    VideoCar,
    Header
  },
};
</script>

<style scoped lang="less">
</style>
