import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import dataItems from './items.json'
//import { indexOf } from 'core-js/fn/array'
// import { indexOf } from 'core-js/fn/array'

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
    }
  },
  mutations: {
    
    // * Function for adding items from dataItems to shoppingList

    // addItemToList(state, {item, itemClone}){
    addItemToList(state, item){
      if(state.shoppingList.some(data => data.name === item.name)){
        //console.log("Finnes allerede")
        // return false;
      }else{
        //let itemClone = {...item};
        // state.shoppingList.push(itemClone);
        
        state.shoppingList.push(item);
        
        let index = state.dataItems.indexOf(item);
        state.dataItems[index].added = true;
      }
    },
    // test(state, item){
    //   // state.dataItems = item;
    //   console.log(state.item)
    // },

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
      state.shoppingList[index].picked = true;
    },

    // * Purge shoppingList

    emptyList(state) {
      state.shoppingList = [];

      // * Set picked to false for all items in dataItems

      for(let i=0; i < state.dataItems.length; i++){
        state.dataItems[i].added = false;
      }
    }
  },
  actions: {

  },
  plugins: [vuexPersist.plugin]
})
