<template>
  <div class="header d-flex justify-content-between align-items-center col-12">
    <Logo height="100" />

    <div class="actions d-flex align-items-center col-xl-3 col-lg-4 col-md-5 col-6 justify-content-between">
      <button id="switch-btn">
        <label class="switch">
          <input
            type="checkbox"
            id="day-night--switch"
            @click="toggleDayNight"
            v-model="backgroundState.isDay"
          />
          <span class="slider-btn"></span>
        </label>
      </button>
      <button class="login-bth" @click="handleOpenModal">Login</button>
      <img @click="handleZoom" class="button" src="../assets/thumb-icon/fullscreen.svg" alt />
      <div style="position: relative;">
        <img class="button" src="../assets/thumb-icon/menu.svg" alt @click="isShowMenu = !isShowMenu" />
        <Transition>
          <Menu v-if="isShowMenu"/>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Logo from "./logo/Logo.vue";
import Menu from "./menu/MenuSetting.vue";
import { useBackgroundState } from "../store";
import common from "../common/zoom.js"

const isDay = ref(true);
const isShowMenu = ref(false);
const {backgroundState, toggleDayNight} = useBackgroundState()

const emit = defineEmits(["onOpen", "onChangeDayNight"]);
function handleOpenModal() {
  emit("onOpen");
}
const handelChangeDayNight = () => {
  emit("onChangeDayNight", isDay.value);
};

const handleZoom = () => {
  common.handleZoom()
}

</script>

<style>
.header {
  width: 100%;
  font-size: 12px;
  z-index: 2;
  padding: 0 50px;
}
.actions {
  z-index: 5;
  transition: 0.2s;
}
#switch-btn {
  background-color: transparent;
  border: none;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider-btn {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
}
.slider-btn:before {
  position: absolute;
  border-radius: 50%;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider-btn {
  background-color: #f3a952;
}
input:checked + .slider-btn:before {
  transform: translateX(26px);
}
.login-bth {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff !important;
  border-radius: 22px;
  border-color: #fff !important;
  width: 120px;
  height: 50px;
  border-width: 1px;
  font-size: 1.8rem;
}
</style>