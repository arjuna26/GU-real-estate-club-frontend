<script setup>
import NavBar from './components/NavBar.vue';
import LandingSection from './components/LandingSection.vue';
import BelowLandingSection from './components/BelowLandingSection.vue'; 
import IntroSection from './components/BoardIntroSection.vue';
import UpcomingMeetings from './components/UpcomingMeetings.vue';
import AtAGlance from './components/AtAGlance.vue';
</script>

<template>
  <NavBar />
  <div class="flex flex-col items-center">
    <LandingSection />
    <BelowLandingSection />
    <IntroSection />
    <UpcomingMeetings />
    <AtAGlance />
  </div>
</template>

