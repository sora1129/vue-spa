import Vue from 'vue'
// .vue ファイルをインポートすることでAppにオブジェクト化する（.vueファイルはそのまま使えないからコンポーネントのオブジェクトにする）
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false

Vue.component('LikeNumber', LikeNumber);
Vue.directive('border', {
  bind() {
    // ディレクティブが初めて対象の要素にひも付いた時
    // 最初の1回に呼ばれるだけ
  },
  inserted() {
    // 親Node(DOM)に挿入された時
  },
  update() {
    // コンポーネントが更新される度。子コンポーネントが更新される前
  },
  componentUpdated() {
    // コンポーネントが更新される度。子コンポーネントが更新された後
  },
  unbind() {
    // ディレクティブがひも付いている要素から取り除かれた時
    // コンポーネントにおけるdestroyedみたいな感じ
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
