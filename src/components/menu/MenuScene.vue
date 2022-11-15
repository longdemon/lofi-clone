<template>
  <div class="menu-scene">
    <h4>Scenes</h4>
    <div class="list-scene d-flex flex-column">
      <div
        v-for="(scene, index) in listScene"
        :key="index"
        class="video-item"
        :class="{'video-active': scene.isAvailable}"
        @click="scene.isAvailable ? hanleChangeScene(scene.id) : null"
      >
        <img :src="scene.linkScene" alt class="video-item--img" />
        <button v-if="!scene.isAvailable">
          <Icon icon="fa-solid:crown" width="25" height="25"></Icon> Go Premium
        </button>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { Icon } from "@iconify/vue";
import { useBackgroundState } from "../../store";
import chillImg from "../../assets/modifier/chill.png"
import newyorkImg from "../../assets/modifier/new-york.png"
import cafesetImg from "../../assets/modifier/cafe-set.png"
import forestsetImg from "../../assets/modifier/forest-set.png"
import lofideskImg from "../../assets/modifier/lofi_desk.png"
import oceansetImg from "../../assets/modifier/ocean-set.png"
import vansetImg from "../../assets/modifier/van-set.png"
const {hanleChangeScene} = useBackgroundState()

const listScene = [
  {
    linkScene: chillImg,
    isAvailable: true,
    id: 'christmas'
  },
  {
    linkScene: newyorkImg,
    isAvailable: true,
    id: 'new-york'
  },
  {
    linkScene: cafesetImg,
    isAvailable: false
  },
  {
    linkScene: forestsetImg,
    isAvailable: false
  },
  {
    linkScene: lofideskImg,
    isAvailable: false
  },
  {
    linkScene: oceansetImg,
    isAvailable: false
  },
  {
    linkScene: vansetImg,
    isAvailable: false
  }
];

</script>
<style scoped>
.menu-scene {
  z-index: 5;
  position: absolute;
  background-color: black;
  width: 410px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 0px 10px 20px 25px;
  border-radius: 30px;
  right: 105px;
  top: 50%;
  transform: translate(0px, -50%);
  overflow-y: scroll;
  height: 480px;
  border-top: 25px solid;
}
.menu-scene::-webkit-scrollbar {
  appearance: none;
}
.video-item {
  width: 100%;
  margin: 5px 0;
  position: relative;
}
.video-item img {
    opacity: 0.5;
}
.video-active img{
  opacity: 1;
  cursor: pointer;
}
.video-item--img {
  width: 100%;
}
.video-item button {
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: 80%;
    background-color: #f3a952;
    color: black;
    border: none;
    font-weight: bold;
    border-radius: 20px;
    transform: translate(-50%, 0px);
    padding: 10px;
}
</style>