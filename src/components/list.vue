<template>
  <div class="store" v-touch:swipe.right="swipeToHome">
    
    <!-- <section class="hero hero-store">

      <h1>Butikken</h1>

    </section> -->

  <section class="store-content">

    <h1>Butikken</h1>

    <!-- ZONE 1 -->

    <div v-if="zone1Filter != 0" class="card">

      <h2>Frukt, grønt og brus</h2>

      <PickedItemComp v-for="pickedItem in zone1Filter" :key="pickedItem.name" :pickedItem="pickedItem" />
    
    </div>

    <!-- ZONE 2 -->

    <div v-if="zone2Filter != 0" class="card">

      <h2>Kjøtt, taco, saus og pålegg</h2>

      <PickedItemComp v-for="pickedItem in zone2Filter" :key="pickedItem.name" :pickedItem="pickedItem" />

    </div>

    <!-- ZONE 3 -->

    <div v-if="zone3Filter != 0" class="card">

      <h2>Brød, hermetikk og ost</h2>

      <PickedItemComp v-for="pickedItem in zone3Filter" :key="pickedItem.name" :pickedItem="pickedItem" />

    </div>

    <!-- ZONE 4 -->

    <div v-if="zone4Filter != 0" class="card">

      <h2>Melkekjøla og egg</h2>

      <PickedItemComp v-for="pickedItem in zone4Filter" :key="pickedItem.name" :pickedItem="pickedItem" />

    </div>

    <!-- ZONE 5 -->

    <div v-if="zone5Filter != 0" class="card">

      <h2>Papir og bakevarer</h2>

      <PickedItemComp v-for="pickedItem in zone5Filter" :key="pickedItem.name" :pickedItem="pickedItem" />

    </div>

    <!-- ZONE 6 -->

    <div v-if="zone6Filter != 0" class="card">

      <h2>Frysa, øl og chips</h2>

      <PickedItemComp v-for="pickedItem in zone6Filter" :key="pickedItem.name" :pickedItem="pickedItem" />

    </div>

    <!-- ZONE 7 -->

    <div v-if="zone7Filter != 0" class="card">

      <h2>Vasketing</h2>

      <PickedItemComp v-for="pickedItem in zone7Filter" :key="pickedItem.name" :pickedItem="pickedItem" />

    </div>

    <!-- ZONE 8 -->

    <div v-if="zone8Filter != 0" class="card">

      <h2>Kosmetikk og godis</h2>

      <PickedItemComp v-for="pickedItem in zone8Filter" :key="pickedItem.name" :pickedItem="pickedItem" />

    </div>

    <!-- EMPTY LIST BTN -->

    <button v-if="this.$store.state.shoppingList.length != 0" class="empty-list-btn" @click="emptyList($event)">Tøm liste</button>

    <p v-if="this.$store.state.shoppingList.length === 0">
      Du har ikke lagt til noen varer i handlelista di 🤔
    </p>

  </section>
  
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
      },
      zone5Filter() {
        return this.$store.getters.zone5Getter
      },
      zone6Filter() {
        return this.$store.getters.zone6Getter
      },
      zone7Filter() {
        return this.$store.getters.zone7Getter
      },
      zone8Filter() {
        return this.$store.getters.zone8Getter
      }
  },
  methods: {

    // * At "Empty list" button click emptyList is run from store.js

    emptyList(){
      this.$store.commit('emptyList');
    },

    swipeToHome(){
      this.$router.push('/');
    }

  }

}

</script>

<style>

.store{
  /* display: flex;
  flex-direction: column; */
  padding-bottom: 4rem;
}

.store-content{
  /* margin-top: -1.5rem; */
  z-index: 999 !important;
  padding: 1rem 1rem 4rem 1rem;
  /* border-radius: 20px 20px 0 0 ; */
  background: var(--bg-color);
  max-width: 700px;
  margin: 0 auto;
}

.hero-store{
  background-image: url('../assets/hero-butikken.jpg');
  background-position: center top;
}

.card{
  background: var(--card-bg-color);
  margin: 0 0 3rem 0;
  padding: 2rem;
  border-radius: 0.5rem;

  box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
    ;

    /* background: rgb(26,26,29);
    background: linear-gradient(180deg, rgba(26,26,29,1) 0%, rgba(26,26,34,1) 60%); */
    /* outline: 1px solid #2e2e33; */
}

.card h2{
  margin-bottom: 2rem;
}

.empty-list-btn{
  padding: 1rem 2rem;
  border-radius: .5rem 0.5rem;
  margin: 4rem auto 0 auto;
  background: var(--red-color);
  color: var(--text-color);
  font-size: 1rem;
  display: block;
  outline: none;
  border: none;
}

h2{
  margin-top: 3rem;
}

h2:first-child{
  margin-top: 0;
}

p{
  font-size: 2rem;
}

</style>