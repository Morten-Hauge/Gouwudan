<template>
  <div id="app">
    <div id="nav" class="nav">

      <router-link to="/">Hjemme</router-link> 

      <router-link to="/list">På butikken</router-link>

    </div>
<main>
    <transition :name="transitionName">
      
      <router-view/>

    </transition>
</main>
  </div>
</template>

<script>

import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)

export default {
  name: "App",
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      this.transitionName = to.meta.page > from.meta.page ? "next" : "prev";
    }
  }
};
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* --bg-color: #141517; */
  /* --text-color: #FDFCF2; */
    /* --yellow-color: #E2A84D; */

  --bg-color: #2e2e2e;
  --text-color: #F7EEDA;
  --yellow-color: #FFA700;
  --green-color: #44BE8A;
  --bg-nav-color: #F7EEDA;
  --bg-x-color: #E6E0D3;
  --red-color: #861515;

  --bg-color: #1f1f23;
  --text-color: #F7EEDA;
  --yellow-color: #FFA700;
  --green-color: #49ca58;
  --bg-nav-color: #F7EEDA;
  --bg-x-color: #E6E0D3;
  --red-color: #861515;
  --card-bg-color: #0f0f11;
  /* --card-bg-color: #151518; */

  --bg-color: #131316;
  --card-bg-color: #1f1f23;
}

body{
  background: var(--bg-color);
}

#app {
  font-family: 'General Sans', sans-serif;
  color: var(--text-color);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  min-height: 100%;
  /* max-width: 700px;
  margin: 0 auto; */
}

.nav{
  width: 100%;
  background: var(--bg-nav-color);
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: .5rem;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  gap: .5rem;
  justify-items: center;
  z-index: 9999;
  box-shadow: 0px -8px 18px -1px rgba(46,46,46,0.20);
}

#nav a {
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  color: var(--bg-color);
  width: 100%;
  height: 100%;
  text-align: center;
  padding: .7rem 0;
  border-radius: .3rem;
  transition: all ease .6s;  
	background-size: 200% 100%;

  /* border-radius: .3rem 0 0 .3rem; */
  background-position: 0 0;
  background-image: linear-gradient(to left, transparent, transparent 50%, var(--bg-color) 50%, var(--bg-nav-color));
  /* background-image: linear-gradient(to left, transparent 50%, var(--bg-color) 50%); */
}

#nav a:nth-child(1){
  /* background-position: -100.3% 0; */
  background-position: -100% 0;
}

#nav a:nth-child(2){
  /* background-position: 99.7% 0; */
  background-position: 100% 0;
}

#nav a.router-link-exact-active {
  /* background: var(--bg-color); */
  color: var(--text-color);
  background-image: linear-gradient(to left, transparent, transparent 50%, var(--bg-color) 50%, var(--bg-color));
  background-position: 0 0;
  border-radius: .3rem;
  transition: all ease .7s;  
}

h1{
  font-size: 4rem;
  font-weight: 600;
  line-height: 4rem;
  margin: 2.2rem 0 4rem 0;
  /* letter-spacing: .05rem; */
}

h2{
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0 1rem 0;
}

/* TRANSITION CODE FROM NICOOPRAT – https://codesandbox.io/s/zq5mw2zk9x?file=/src/App.vue:1351-1806 */

main {
  min-height: 100%;
  display: grid;
  grid-template: "main";
  flex: 1;
  position: relative;
  overflow: hidden;
  background-color: var(--bg-color);
}

main > * {
  grid-area: main; /* Transition: make sections overlap on same cell */
  flex: 1 1 auto;
  background-color: var(--bg-color);
  position: relative;
  /* height: 100vh; To be fixed */
  min-height: 100vh;
}

main > :first-child {
  z-index: 1; /* Prevent flickering on first frame when transition classes not added yet */
}

/* Transitions */

.next-leave-to {
  animation: leaveToLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 0;
}

.next-enter-to {
  animation: enterFromRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 1;
}

.prev-leave-to {
  animation: leaveToRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 1;
}

.prev-enter-to {
  animation: enterFromLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 0;
}

@keyframes leaveToLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-25%);
    filter: brightness(0.5);
  }
}

@keyframes enterFromLeft {
  from {
    transform: translateX(-25%);
    filter: brightness(0.5);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes leaveToRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes enterFromRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.hero{
  width: 100%;
  height: 250px;
  z-index: -999 !important;
  background-size: cover;
  position: relative;
}

.hero:after {
  content:'';
  position:absolute;
  left:0; top:0;
  width:100%; height:100%;
  display:inline-block;
  background: linear-gradient(to bottom, rgba(204, 182, 182, 0) 0%,rgb(51, 51, 51) 100%);
}

.hero h1{
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
}

</style>
