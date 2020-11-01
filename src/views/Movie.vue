<template>
  <div class="Movie">
    <Header></Header>
    <mt-swipe :auto="3000">
      <mt-swipe-item><img src="@/assets/images/one.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="@/assets/images/two.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="@/assets/images/three.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="@/assets/images/four.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Movie",
  data() {
    return {};
  },
  components: {
    Header,
  },
};
</script>
<style lang="less" scoped>
div.Movie{
  width: 100%;
  div.mint-swipe{
    width:100%;height:200px;margin-top:40px;
    div.mint-swipe-items-wrap{
      img{
        width: 100%;
      }
    }
  }
}
</style>
