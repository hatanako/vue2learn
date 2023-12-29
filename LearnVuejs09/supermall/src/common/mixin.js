import { debounce } from "./utils";

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh)
        this.itemImgListener = () => {
            refresh()
        }
        this.$bus.$on('itemImgLoad', this.itemImgListener)
        // console.log("我是混入其中的内容");
    }
}

import BackTop from 'components/content/backTop/BackTop';

export const backTopMixin = {
  components: { BackTop },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    // 回到顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    showBackTopListener(position){
      this.isShowBackTop = -position.y > 1000
    }
  }
}
