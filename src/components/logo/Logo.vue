<script setup>
defineProps({
  height: {
    type: String,
    required: false
  }
})
</script>

<template>
    <div style="z-index: 2;">
        <img src="../../assets/logo.gif" :style="{ height: height + 'px'}"/>
    </div>
</template>