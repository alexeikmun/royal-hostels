<template>
  <form @submit.prevent="handleSubmit">
    <div class="my-4">
      <label class="block text-gray-400 text-xs font-medium mb-2" for="email">
        Email
      </label>
      <input
        v-model="email"
        class="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
        id="email"
        type="email"
        placeholder="example@exsmple.com"
        required
      />
    </div>
    <div class="mb-6">
      <label
        class="block text-gray-400 text-xs font-medium mb-2"
        for="password"
      >
        Password
      </label>
      <input
        v-model="password"
        class="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
        id="password"
        type="password"
        placeholder="***********"
        required
      />
    </div>
    <button
      type="submit"
      class="group relative w-full flex justify-center items-center py-2 px-4 border border-none text-sm font-medium rounded-lg text-white bg-orange-600 enabled:hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 h-[45px] transition-all disabled:opacity-25"
      :disabled="password === '' || email === ''"
    >
      Login
    </button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { AuthApi } from '../../api/AuthApi';

let error = '';
let isLoading = false;
const email = ref('');
const password = ref('');
const disabled = email.value.length === 0 && password.value.length === 0;

async function handleSubmit() {
  console.log('click handler');
  // Do something with the username and password
  try {
    isLoading = true;
    error = '';

    // Make API request with the entered username
    const response = await AuthApi.login({
      email: email.value,
      password: password.value,
    });

    // Store the response data
    console.log(response);
  } catch (error) {
    error = 'An error occurred while fetching data.';
    console.error(error);
  } finally {
    isLoading = false;
  }
}
</script>
