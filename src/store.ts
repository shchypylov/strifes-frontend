import Vue from "vue";
import Vuex from "vuex";
import api from '@/api'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    strifes: []
  },
  mutations: {
    setStrifes(state, data) {
      state.strifes = data;
    }
  },
  actions: {
    fetchStrifes(context) {
      api.get('/strifes').then(data => {
        context.commit('setStrifes', data.data)
      }).catch(console.error)
    },
    fetchStrifesByName(context, input) {
      api.get('/strifes', {
        params: {
          q: input
        }
      }).then(data => {
        context.commit('setStrifes', data.data)
      })
    },
    addNewStrife(context, strife) {
      api.post('/strife', strife).then(data => {
        console.log(data);
      })
    }
  }
});
