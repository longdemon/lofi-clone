<template>
  <div class="menu-playlist">
    <h4>Playlists</h4>
    <div class="playlists-template d-flex">
      <img class="p1" alt="p1" />
      <img class="p2" alt="p2" />
      <img class="p3" alt="p3" />
    </div>
    <h4>Template</h4>
    <span style="color: #ccc">You don’t have any template saved.</span>
  </div>
</template>
  
<script setup>
import { Icon } from "@iconify/vue";
import { useBackgroundState } from "../../store";

const { hanleChangeScene } = useBackgroundState();

const listScene = [
  {
    linkScene: "../../../src/assets/modifier/chill.png",
    isAvailable: true,
    id: "christmas"
  },
  {
    linkScene: "../../../src/assets/modifier/new-york.png",
    isAvailable: true,
    id: "new-york"
  },
  {
    linkScene: "../../../src/assets/modifier/cafe-set.png",
    isAvailable: false
  },
  {
    linkScene: "../../../src/assets/modifier/forest-set.png",
    isAvailable: false
  },
  {
    linkScene: "../../../src/assets/modifier/lofi_desk.png",
    isAvailable: false
  },
  {
    linkScene: "../../../src/assets/modifier/ocean-set.png",
    isAvailable: false
  },
  {
    linkScene: "../../../src/assets/modifier/van-set.png",
    isAvailable: false
  }
];
</script>
<style scoped>
.menu-playlist {
  z-index: 5;
  position: absolute;
  background-color: black;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 20px 25px;
  border-radius: 30px;
  right: 105px;
  top: 240px;
}
.playlists-template{
  gap: 20px;
}
.playlists-template img {
  aspect-ratio: 72/90;
  cursor: pointer;
  height: 120px;
  object-fit: cover;
  transition: all 0.5s ease;
}
.p1{
  content: url(../../../src/assets/stylemusic/chill.svg);
}
.p1:hover{
  content: url(../../../src/assets/stylemusic/chill-hover.svg);
}
.p2{
  content: url(../../../src/assets/stylemusic/focus.svg);
}
.p2:hover{
  content: url(../../../src/assets/stylemusic/focus-hover.svg);
}
.p3{
  content: url(../../../src/assets/stylemusic/sleep.svg);
}
.p3:hover{
  content: url(../../../src/assets/stylemusic/sleep-hover.svg);
}
</style>