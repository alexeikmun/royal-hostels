<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import {
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/vue/24/solid';
import Dropdown from './UserDropdown.vue';
import Modal from '../Modal/Modal.vue';
import LoginForm from '../LoginForm/LoginForm.vue';
import SignupForm from '../SignupForm/SignupForm.vue';
import navData from '../../data/navData';

// import SideBarDrawer from '../../common/SideBarDrawer.vue';
const props = defineProps<{
  slim: boolean;
  isLoggedIn: boolean;
}>();

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const open = ref(false);
const toggle = (shouldOpen: boolean) => {
  open.value = shouldOpen;
};
const showModal = ref(false);
const showSignupModal = ref(false);
</script>

<template>
  <header aria-label="Site Header" class="shadow-md h-[80px]">
    <div
      class="mx-auto flex max-w-screen-xl items-center justify-between px-4 h-full"
    >
      <div class="flex items-center gap-4">
        <a href="#">
          <span class="sr-only">Logo</span>
          <span class="h-10 w-20 rounded-lg bg-gray-200"></span>
        </a>

        <form class="mb-0 hidden lg:flex">
          <div class="relative">
            <img src="/assets/logo.png" class="w-[200px]" />
          </div>
        </form>
      </div>
      <div class="flex w-0 flex-1 lg:hidden">
        <button
          class="rounded-full bg-gray-100 p-2 text-gray-600"
          type="button"
        >
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

      <nav
        aria-label="Site Nav"
        class="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
      >
        <a
          v-for="nav in navData"
          class="text-[#502A18] scale-110 transition-all"
          :href="nav.path"
          :key="nav.name"
          >{{ nav.name }}</a
        >
      </nav>

      <div class="hidden items-center gap-4 lg:flex">
        <div class="flex relative" v-if="isLoggedIn">
          <button
            @click="toggleDropdown"
            class="rounded-full bg-gray-100 p-0 text-gray-600"
            type="button"
          >
            <span class="sr-only">Account</span>
            <UserCircleIcon class="h-10 w-10 text-stone-800" />
          </button>
          <Dropdown :toggle="showDropdown">
            <div
              class="absolute end-0 z-10 mt-0 w-56 rounded-md border border-gray-100 bg-white shadow-lg top-[60px]"
              role="menu"
            >
              <div class="p-2">
                <a
                  href="#"
                  class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  View Account
                </a>

                <a
                  href="#"
                  class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  View Reservations
                </a>

                <form method="POST" action="#">
                  <button
                    type="submit"
                    class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    role="menuitem"
                  >
                    <ArrowLeftOnRectangleIcon class="h-4 w-4 text-orange-800" />
                    Logout
                  </button>
                </form>
              </div>
            </div>
          </Dropdown>
        </div>

        <div class="hidden items-center gap-4 lg:flex" v-else>
          <button
            class="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600"
            @click="showModal = true"
          >
            Login
          </button>
          <button
            @click="showSignupModal = true"
            class="rounded-lg bg-orange-600 hover:bg-orange-400 px-5 py-2 text-sm font-medium text-white transition-all"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>

    <Modal :show="showModal" @close="showModal = false" customClass="w-[27%]">
      <template v-slot:header>
        <h2 class="text-[#502A18] scale-110 transition-all pb-3">Login</h2>
      </template>
      <template v-slot:body>
        <LoginForm />
      </template>
    </Modal>

    <Modal
      :show="showSignupModal"
      @close="showSignupModal = false"
      customClass="w-[45%]"
    >
      <template v-slot:header>
        <h2 class="text-[#502A18] scale-110 transition-all pb-3">Sign Up</h2>
      </template>
      <template v-slot:body>
        <SignupForm on-submit="this.console.log($event.target.name)">
        </SignupForm>
      </template>
    </Modal>
  </header>
</template>
