import Vue from 'vue'
import App from './App.vue'
import store from './store'
import InputText from './components/entrada/inputtext/InputText.vue';
import Button from './components/entrada/button/Button.vue';
import DataTable from './components/container/DataTable/DataTable.vue';

Vue.config.productionTip = false

Vue.component('lg-aa-inputtext', InputText);
Vue.component('lg-aa-botao', Button);
Vue.component('lg-aa-datatable', DataTable);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
