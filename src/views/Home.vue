<template>
  <div class="home">
    <Header></Header>
    <mt-navbar fixed v-model="selected" style="top:40px">
      <mt-tab-item id="Headline">推荐</mt-tab-item>
      <mt-tab-item id="Comprehensive">综合</mt-tab-item>
      <mt-tab-item id="Learning">学术</mt-tab-item>
      <mt-tab-item id="People">人物</mt-tab-item>
      <mt-tab-item id="Newest">最新</mt-tab-item>
      <mt-tab-item id="Hot">热门</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected" :swipeable='true' style="top:90px">
      <mt-tab-container-item :is='selected'>
        <component :is='selected'></component>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Header from "../components/Header"
import Headline from "../components/Headline"
import Comprehensive from "../components/Comprehensive"
import Learning from "../components/Learning"
import People from "../components/People"
import Newest from "../components/Newest"
import Hot from "../components/Hot"
export default {
  name: "Home",
  data(){
    return {
      selected: this.$store.state.home
    }
  },
  destroyed(){
    this.$store.commit('changeHome', this.selected)
  },
  components: {
    Header,
    Headline,
    Comprehensive,
    Learning,
    People,
    Newest,
    Hot
  }
};
</script>
