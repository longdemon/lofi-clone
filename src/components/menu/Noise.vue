<template>
  <div class="effect-items">
    <p>{{name}}</p>
    <input
      type="range"
      min="0"
      max="100"
      :id="idInput"
      v-model="value"
      :style="{background: volumeSize}"
      step="1"
    />
    <!-- <audio :src="audioLink" loop :id="idAudio" preload="none"></audio> -->
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useBackgroundState } from "../../store";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  idInput: {
    type: String,
    required: true
  },
  audioLink: {
    type: String,
    required: true
  },
  idAudio: {
    type: String,
    required: true
  }
});

const value = ref(0);
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
const audio = new Audio(props.audioLink);
const { backgroundState, toggleStarryRain } = useBackgroundState();

const handelChangeStarryRain = isStarry => {
  emit("onChangeStarryRain", isDay.value);
};

watch(value, value => {
  if (Number(value) > 0) {
    audio.play();
    audio.volume = Number(value) / 100;
    audio.loop = true;
    if (
      props.idInput === "rain-volume" ||
      props.idInput === "storm-volume" ||
      props.idInput === "forest-rain-volume"
    ) {
      toggleStarryRain(false);
    }
  } else {
    audio.pause();
    if (
      props.idInput === "rain-volume" ||
      props.idInput === "storm-volume" ||
      props.idInput === "forest-rain-volume"
    ) {
      toggleStarryRain(true);
    }
  }
});
</script>

<style scoped>
.effect-items {
  display: flex;
  gap: 20px;
}
.effect-items input {
  width: 200px;
}
p {
  color: #fff;
  width: 110px;
}
</style>