<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import ModalSmall from '../../common/Modal.vue';
const props = defineProps<{
  slim: boolean;
}>();
const open = ref(false)
const modalIsOpen = ref(false);
const isLoggedIn = ref(false)
const toggle = (shouldOpen: boolean) => {
    open.value = shouldOpen
}

const handleShowOrHideModal = (show: boolean) => {
    modalIsOpen.value = show
}
</script>

<template>
  <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

<header aria-label="Site Header" class="shadow-md h-[80px]">
  <div
    class="mx-auto flex max-w-screen-xl items-center justify-between px-4 h-full"
  >
    <div class="flex w-0 flex-1 lg:hidden">
      <button class="rounded-full bg-gray-100 p-2 text-gray-600" type="button">
        <span class="sr-only">Account</span>
        <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewbox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
        </svg>
      </button>
    </div>

    <div class="flex items-center gap-4">
      <a href="#">
        <span class="sr-only">Logo</span>
        <span class="h-10 w-20 rounded-lg bg-gray-200"></span>
      </a>

      <form class="mb-0 hidden lg:flex">
        <div class="relative">
          <img src="assets/logo.png" class="w-[200px]">
        </div>
      </form>
    </div>

    <nav
      aria-label="Site Nav"
      class="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
    >
      <a class="text-[#502A18] scale-110 transition-all" href="">Hostels</a>
      <a class="text-[#502A18] scale-110 transition-all" href="">About</a>
      <a class="text-[#502A18] scale-110 transition-all" href="">Contact</a>
    </nav>

    <div class="hidden items-center gap-4 lg:flex">
      <button
        @click="handleShowOrHideModal(true)"
        class="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600"
      >
        Log in
      </button>

      <a
        href="#"
        class="rounded-lg bg-orange-600 hover:bg-orange-400 px-5 py-2 text-sm font-medium text-white transition-all"
      >
        Sign up
      </a>
    </div>
  </div>

</header>
      <ModalSmall 
            title="Number of guests"
            :isOpen="modalIsOpen"
            @closeModal="handleShowOrHideModal(false)">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg text-center">

  </div>

  <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
      <label for="email" class="sr-only">Email</label>

      <div class="relative">
        <input
          type="email"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter email"
        />

        <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>

    <div>
      <label for="password" class="sr-only">Password</label>

      <div class="relative">
        <input
          type="password"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter password"
        />

        <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </span>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <p class="text-sm text-gray-500">
        No account?
        <a class="underline" href="">Sign up</a>
      </p>

      <button
        type="submit"
        class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      >
        Sign in
      </button>
    </div>
  </form>
</div>      </ModalSmall>

</template>

