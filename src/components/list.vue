<template>
  <div class="list">
    
    <h1>Liste til butikken</h1>
    
    <!-- <div v-for="pickedItem in shoppingList" :key="pickedItem.name">{{pickedItem.name}} <br> {{pickedItem.zone}}</div> -->

    <h1>Zone 1</h1>
    <!-- <div v-for="pickedItem in zone1" :key="pickedItem.name">{{pickedItem.name}} <br> {{pickedItem.zone}}</div> -->
    <!-- <PickedItemComp v-for="pickedItem in zone1" :key="pickedItem.name" :pickedItem="pickedItem" /> -->
    <!-- <PickedItemComp v-for="pickedItem in test(pickedItem)" :key="pickedItem.name" :pickedItem="pickedItem" /> -->
    <PickedItemComp v-for="pickedItem in zone1Filter" :key="pickedItem.name" :pickedItem="pickedItem" />
    
    <!-- {{shoppingList[0].zone}} -->
    
    <br><br>

    <h1>Zone 2</h1>
    <!-- <div v-for="pickedItem in zone2" :key="pickedItem.name">{{pickedItem.name}} <br> {{pickedItem.zone}}</div> -->
    <!-- <PickedItemComp v-for="pickedItem in zone2" :key="pickedItem.name" :pickedItem="pickedItem" /> -->

    <br><br>

    <h1>Zone 3</h1>
    <!-- <div v-for="pickedItem in zone3" :key="pickedItem.name">{{pickedItem.name}} <br> {{pickedItem.zone}}</div> -->
    <!-- <PickedItemComp v-for="pickedItem in zone3" :key="pickedItem.name" :pickedItem="pickedItem" /> -->

    <br><br>

    <h1>Zone 4</h1>
    <!-- <div v-for="pickedItem in zone4" :key="pickedItem.name">{{pickedItem.name}} <br> {{pickedItem.zone}}</div> -->
    <!-- <PickedItemComp v-for="pickedItem in zone4" :key="pickedItem.name" :pickedItem="pickedItem" /> -->

    <br><br>

    <button @click="emptyList($event)">Empty list</button>

  </div>

</template>

<script>

import PickedItemComp from '@/components/PickedItemComp'

export default {
  name: 'list',
  components: 
	{
		PickedItemComp
  },
  computed: {
      shoppingList() {
        return this.$store.state.shoppingList
      },
      zone1Filter() {
        return this.$store.getters.zone1Getter
      },
      test: function (pickedItem) {
        if(pickedItem.zone === "1"){
          return pickedItem
        }
      },
      zone1: function() {
        //let shoppingList = this.$store.state.shoppingList;
        
        return this.shoppingList.filter(function(pickedItem) {
          //return shoppingList.item.zone.match(1)
          //return this.$route.params.item.zone.match(1);
          //return item.zone.match(1)
          //return pickedItem
           return pickedItem.zone.match(1)
        })
      },
      zone2: function() {
        return this.shoppingList.filter(function(item) {
          return item.zone.match(2)
        })
      },
      zone3: function() {
        return this.shoppingList.filter(function(item) {
          return item.zone.match(3)
        })
      },
      zone4: function() {
        return this.shoppingList.filter(function(item) {
          return item.zone.match(4)
        })
      }
  },
  methods: {
    emptyList(){
      this.$store.commit('emptyList');
    }
  }

}

</script>
