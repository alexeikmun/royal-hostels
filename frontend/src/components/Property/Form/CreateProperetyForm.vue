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
      <div class="w-full md:w-1/2 p-1">
        <div class="flex flex-row">
          <label
            class="block text-gray-400 text-xs font-medium mb-2"
            for="address"
          >
            Country
          </label>
          <label
            v-if="selectedCountry.length === 0"
            class="block text-red-700 text-xs font-light mb-2 pl-0.5"
          >
            *
          </label>
        </div>
        <select
          id="country"
          v-model="selectedCountry"
          @change="getCities"
          class="w-full md:w-1/1 p-1"
        >
          <option value="">Select a country</option>
          <option
            v-for="country in countries"
            :value="country.name"
            :key="country.alpha2Code"
          >
            {{ country.name.common }}
          </option>
        </select>
      </div>
      <div class="w-full md:w-1/2 p-1" v-if="selectedCountry">
        <div class="flex flex-row">
          <label
            class="block text-gray-400 text-xs font-medium mb-2"
            for="city"
          >
            City
          </label>
          <label
            v-if="selectedCity.length === 0"
            class="block text-red-700 text-xs font-light mb-2 pl-0.5"
          >
            *
          </label>
        </div>
        <select id="city" v-model="selectedCity" class="w-full md:w-1/1 p-1">
          <option value="">Select a city</option>
          <option v-for="city in cities" :value="city" :key="city">
            {{ city }}
          </option>
        </select>
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
interface Country {
  name: string;
  alpha2Code: string;
}

import { ref } from 'vue';
import { watchEffect } from 'vue/dist/vue';
const description = ref('');
const image = ref('');
const zipCode = ref('');
const city = ref('');
const country = ref('');
const email = ref('');
const name = ref('');
const address = ref('');
const phone = ref('');

const selectedCountry = ref('');
const selectedCity = ref('');

const countries = ref<Country[]>([]);
const cities = ref<string[]>([]);

const fetchCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    countries.value = data;
  } catch (error) {
    console.error(error);
  }
};

const fetchCities = async (country: string) => {
  console.log(JSON.stringify(country));
  try {
    const response = await fetch(
      'https://countriesnow.space/api/v0.1/countries/cities',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ country: country.common }),
      },
    );
    const data = await response.json();
    cities.value = data.data.map((city: any) => city);
  } catch (error) {
    console.error(error);
  }
};

const getCities = () => {
  if (selectedCountry.value) {
    fetchCities(selectedCountry.value);
  } else {
    cities.value = [];
  }
};

watchEffect(() => {
  getCities();
});

fetchCountries();

function handleSubmit() {}
</script>
