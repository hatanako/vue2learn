import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: function (h) {
    return h(App)
  }
})


// 那么.vue文件中的template是由谁处理的了?
// 是由vue-template-compiler
// render -> vdom -> UI