<template>
  <form class="py-3" @submit.prevent="handleSubmit">
    <div class="mb-4">
      <div class="flex flex-row">
        <label class="block text-gray-400 text-xs font-medium mb-2" for="name">
          Name
        </label>
        <label
          v-if="name.length === 0"
          class="block text-red-700 text-xs font-light mb-2 pl-0.5"
        >
          *
        </label>
      </div>
      <input
        v-model="name"
        class="border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
        id="name"
        type="name"
        placeholder="Palace"
        required
      />
    </div>

    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 py-2 p-1">
        <div class="flex flex-row">
          <label
            class="block text-gray-400 text-xs font-medium mb-2"
            for="email"
          >
            email
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
          id="name"
          type="email"
          placeholder="example@example.com"
          required
        />
      </div>
      <div class="w-full md:w-1/2 py-2 p-1">
        <div class="flex flex-row">
          <label
            class="block text-gray-400 text-xs font-medium mb-2"
            for="phone"
          >
            Phone
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
          type="number"
          placeholder="302000000"
          required
        />
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 py-2 p-1">
        <div class="flex flex-row">
          <label
            class="block text-gray-400 text-xs font-medium mb-2"
            for="city"
          >
            city
          </label>

          <label
            v-if="city.length === 0"
            class="block text-red-700 text-xs font-light mb-2 pl-0.5"
          >
            *
          </label>
        </div>

        <input
          v-model="city"
          class="border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
          id="city"
          type="text"
          placeholder="example@example.com"
          required
        />
      </div>
      <div class="w-full md:w-1/2 py-2 p-1">
        <div class="flex flex-row">
          <label
            class="block text-gray-400 text-xs font-medium mb-2"
            for="country"
          >
            country
          </label>
          <label
            v-if="country.length === 0"
            class="block text-red-700 text-xs font-light mb-2 pl-0.5"
          >
            *
          </label>
        </div>
        <input
          v-model="country"
          class="border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
          id="country"
          type="text"
          placeholder="302000000"
          required
        />
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 py-2 p-1">
        <div class="flex flex-row">
          <label
            class="block text-gray-400 text-xs font-medium mb-2"
            for="address"
          >
            address
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
          placeholder="p sherman"
          required
        />
      </div>
      <div class="w-full md:w-1/2 py-2 p-1">
        <div class="flex flex-row">
          <label
            class="block text-gray-400 text-xs font-medium mb-2"
            for="zipCode"
          >
            zip Code
          </label>
          <label
            v-if="zipCode.length === 0"
            class="block text-red-700 text-xs font-light mb-2 pl-0.5"
          >
            *
          </label>
        </div>
        <input
          v-model="zipCode"
          class="border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
          id="zipCode"
          type="text"
          placeholder="302000000"
          required
        />
      </div>
    </div>

    <div class="mb-4">
      <div class="flex flex-row">
        <label class="block text-gray-400 text-xs font-medium mb-2" for="image">
          image url
        </label>
        <label
          v-if="image.length === 0"
          class="block text-red-700 text-xs font-light mb-2 pl-0.5"
        >
          *
        </label>
      </div>
      <input
        v-model="image"
        class="border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
        id="image"
        type="text"
        placeholder="Palace"
        required
      />
    </div>

    <div class="mb-4">
      <div class="flex flex-row">
        <label
          class="block text-gray-400 text-xs font-medium mb-2"
          for="description"
        >
          description
        </label>
        <label
          v-if="description.length === 0"
          class="block text-red-700 text-xs font-light mb-2 pl-0.5"
        >
          *
        </label>
      </div>
      <input
        v-model="description"
        class="border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs h-[45px] placeholder:text-gray-300"
        id="description"
        type="text"
        placeholder="description"
        required
      />
    </div>

    <button
      type="submit"
      class="group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-orange-600 enabled:hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 h-[45px] transition-all disabled:opacity-25"
      :disabled="
        email === '' ||
        description === '' ||
        name === '' ||
        address === '' ||
        phone === '' ||
        city === '' ||
        country === '' ||
        image === '' ||
        zipCode === ''
      "
    >
      Create Property
    </button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const description = ref('');
const image = ref('');
const zipCode = ref('');
const city = ref('');
const country = ref('');
const email = ref('');
const name = ref('');
const address = ref('');
const phone = ref('');

function handleSubmit() {}
</script>
