<template>
  <div class="home">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">推荐</mt-tab-item>
      <mt-tab-item id="2">综合</mt-tab-item>
      <mt-tab-item id="3">学术</mt-tab-item>
      <mt-tab-item id="4">人物</mt-tab-item>
      <mt-tab-item id="5">最新</mt-tab-item>
      <mt-tab-item id="6">热门</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <Headline></Headline>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        综合
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        学术
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        人物
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        最新
      </mt-tab-container-item>
      <mt-tab-container-item id="6">
        热门
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Headline from "../components/Headline"
export default {
  name: "Home",
  data(){
    return {
      selected: "1"
    }
  },
  components: {
    Headline
  }
};
</script>
