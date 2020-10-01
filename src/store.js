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
  getters: {
    zone1Getter: state => {
      return state.shoppingList.filter(item => item.zone.match(1))
      //return state.shoppingList
      //return state.shoppingList.filter(item => item.zone == 1)
      
      // if(state.shoppingList[1].zone == 1){
      //     return this
      // }
      
      // let test = state.shoppingList;
      // let i = 0;
      // for(i = 0, test.length(); i++;){
      //   return state.shoppingList[i].zone == 1
      // }

    }
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
