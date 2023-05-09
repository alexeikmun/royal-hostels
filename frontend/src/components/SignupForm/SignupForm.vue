
<template>
  <form class="p-6" @submit.prevent="handleSubmit">

    <div>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 p-1">
          <label class="block text-gray-400 text-xs font-medium  mb-2" for="name">
            First Name
          </label>
          <input
              v-model="firstName"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
              required
          >
        </div>
        <div class="w-full md:w-1/2 p-1">
          <label class="block text-gray-400 text-xs font-medium  mb-2" for="name">
            Last Name
          </label>
          <input
              v-model="lastName"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
              required
          >
        </div>
      </div>
    </div>


    <div>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 p-1">
          <label class="block text-gray-400 text-xs font-medium  mb-2" for="address">
            Address
          </label>
          <input
              v-model="address"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Address"
              required
          >
        </div>
        <div class="w-full md:w-1/2 p-1">
          <label class="block text-gray-400 text-xs font-medium  mb-2" for="phone">
            Phone Number
          </label>
          <input
              v-model="phone"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Phone Number"
              required
          >
        </div>
      </div>
    </div>

    <div class="mb-4">

    </div>

    <div class="mb-4">
      <label class="block text-gray-400 text-xs font-medium  mb-2" for="email">
        Email
      </label>
      <input
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email"
          required
      >
    </div>
    <div class="mb-4">
      <label class="block text-gray-400 text-xs font-medium  mb-2" for="password">
        Password
      </label>
      <input
          v-model="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
          required
      >
    </div>

    <div class="mb-4">
      <label class="block text-gray-400 text-xs font-medium  mb-2" for="confirmPassword">
        Confirm Password
      </label>
      <input
          v-model="confirmPassword"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          placeholder="Re - Enter your password"
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
    const firstName = ref('');
    const lastName = ref('');
    const address = ref('');
    const phone = ref('');
    const confirmPassword = ref('');

    function handleSubmit() {

    }

    return {
      email,
      password,
      firstName,
      lastName,
      address,
      phone,
      confirmPassword,
      handleSubmit,
    };
  },
};
</script>
