<script setup>
import WeddingDay from './components/WeddingDay.vue'
import Welcome from './components/Welcome.vue'
import Invitation from './components/Invitation.vue'
import Rsvp from './components/Rsvp.vue'
import Photo from './components/Photo.vue'
import Location from './components/Location.vue'
import Love from './components/Love.vue'
import Share from './components/Share.vue'
import Locale from './components/Locale.vue'

</script>

<template>
  <header>
    <Locale />
    <WeddingDay />
  </header>

  <main>
    <Welcome />
    <Invitation />
    <Rsvp />
    <Photo />
    <Love />
    <Location />
    <Share />
  </main>
</template>