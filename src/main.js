import Vue from 'vue'
// .vue ファイルをインポートすることでAppにオブジェクト化する（.vueファイルはそのまま使えないからコンポーネントのオブジェクトにする）
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
