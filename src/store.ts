import Vue from "vue";
import Vuex from "vuex";
import api from '@/api'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
  },
  actions: {
    fetchStrifes() {
      api.get('/strifes').then(data => {
        console.log(data);
      }).catch(console.error)
    }
  }
});
