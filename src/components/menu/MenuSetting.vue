<template>
  <div class="menu">
    <ul>
      <li><Icon icon="ant-design:setting-filled" width="15" height="15"></Icon>General setting</li>
      <li><Icon icon="entypo:price-tag" width="15" height="15"></Icon>Pricing</li>
      <li><Icon icon="bi:chat-square-fill" width="15" height="15"></Icon>Contact us</li>
      <li><Icon icon="bi:patch-question-fill" width="15" height="15"></Icon>How is work</li>
      <li><Icon icon="wpf:faq" width="15" height="15"></Icon>FAQ</li>
      <li><Icon icon="fa:share-square" width="15" height="15"></Icon>Share</li>
      <li><Icon icon="akar-icons:info-fill" width="15" height="15"></Icon>About us</li>
      <li><Icon icon="ic:round-feedback" width="15" height="15"></Icon>Share feedback</li>
    </ul>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style>
.menu {
  z-index: 5;
  background-color: #181818;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  top: 40px;
  right: 0;
}
.menu ul li {
  padding: 6px 20px;
  width: 170px;
  display: flex;
  gap: 10px;
  align-items: center;
  transition: 0.3s;
  color: #fff;
}
.menu ul li:hover{
  background-color: var(--color-primary);
  cursor: pointer;
}
</style>