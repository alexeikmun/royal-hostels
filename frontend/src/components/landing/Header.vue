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
    <header class="shadow-md">
        <nav class="bg-white border-gray-200">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center">
                    <img src="assets/logo.png" alt="logo" class="w-[180px] ml-10">
                </a>

                <button 
                data-collapse-handleOpenOrCloseSidebar="mobile-menu-2" 
                type="button" 
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
                aria-controls="mobile-menu-2" 
                aria-expanded="false"
                @click.prevent="toggle(true)"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>

                <div class="items-center justify-end hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white mr-10">
                        <li>
                            <a class="text-[#502A18] block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 cursor-pointer hover:scale-110 transition-all" aria-current="page">Hostels</a>
                        </li>
                        <li v-if="!isLoggedIn">
                            <a class="text-[#502A18] block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 cursor-pointer hover:scale-110 transition-all" aria-current="page">Signin</a>
                        </li>
                        <li v-if="!isLoggedIn">
                            <a class="text-orange-600 block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 cursor-pointer hover:scale-110 transition-all" aria-current="page">Login</a>
                        </li>
                    </ul>
                    <UserCircleIcon v-if="isLoggedIn" class="h-10 w-10 text-[#502A18]"  />
                </div>
            </div>
        </nav>
        <SideBarDrawer :open="open" @closeModal="toggle(false)">
        </SideBarDrawer>
    </header>
</template>

