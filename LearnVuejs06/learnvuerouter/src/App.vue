<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-view/>
  </div>
</template>
 
<script>
export default {
  name: 'App',
  methods:{
    homeClick(){
      // 通过代码的方式修改路由 vue-router
      // push => pushState
      // this.$router.push('/home')
      this.$router.replace('/home')
      console.log('homeClick')
    },
    aboutClick(){
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log('aboutClick')
    }
  }
}
</script>

<style>
  /* .router-link-active {
    color: #f00;
  } */
  .active {
    color: #f00;
  }
</style>
