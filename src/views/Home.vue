<template>
  <div class="home" v-touch:swipe.left="swipeToList">
    <!-- <section class="hero hero-hjemme">

      <h1>Hjemme</h1>

    </section> -->

    <section class="home-content">
      
      <h1>Hjemme</h1>

      <addItem v-for="item in sortedArray" :item="item" :key="item.name" />
    
    </section>
  </div>

</template>

<script>


import addItem from '../components/addItem.vue'

export default {
  name: 'home',
  components: {
    addItem,
    // list
  },

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

      return this.$store.state.dataItems.slice().sort(compare);
    }
      
  },
  methods: {
    swipeToList(){
      this.$router.push('list')
    }
  }
  
}

</script>

<style>

.home{
  /* display: flex;
  flex-direction: column; */
  /* max-width: 800px; */
  /* align-self: center; */
  /* margin: 0 auto; */
}

.home-content{
  /* margin-top: -1.5rem; */
  z-index: 999 !important;
  padding: 1rem 1rem 8rem 1rem;
  /* border-radius: 20px 20px 0 0 ; */
  background: var(--bg-color);
  max-width: 700px;
  margin: 0 auto;
}

.hero-hjemme{
  background-image: url('../assets/hero-hjemme.jpg');
  background-position: center top;
}

</style>