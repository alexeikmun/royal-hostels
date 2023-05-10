<template>
      <form class="p-6" @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-400 text-xs font-medium  mb-2" for="email">
            Email
          </label>
          <input
              v-model="email"
              class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
              id="email"
              type="email"
              placeholder="example@exsmple.com"
              required
          >
        </div>
        <div class="mb-6">
          <label class="block text-gray-400 text-xs font-medium  mb-2" for="password">
            Password
          </label>
          <input
              v-model="password"
              class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
              id="password"
              type="password"
              placeholder="***********"
              required
          >
        </div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
          Login
        </button>
      </form>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    function handleSubmit() {
      // Do something with the username and password
    }

    return {
      email,
      password,
      handleSubmit,
    };
  },
};
</script>
