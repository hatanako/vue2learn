<template>
  <div id="detail">
      <detail-nav-bar/>
      <detail-swiper :top-images="topImages"/>
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'

import { getDetail } from 'network/detail'
export default {
 name:"Detail",
 components: {
  DetailNavBar,
  DetailSwiper
 },
 data() {
    return {
        iid: null,
        topImages: []
    }
 },
 created() {
  // 1.保存传入的iid
  // console.log(this.$route.params.id)
    this.iid = this.$route.params.id

    // 2.根据iid请求详细数据
    getDetail(this.iid).then(res => {
      // 1.获取顶部的图片的轮播数据
      this.topImages = res.result.itemInfo.topImages
    })
 }
}
</script>

<style>

</style>
