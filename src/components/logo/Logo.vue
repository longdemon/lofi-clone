<script setup>
defineProps({
  height: {
    type: String,
    required: false
  }
})
</script>

<template>
    <div class="logo" style="z-index: 2;">
        <img src="../../assets/logo.gif" :style="{ height: height + 'px'}"/>
    </div>
</template>

<style>
@media screen and (max-width: 400px){
  .logo{
    display: none;
  }
}
</style>