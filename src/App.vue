<script setup>
import WeddingDay from './components/WeddingDay.vue'
import Welcome from './components/Welcome.vue'
import Invitation from './components/Invitation.vue'
import Rsvp from './components/Rsvp.vue'
import Photo from './components/Photo.vue'
import Location from './components/Location.vue'
import Love from './components/Love.vue'
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