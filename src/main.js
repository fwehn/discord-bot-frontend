import Vue from 'vue'
import App from './App.vue'
import './index.css'


Vue.config.productionTip = false

new Vue({
  mounted() {
    document.body.classList.add('bg-discord-700');
  },
  render: h => h(App)
}).$mount('#app')
