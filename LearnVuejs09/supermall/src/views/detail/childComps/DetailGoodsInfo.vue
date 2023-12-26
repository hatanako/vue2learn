<template>
    <div class="goods" v-if="Object.keys(detailInfo).length!==0">
      <div class="info-desc clear-fix">
        <div class="start"></div>
        <div class="desc">{{detailInfo.desc}}</div>
        <div class="end"></div>
      </div>
  
      <div class="middle">
          <span class="key">{{detailInfo.detailImage[0].key}}</span>
          <div class="imgList">
              <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="itemImgLoad">
          </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data(){
        return {
            imgLength:0,
            counter:0 
        }
    },
    methods:{
        itemImgLoad(){
            if(++this.counter==this.imgLength){
                this.$emit("imgLoad");
            }
        }
    },
    watch:{
      detailInfo(){
          this.imgLength=this.detailInfo&&this.detailInfo.detailImage[0].list.length;
      }
    }
  };
  </script>
  <style scoped>
  .goods {
    padding: 15px 0 0 0;
    margin-top: 10px;
    border-top: 4px solid #f6f6f6;
  }
  .info-desc {
    padding: 0 15px;
  }
  .info-desc .start,
  .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
   .info-desc .start {
      float: left;
    }
  
    .info-desc .end {
      float: right;
    }
    
    .info-desc .start::before, .info-desc .end::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      background-color: #333;
      bottom: 0;
      border-radius: 50%;
      top: -3px;
    }
    .info-desc .end::after {
      right: 0;
    }
    .desc{
        font-size: 14px;
        padding: 10px 0;
    }
  
    .key{
       font-weight: 600;
       padding-left: 14px;
    }
    .imgList img{
        width: 100%;
    }
  </style>