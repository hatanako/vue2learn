<template>
  <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="@assets/img/tabbar/home_首页.png" alt="">
        <img slot="item-icon-active" src="@assets/img/tabbar/home_首页_red.png" alt="">
        <div slot="item-name">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="@assets/img/tabbar/category_分类.png" alt="">
        <img slot="item-icon-active" src="@assets/img/tabbar/category_分类_red.png" alt="">
        <div slot="item-name">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="@assets/img/tabbar/goods_商品.png" alt="">
        <img slot="item-icon-active" src="@assets/img/tabbar/goods_商品_red.png" alt="">
        <div slot="item-name">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="@assets/img/tabbar/mine_我的.png" alt="">
        <img slot="item-icon-active" src="@assets/img/tabbar/mine_我的_red.png" alt="">
        <div slot="item-name">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>

import TabBar from '@components/tabbar/TabBar.vue';
import TabBarItem from '@components/tabbar/TabBarItem.vue';

export default {
    name:"MainTabBar",
    components:{
        TabBar,
        TabBarItem,
    }
}
</script>

<style scoped>

</style>