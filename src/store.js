import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import dataItems from './items.json'
import { indexOf } from 'core-js/fn/array'

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
      return state.shoppingList.filter(
        item => item.zone == 1
      );
    },
    zone2Getter: state => {
      return state.shoppingList.filter(
        item => item.zone == 2
      );
    },
    zone3Getter: state => {
      return state.shoppingList.filter(
        item => item.zone == 3
      );
    },
    zone4Getter: state => {
      return state.shoppingList.filter(
        item => item.zone == 4
      );
    }
  },
  mutations: {
    addItemToList(state, item){
      if(state.shoppingList.some(data => data.name === item.name)){
        console.log("Finnes allerede")
      }else{
        state.shoppingList.push(item);
        let index = state.dataItems.indexOf(item);
        state.dataItems[index].added = true;
      }      
    },
    removeItemFromList(state, item){
      
      let index = state.shoppingList.indexOf(item); 
      
      function indexDataItems(){
        let index2 = state.dataItems.find(el => el.name === item.name);
        return state.dataItems.indexOf(index2);
        
      }

      state.dataItems[indexDataItems()].added = false;
      state.dataItems[indexDataItems()].picked = false;

      state.shoppingList.splice(index,1);
    },
    addedToBasket(state, item){
      let index = state.shoppingList.indexOf(item);
      state.shoppingList[index].picked = true;
    },
    emptyList(state) {
      state.shoppingList = [];
      //state.shoppingList.map(e => ({...e, added: false}));
    }
  },
  actions: {

  },
  plugins: [vuexPersist.plugin]
})
