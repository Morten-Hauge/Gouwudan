<template>
  <div class="home">
    
    <h1>Home</h1>
    
    <addItem v-for="item in sortedArray" :item="item" :key="item.name" />

    {{this.$store.state.dataItems}}

    <hr>

    {{this.$store.state.shoppingList}}
    
  </div>

</template>

<script>


import addItem from '../components/addItem.vue'
// import list from '../components/list'

export default {
  name: 'home',
  components: {
    addItem,
    // list
  },
  data() {
    return{
      //items   
      // shoppingList: []
    }
  },
  // methods: {
  //       addItem(){

  //         this.$store.commit('addItemToList', {item})

  //       }
  //  },
  computed: {

    // * Sort items in dataItems (items.json) alphabetically – imported in store.js
    
    sortedArray: function() {
      function compare(a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
          return 0;
      }
      // return this.$store.state.dataItems.sort(compare);
      return this.$store.state.dataItems.slice().sort(compare);
    }//,
    // pushToStorageOnLoad: function() {
    //   return this.$store.commit('test', dataItems) 
    // }
      
  }
  
}

</script>
