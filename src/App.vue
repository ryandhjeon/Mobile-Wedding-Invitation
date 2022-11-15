<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import WeddingDay from './components/WeddingDay.vue'
import Welcome from './components/Welcome.vue'
import Invitation from './components/Invitation.vue'
import Rsvp from './components/Rsvp.vue'
import Photo from './components/Photo.vue'
import Location from './components/Location.vue'
import Love from './components/Love.vue'
import WeddingRegistry from './components/WeddingRegistry.vue'
import Share from './components/Share.vue'
</script>

<template>
  <header>
    <WeddingDay />
  </header>

  <main>
    <Welcome />
    <Invitation />
    <Rsvp />
    <Photo />
    <Location />
    <Love />
    <Share />
  </main>
</template>

<style scoped>
/* header {
  line-height: 1.5;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center; 
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>