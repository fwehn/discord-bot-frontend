import Vue from 'vue'
import App from './App.vue'
import VueTailwind from 'vue-tailwind'

import TButton from 'vue-tailwind/dist/t-button';

const settings = {
  't-button': {
    component: TButton,
    props: {
      fixedClasses: 'transform ease-in-out duration-100 shadow',
      classes: 'bg-orange-500',
      variants: {
        secondary: 'underline text-orange-500',
        // ...
      }
    }
  },
}

Vue.use(VueTailwind, settings)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
