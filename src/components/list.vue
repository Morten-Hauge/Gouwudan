<template>
  <div class="list">
    
    <h1>Liste til butikken</h1>

    <h1>Zone 1</h1>

    <PickedItemComp v-for="pickedItem in zone1Filter" :key="pickedItem.name" :pickedItem="pickedItem" />
    
    <br><br>

    <h1>Zone 2</h1>

    <PickedItemComp v-for="pickedItem in zone2Filter" :key="pickedItem.name" :pickedItem="pickedItem" />

    <br><br>

    <h1>Zone 3</h1>

    <PickedItemComp v-for="pickedItem in zone3Filter" :key="pickedItem.name" :pickedItem="pickedItem" />

    <br><br>

    <h1>Zone 4</h1>

    <PickedItemComp v-for="pickedItem in zone4Filter" :key="pickedItem.name" :pickedItem="pickedItem" />

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
      // zone1(item) {
      //   return this.$store.state.shoppingList.filter(
      //     item => item.zone == 1
      //   );
      // },
      // zone1Filter(zone1) {

      // * Filter by zone getters ran in store.js
      
      zone1Filter() {
        return this.$store.getters.zone1Getter
      },
      zone2Filter() {
        return this.$store.getters.zone2Getter
      },
      zone3Filter() {
        return this.$store.getters.zone3Getter
      },
      zone4Filter() {
        return this.$store.getters.zone4Getter
      }
  },
  methods: {

    // * At "Empty list" button click emptyList is run from store.js

    emptyList(){
      this.$store.commit('emptyList');
    }
  }

}

</script>
