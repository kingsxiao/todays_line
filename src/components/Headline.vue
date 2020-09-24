<template>
  <div class="Headline">
    <mt-loadmore 
    :top-method="loadTop" 
    :bottom-method="loadBottom" 
    :bottom-all-loaded="allLoaded" 
    ref="loadmore">
      <ul>
        <li v-for="el in arr" :key="el.id">{{ el }}</li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div>
    </mt-loadmore>
  </div>
</template>
  

<script>
import {url} from "./public"
export default {
  name: "Headline",
  data() {
    return {
      arr: [],
      allLoaded: false,
      topStatus: "",
    };
  },
  mounted(){
    this.$axios.get('getNews?type=headlines&size=10').then(arr=>{
      console.log(arr)
      this.arr=arr;
    })
  },
  methods: {
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      this.allLoaded = true;
      this.$refs.loadmore.onBottomLoaded();
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
  },
};
</script>

<style scoped lang="less">
</style>
