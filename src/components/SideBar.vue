<template>
  <div>
    <div class="side-bar">
      <div class="item" @click="handleMenuMood">
        <Icon
          icon="fa6-solid:sliders"
          width="30"
          height="30"
          class="icon"
          :class="{'isOpen': isOpenMenuMood}"
        ></Icon>
      </div>
      <div class="item">
        <Icon
          @click="handlePlaylist"
          icon="heroicons-solid:template"
          width="30"
          height="30"
          class="icon"
          :class="{'isOpen': isOpenPlaylist}"
        ></Icon>
      </div>
      <div class="item" @click="handleMenuScene">
        <Icon
          icon="uis:scenery"
          width="30"
          height="30"
          class="icon"
          :class="{'isOpen': isOpenMenuScene}"
        ></Icon>
      </div>
      <div class="item">
        <Icon icon="iconoir:selective-tool" width="30" height="30" class="icon"></Icon>
      </div>
    </div>
    <Transition>
      <MenuMood v-show="isOpenMenuMood" />
    </Transition>
    <Transition>
      <MenuPlaylist v-show="isOpenPlaylist" />
    </Transition>
    <Transition>
      <MenuScene v-show="isOpenMenuScene" />
    </Transition>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import MenuMood from "./menu/MenuMood.vue";
import MenuScene from "./menu/MenuScene.vue";
import MenuPlaylist from "./menu/MenuPlaylist.vue";

const isOpenMenuMood = ref(false);
const isOpenMenuScene = ref(false);
const isOpenPlaylist = ref(false);

const handleMenuMood = () => {
  isOpenMenuMood.value = !isOpenMenuMood.value;
  isOpenMenuScene.value = false;
  isOpenPlaylist.value = false;
};

const handleMenuScene = () => {
  isOpenMenuScene.value = !isOpenMenuScene.value;
  isOpenMenuMood.value = false;
  isOpenPlaylist.value = false;
};

const handlePlaylist = () => {
  isOpenPlaylist.value = !isOpenPlaylist.value;
  isOpenMenuScene.value = false;
  isOpenMenuMood.value = false;
};
</script>

<style>
.side-bar {
  z-index: 3;
  position: absolute;
  background-color: var(--background-modal);
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  border-radius: 50px;
  top: 50%;
  transform: translate(-50%, -50%);
  right: 0px;
}

.item {
  padding: 20px 0;
  border-top: 1px solid #4e5054;
}
.isOpen {
  color: #fff !important;
}
.item:first-child {
  border-top: none;
}
.icon {
  color: var(--color-icon);
}
.item:hover > .icon {
  color: #fff !important;
}
.item:hover {
  cursor: pointer;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media screen and (max-width: 400px) {
  .side-bar {
    flex-direction: row;
    bottom: 10%;
    transform: translate(-50%, -50%);
    left: 50%;
    right: unset;
    top: unset;
  }
  .item {
    padding: 15px !important;
    border-top: none;
  }
}
</style>