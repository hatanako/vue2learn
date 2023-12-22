<template>
  <div id="detail">

    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'

export default {
 name:"Detail",
 components: {
  DetailNavBar
 },
 data() {
    return {
        iid: null
    }
 },
 created() {
    this.iid = this.$route.params.iid

 }
}
</script>

<style>

</style>