<script setup>
import LoginModal from "../components/modal/LoginModal.vue";
import SignupModal from "../components/modal/SignupModal.vue";
import Header from "../components/Header.vue";
import Footer from "../components/FooterComponent.vue";
import Background from "../components/background/Background.vue";
import SideBar from "../components/SideBar.vue";
import { ref } from "vue";
const isShowLoginModal = ref(false);
const isShowSignupModal = ref(false);
const handleShowLoginModal = () => {
  isShowLoginModal.value = !isShowLoginModal.value;
  isShowSignupModal.value = false;
};

const handleShowSignupModal = () => {
  isShowLoginModal.value = false;
  isShowSignupModal.value = !isShowSignupModal.value;
};

</script>

<template>
  <main>
    <Header @onOpen="handleShowLoginModal" />
    <SideBar />
    <Footer />
    <Background />
    <Transition>
      <LoginModal
        v-if="isShowLoginModal"
        @onClose="handleShowLoginModal"
        @onClickSignup="handleShowSignupModal"
      />
    </Transition>
    <Transition>
      <SignupModal
        v-if="isShowSignupModal"
        @onClose="handleShowSignupModal"
        @onClickLogin="handleShowLoginModal"
      />
    </Transition>
  </main>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
