<template>
  <div class="detail">
    <mt-header title="今日头条" fixed>
      <router-link to="#" slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <section>
      <h3>{{ obj.title }}</h3>
      <span>{{ obj.updatedAt | format }}</span>
      <div class="content" v-html="obj.content"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      obj: {}
    };
  },
  mounted() {
    const tableName = this.$route.params.tableName;
    const id = this.$route.params.id;
    const params = { params: { tableName, id } };
    this.$axios.get("getDetail", params).then((obj) => {
      this.obj = obj;
    });
  },
  filters: {
    format(d) {
      const date = new Date(d);
      return date.toLocaleString().replace(/\//g, "-");
    },
  },

  components: {},
};
</script>
<style lang="less" scoped>
  div.detail{
    header{
      background: #EF5353;
    }
    section{
      padding: 50px 15px;
      text-align: center;
      h3{
        line-height: 1.7;
      }
      span{
        line-height: 30px;
      }
    }
  }
</style>
