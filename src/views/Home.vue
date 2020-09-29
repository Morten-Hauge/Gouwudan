<template>
  <div class="home">
    
    <h1>Home</h1>

    <addItem v-for="item in sortedArray" :item="item" :key="item.name" @click.native="addItem($event)" />
    <!-- <div v-for="item in sortedArray" :key="item.name">{{item.name}}</div> -->
    <!-- <addItem v-for="item in sortedArray" :item="item" :key="item.name" /> -->

    <br><br>

    <!-- <List /> -->
    <!-- {{this.$store.state.dataItems}} -->
  </div>

</template>

<script>

import items from '../items.json'
import addItem from '../components/addItem.vue'
import list from '../components/list'

export default {
  name: 'home',
  components: {
    addItem,
    list
  },
  data() {
    return{
      items   
      // shoppingList: []
    }
  },
  methods: {
        addItem(){

            var name = event.target.getAttribute('data-name');
            var zone = event.target.getAttribute('data-zone');
            var index = event.target.getAttribute('data-index');
            
            this.$store.commit('addItemToList', {name: name, zone: zone, index: index, done: false})

        }
   },
  computed: {
    sortedArray: function() {
      function compare(a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
          return 0;
      }
      return this.items.sort(compare);
      //return this.$store.state.dataItems.sort(compare);
    }
        
  }
  
}

</script>
