<template>
  <div>
    <BRVideo class="hide" :class="{ show: backgroundState.isDay && backgroundState.isStarry}" :linkVideo="backgroundState.sceneStarryDay" />
    <BRVideo class="hide" :class="{ show: !backgroundState.isDay && backgroundState.isStarry}" :linkVideo="backgroundState.sceneStarryNight" />
    <BRVideo class="hide" :class="{ show: backgroundState.isDay && !backgroundState.isStarry}" :linkVideo="backgroundState.sceneRainDay" />
    <BRVideo class="hide" :class="{ show: !backgroundState.isDay && !backgroundState.isStarry}" :linkVideo="backgroundState.sceneRainNight" />
  </div>
</template>

<script setup>
import BRVideo from "./BRVideo.vue";
import { useBackgroundState } from "../../store";

const {backgroundState} = useBackgroundState()
</script>

<style>
.main-video {
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 1;
}
.hide{
  transition: 0.5s;
  opacity: 0;
}
.show {
  opacity: 1 !important;
}
</style>