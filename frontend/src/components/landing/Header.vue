<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import SideBarDrawer from '../../common/SideBarDrawer.vue';
const props = defineProps<{
  slim: boolean;
}>();
const open = ref(false)
const isLoggedIn = ref(false)
const toggle = (shouldOpen: boolean) => {
    open.value = shouldOpen
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
      <a
        href="#"
        class="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600"
      >
        Log in
      </a>

      <a
        href="#"
        class="rounded-lg bg-orange-600 hover:bg-orange-400 px-5 py-2 text-sm font-medium text-white transition-all"
      >
        Sign up
      </a>
    </div>
  </div>

</header>

</template>

