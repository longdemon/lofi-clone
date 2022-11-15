<template>
    <video
      class="main-video position-absolute top-0 start-0"
      :src="linkVideo"
      muted
      autoplay
      preload="auto"
      loop
    ></video>
</template>
<script setup>
defineProps({
  linkVideo: {
    type: String,
    required: true
  }
})
</script>
  