import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import dataItems from './items.json'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'shopping',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    shoppingList: [],
    dataItems
  },
  mutations: {
    addItemToList(state, item){
      state.shoppingList.push(item)
    },
    removeItemFromList(state, item){
      let index = state.shoppingList.indexOf(item);
      state.shoppingList.splice(index,1);
    },
    addedToBasket(state, item){
      let index = state.shoppingList.indexOf(item);
      state.shoppingList[index].done = !state.shoppingList[index].done;
    },
    emptyList(state) {
      state.shoppingList = []
    }
  },
  actions: {

  },
  plugins: [vuexPersist.plugin]
})
