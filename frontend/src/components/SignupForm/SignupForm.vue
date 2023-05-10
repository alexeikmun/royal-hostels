<template>
  <form class="p-6" @submit.prevent="handleSubmit">
    <div>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 py-2 p-1">
          <label
            class="block text-gray-400 text-xs font-medium mb-2"
            for="name"
          >
            First name
          </label>
          <input
            v-model="firstName"
            class="border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
            id="firstName"
            type="text"
            placeholder="Dory"
            required
          />
        </div>
        <div class="w-full md:w-1/2 py-2 p-1">
          <label
            class="block text-gray-400 text-xs font-medium mb-2"
            for="name"
          >
            Last name
          </label>
          <input
            v-model="lastName"
            class="border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
            id="lastName"
            type="text"
            placeholder="DeGenerees"
            required
          />
        </div>
      </div>
    </div>

    <div>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 p-1">
          <label
            class="block text-gray-400 text-xs font-medium mb-2"
            for="address"
          >
            Address
          </label>
          <input
            v-model="address"
            class="border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
            id="address"
            type="text"
            placeholder="p sherman wallaby 42 sidney"
            required
          />
        </div>
        <div class="w-full md:w-1/2 p-1">
          <label
            class="block text-gray-400 text-xs font-medium mb-2"
            for="phone"
          >
            Phone number
          </label>
          <input
            v-model="phone"
            class="border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
            id="phone"
            type="tel"
            placeholder="+57 310000000"
            required
          />
        </div>
      </div>
    </div>

    <div class="mb-4"></div>

    <div class="mb-4">
      <label class="block text-gray-400 text-xs font-medium mb-2" for="email">
        Email
      </label>
      <input
        v-model="email"
        class="border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
        id="email"
        type="email"
        placeholder="example@example.com"
        required
      />
    </div>
    <div class="mb-4">
      <label
        class="block text-gray-400 text-xs font-medium mb-2"
        for="password"
      >
        Password
      </label>
      <input
        v-model="password"
        class="border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
        id="password"
        type="password"
        placeholder="Use a high security password"
        required
      />
    </div>

    <div class="mb-4">
      <label
        class="block text-gray-400 text-xs font-medium mb-2"
        for="confirmPassword"
      >
        Confirm password
      </label>
      <input
        v-model="confirmPassword"
        class="border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
        id="confirmPassword"
        type="password"
        placeholder="*******"
        required
      />
    </div>
    <button
      type="submit"
      class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
    >
      Sign Up
    </button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const firstName = ref('');
const lastName = ref('');
const address = ref('');
const phone = ref('');
const confirmPassword = ref('');

function handleSubmit() {}
</script>
