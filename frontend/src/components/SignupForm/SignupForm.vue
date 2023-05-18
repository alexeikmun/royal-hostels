<template>
  <form class="py-3" @submit.prevent="handleSubmit">
    <div>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 py-2 p-1">
          <div class="flex flex-row">
            <label
              class="block text-gray-400 text-xs font-medium mb-2"
              for="name"
            >
              First Name
            </label>

            <label
              v-if="firstName.length === 0"
              class="block text-red-700 text-xs font-light mb-2 pl-0.5"
            >
              *
            </label>
          </div>

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
          <div class="flex flex-row">
            <label
              class="block text-gray-400 text-xs font-medium mb-2"
              for="lastName"
            >
              Last Name
            </label>
            <label
              v-if="lastName.length === 0"
              class="block text-red-700 text-xs font-light mb-2 pl-0.5"
            >
              *
            </label>
          </div>
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
          <div class="flex flex-row">
            <label
              class="block text-gray-400 text-xs font-medium mb-2"
              for="address"
            >
              Address
            </label>
            <label
              v-if="address.length === 0"
              class="block text-red-700 text-xs font-light mb-2 pl-0.5"
            >
              *
            </label>
          </div>
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
          <div class="flex flex-row">
            <label
              class="block text-gray-400 text-xs font-medium mb-2"
              for="phone"
            >
              Phone number
            </label>
            <label
              v-if="phone.length === 0"
              class="block text-red-700 text-xs font-light mb-2 pl-0.5"
            >
              *
            </label>
          </div>
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
      <div class="flex flex-row">
        <label class="block text-gray-400 text-xs font-medium mb-2" for="email">
          Email
        </label>
        <label
          v-if="email.length === 0"
          class="block text-red-700 text-xs font-light mb-2 pl-0.5"
        >
          *
        </label>
      </div>
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
      <div class="flex flex-row">
        <label
          class="block text-gray-400 text-xs font-medium mb-2"
          for="password"
        >
          Password
        </label>
        <label
          v-if="password.length === 0"
          class="block text-red-700 text-xs font-light mb-2 pl-0.5"
        >
          *
        </label>
      </div>
      <label
        v-if="
          checkPasswordSecurity(password) !== 'This looks secure' &&
          password.length > 0
        "
        class="block text-red-700 text-xs font-medium mb-2 pt-2"
        >{{ checkPasswordSecurity(password) }}
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
      <div class="flex flex-row">
        <label
          class="block text-gray-400 text-xs font-medium mb-2"
          for="confirmPassword"
        >
          Confirm password
        </label>
        <label
          v-if="confirmPassword.length === 0"
          class="block text-red-700 text-xs font-light mb-2 pl-0.5"
        >
          *
        </label>
      </div>
      <input
        v-model="confirmPassword"
        class="border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
        id="confirmPassword"
        type="password"
        placeholder="*******"
        required
      />
      <label
        v-if="password !== confirmPassword"
        class="block text-red-700 text-xs font-medium mb-2 pl-2 pt-2"
      >
        Oops, those passwords don't look alike.
      </label>
    </div>
    <button
      type="submit"
      class="group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-orange-600 enabled:hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 h-[45px] transition-all disabled:opacity-25"
      :disabled="
        password === '' ||
        email === '' ||
        firstName === '' ||
        lastName === '' ||
        address === '' ||
        phone === '' ||
        confirmPassword === '' ||
        checkPasswordSecurity(password) !== 'This looks secure'
      "
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
function containsNumber(str: string) {
  return /\d/.test(str);
}
function containsSpecialCharacters(str: string) {
  return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?¡¿~]/.test(str);
}
function checkPasswordSecurity(str: string) {
  if (str.length < 8)
    return 'Keep typing! your password must be at least 8 characters long ';
  else {
    const stringContainsNumber = containsNumber(str);
    const stringContainsSpecialCharacters = containsSpecialCharacters(str);
    if (!stringContainsNumber && !stringContainsSpecialCharacters) {
      return 'Type some numbers and some crazy characters!';
    }
    if (!stringContainsNumber) {
      return 'Do not forget to type some numbers too';
    }
    if (!stringContainsSpecialCharacters) {
      return 'Do not forget to type some crazy characters like ¡?=)(/&%$#"!+-';
    }
  }
  return 'This looks secure';
}
</script>
