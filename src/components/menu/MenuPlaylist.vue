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
  top: 50%;
  transform: translate(0px, -50%);
}
.playlists-template {
  gap: 20px;
}
.playlists-template img {
  aspect-ratio: 72/90;
  cursor: pointer;
  height: 120px;
  object-fit: cover;
  transition: all 0.5s ease;
}
.p1 {
  content: url(../../../src/assets/stylemusic/chill.svg);
}
.p1:hover {
  content: url(../../../src/assets/stylemusic/chill-hover.svg);
}
.p2 {
  content: url(../../../src/assets/stylemusic/focus.svg);
}
.p2:hover {
  content: url(../../../src/assets/stylemusic/focus-hover.svg);
}
.p3 {
  content: url(../../../src/assets/stylemusic/sleep.svg);
}
.p3:hover {
  content: url(../../../src/assets/stylemusic/sleep-hover.svg);
}

@media screen and (max-width: 400px) {
  .menu-playlist {
    width: 90%;
    right: 5%;
    bottom: 7%;
    top: unset;
    transform: translate(0, -50%);
  }
  .playlists-template img {
    height: 110px;
  }
}
</style>