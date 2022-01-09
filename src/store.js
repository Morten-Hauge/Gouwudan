import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import dataItems from './items.json'

Vue.use(Vuex)

// * Push state to local storage

const vuexPersist = new VuexPersist({
  key: 'shopping',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    shoppingList: [],
    dataItems
  },

  // * Filter items in shoppingList by zone
  
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
    },
    zone5Getter: state => {
      return state.shoppingList.filter(
        item => item.zone == 5
      );
    },
    zone6Getter: state => {
      return state.shoppingList.filter(
        item => item.zone == 6
      );
    },
    zone7Getter: state => {
      return state.shoppingList.filter(
        item => item.zone == 7
      );
    },
    zone8Getter: state => {
      return state.shoppingList.filter(
        item => item.zone == 8
      );
    }
  },
  mutations: {
    
    // * Function for adding items from dataItems to shoppingList

    addItemToList(state, item){
      if(state.shoppingList.some(data => data.name === item.name)){

        // * Find position of matching element in shoppingList – set picked to false and remove it from shoppingList

        let pos = state.shoppingList.indexOf(item);
        state.shoppingList[pos].picked = false;
        state.shoppingList.splice(pos, 1);
        
        // * Set item added to false in dataItems

        let index = state.dataItems.indexOf(item);
        state.dataItems[index].added = false;
        
      }else{        
        
        state.shoppingList.push(item);
        
        let index = state.dataItems.indexOf(item);
        state.dataItems[index].added = true;
      }
    },

    // * Remove item from shoppingList

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

    // * Item put in shopping cart

    addedToBasket(state, item){
      let index = state.shoppingList.indexOf(item);

      if(state.shoppingList[index].picked === false)
      {
        state.shoppingList[index].picked = true;
      }
      else{
        state.shoppingList[index].picked = false;
      }
    },

    // * Purge shoppingList

    emptyList(state) {
      
      // * Set picked to false for all items in shoppingList

      for(var i = 0; i < state.shoppingList.length; i++){
        state.shoppingList[i].picked = false;
      }

      // * Clear shoppingList array

      state.shoppingList = [];

      // * Set added to false for all items in dataItems
      
      for(let i=0; i < state.dataItems.length; i++){
        state.dataItems[i].added = false;
      }
    }
  },
  plugins: [vuexPersist.plugin]
})