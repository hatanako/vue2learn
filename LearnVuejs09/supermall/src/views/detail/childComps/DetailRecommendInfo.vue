<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <goods-list :goods="recommendList" />
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList.vue';

export default {
  name: "DetailRecommendInfo",
  components: {
    GoodsList
  },
  props: ['recommendList']
}
</script>

<style scoped>
.recommend-info {
  padding: 5px;
}

.info-header {
  line-height: 40px;
  padding-left: 8px;
  font-size: 15px;
  color: #333;
}
</style>
