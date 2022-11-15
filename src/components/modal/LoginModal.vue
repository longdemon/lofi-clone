<script setup>
import Logo from "../logo/Logo.vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import { ref } from "vue";
import { Icon } from '@iconify/vue';

const onSubmitLogin = values => {
  console.log("LOGIN: ", values);
};

const validateUsername = value => {
  if (!value?.trim()) {
    return "This field is required";
  }
  return true;
};
const validatePassword = value => {
  if (!value?.trim()) {
    return "This field is required";
  }
  if (value?.length < 8) {
    return "Too short";
  }
  return true;
};

const emit= defineEmits(["onClose", "onClickSignup"])
function handleCloseModal() {
  emit("onClose")
}

function handleChangeSignup() {
  emit("onClickSignup")
}

</script>

<template>
  <div class="loginModal d-flex flex-column justify-content-center align-items-center">
    <Logo height="150" class="mv-l" />
    <h1 class="white">Welcome back!</h1>
    <h4 class="white">Log in to your account.</h4>
    <Form @submit="onSubmitLogin" class="form-login d-flex flex-column col-md-4 col-8 align-items-center">
      <div class="mv-l col-12">
        <div class="form-row">
          <div class="form-floating mb-3">
            <Field
              name="username"
              type="username"
              class="form-control"
              id="floatingInputUsername"
              autocomplete="off"
              placeholder="ユーザー名"
              :rules="validateUsername"
            />
            <label for="floatingInputUsername">Username</label>
            <div class="error-place">
              <Transition>
                <ErrorMessage name="username" class="text-danger ms-2" />
              </Transition>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-floating mb-3">
            <Field
              name="password"
              type="password"
              class="form-control"
              id="floatingInputPass"
              placeholder="name@example.com"
              :rules="validatePassword"
            />
            <label for="floatingInputPass">Password</label>
            <div class="error-place">
              <Transition>
                <ErrorMessage name="password" class="text-danger ms-2" />
              </Transition>
            </div>
          </div>
        </div>
      </div>

      <button class="button mt-3 mb-5">Login</button>

      <p class="m mv-l">
        Don't have an account?
        <a href="#" class="accent" @click.prevent="handleChangeSignup">Sign up for free</a>
      </p>
    </Form>

    <button class="close-btn" @click="handleCloseModal">
      <Icon icon="eva:close-fill" style="color: white;" width="30" height="30"></Icon>
    </button>
  </div>
</template>

<style scoped>
.loginModal {
  background-color: var(--background-modal);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  z-index: 5;
}
.white {
  color: #fff;
}
.form-control,
.form-control:focus {
  background-color: var(--background-input);
  color: #fff;
}
.form-floating label {
  color: #ccc;
}

.button {
  background-color: var(--color-primary);
  border: 0;
  border-radius: 32px;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  font-family: Roboto, serif;
  font-weight: 600;
  margin: 0;
  min-width: 120px;
  padding: 6px 16px;
  transition: all 0.3s ease;
}
p.m {
  color: #fff;
}
.accent {
  color: var(--color-primary);
}
.error-place {
  height: 20px;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
</style>
