<template>
  <div class="menu-mood">
    <h4>Mood</h4>
    <div class="list-mood d-flex">
      <div
        class="sleepy mood d-flex flex-column justify-content-center align-items-center"
        :class="{'active-mood': mood == 'sleepy'}"
        @click="handleChangeMood('sleepy')"
      >
        <Icon icon="fa-solid:cloud-moon" class="icon" width="40" height="40"></Icon>
        <span>Sleepy</span>
      </div>
      <div
        class="jazzy mood d-flex flex-column justify-content-center align-items-center"
        :class="{'active-mood': mood == 'jazzy'}"
        @click="handleChangeMood('jazzy')"
      >
        <Icon icon="fa6-solid:guitar" class="icon" width="40" height="40"></Icon>
        <span>Jazzy</span>
      </div>
      <div
        class="chill mood d-flex flex-column justify-content-center align-items-center"
        :class="{'active-mood': mood == 'chill'}"
        @click="handleChangeMood('chill')"
      >
        <Icon icon="fa-solid:coffee" class="icon" width="40" height="40"></Icon>
        <span>Chill</span>
      </div>
    </div>

    <div id="main-volume" class="d-flex justify-content-center align-items-center">
      <Icon icon="bi:volume-mute-fill" class="volume-icon" width="40" height="40"></Icon>
      <input
        type="range"
        min="0"
        max="100"
        v-model="value"
        id="volume-bar"
        :style="{background: volumeSize}"
        step="1"
      />
      <Icon icon="bi:volume-up-fill" class="volume-icon" width="40" height="40"></Icon>
    </div>
    <h5>Background noises</h5>
    <div class="list-noise">
      <Noise
        v-for="(noise, index) in listNoise"
        :key="index"
        :name="noise.name"
        :id-input="noise.idInput"
        :id-audio="noise.idAudio"
        :audioLink="noise.audioLink"
      />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, computed, watch } from "vue";
import Noise from "./Noise.vue";
import { useStyleMusicState } from "../../store";

const {styleMusicState, hanleChangeVolume, hanleChangeStyle} = useStyleMusicState()
const value = ref(50);
const mood = ref("sleepy");


const volumeSize = computed(() => {
  const size = ((value.value - 0) / (100 - 0)) * 100;
  return (
    "linear-gradient(to right, #f3a952 0%, #f3a952 " +
    size +
    "%, transparent " +
    size +
    "%, transparent 100%)"
  );
});

watch(value, () => {
    hanleChangeVolume(value.value)
})

const handleChangeMood = props => {
  mood.value = props;
  hanleChangeStyle(props)
};

const listNoise = [
  {
    name: "City traffic",
    idInput: "traffic-volume",
    idAudio: "traffic-audio",
    audioLink: "../../src/assets/effect/city_traffic.mp3"
  },
  {
    name: "City rain",
    idInput: "rain-volume",
    idAudio: "rain-audio",
    audioLink: "../../src/assets/effect/rain_city.mp3"
  },
  {
    name: "Fireplace",
    idInput: "fireplace-volume",
    idAudio: "fireplace-audio",
    audioLink: "../../src/assets/effect/fireplace.mp3"
  },
  {
    name: "Campfire",
    idInput: "campfire-volume",
    idAudio: "campfire-audio",
    audioLink: "../../src/assets/effect/campfire.mp3"
  },
  {
    name: "Forest Sounds",
    idInput: "forest-volume",
    idAudio: "forest-audio",
    audioLink: "../../src/assets/effect/forest_night.mp3"
  },
  {
    name: "Forest Rain",
    idInput: "forest-rain-volume",
    idAudio: "forest-rain-audio",
    audioLink: "../../src/assets/effect/rain_forest.mp3"
  },
  {
    name: "Waves",
    idInput: "waves-volume",
    idAudio: "waves-audio",
    audioLink: "../../src/assets/effect/waves.mp3"
  },
  {
    name: "Fan",
    idInput: "fan-volume",
    idAudio: "fan-audio",
    audioLink: "../../src/assets/effect/fan.mp3"
  },
  {
    name: "Summer Storm",
    idInput: "storm-volume",
    idAudio: "storm-audio",
    audioLink: "../../src/assets/effect/summer_storm.mp3"
  },
  {
    name: "River",
    idInput: "river-volume",
    idAudio: "river-audio",
    audioLink: "../../src/assets/effect/river.mp3"
  },
  {
    name: "Bird",
    idInput: "bird-volume",
    idAudio: "bird-audio",
    audioLink: "../../src/assets/effect/birds.mp3"
  },
  {
    name: "People Talking",
    idInput: "people-volume",
    idAudio: "people-audio",
    audioLink: "../../src/assets/effect/people_talk_inside.mp3"
  },
  {
    name: "River Talking",
    idInput: "river-volume",
    idAudio: "river-audio",
    audioLink: "../../src/assets/effect/river.mp3"
  },
  {
    name: "Ocean Sound",
    idInput: "ocean-volume",
    idAudio: "ocean-audio",
    audioLink: "../../src/assets/effect/ocean.mp3"
  },
  {
    name: "Blizzard Talking",
    idInput: "blizzard-volume",
    idAudio: "blizzard-audio",
    audioLink: "../../src/assets/effect/snow.mp3"
  }
];
</script>

<style scoped>
.menu-mood {
  z-index: 5;
  position: absolute;
  background-color: black;
  width: 410px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 25px 30px;
  border-radius: 30px;
  right: 105px;
  top: 140px;
}
.icon {
  color: var(--color-icon);
  transition: 0.2s;
}
.list-mood {
  gap: 20px;
  padding: 0 20px;
}
.mood {
  background-color: var(--color-bgd-200);
  width: 90px;
  height: 90px;
  border-radius: 20px;
  cursor: pointer;
  /* padding: 20px 0; */
}
.active-mood .icon {
  color: var(--color-primary) !important;
}
span {
  opacity: 0.3;
  color: #fff !important;
}
.active-mood span {
  opacity: 1;
}
.volume-icon {
  color: var(--color-primary);
}
.list-noise {
  overflow-y: scroll;
  height: 200px;
}
.list-noise::-webkit-scrollbar {
  appearance: none;
}
#main-volume input {
  flex: 1;
  margin: 0 10px;
  height: 10px;
  width: 356px;
}
</style>