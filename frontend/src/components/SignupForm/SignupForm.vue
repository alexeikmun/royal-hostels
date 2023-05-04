<template>
  <form class="w-full max-w-lg mx-auto" @submit.prevent="submitForm">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email Address
        </label>
        <input
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email address"
            required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="first-name">
          First Name
        </label>
        <input
            v-model="firstName"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="first-name"
            type="text"
            placeholder="Enter your first name"
            required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
          Address
        </label>
        <textarea
            v-model="address"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            rows="3"
            placeholder="Enter your address"
            required
        ></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
          Phone Number
        </label>
        <input
            v-model="phone"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">
          Confirm Password
        </label>
        <input
            v-model="confirmPassword"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            placeholder="Confirm your password"
            required
        />
      </div>
      <div class="mb-4">
        <div class="flex items-center justify-between">
          <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "SignupForm",
  props: {
    onSubmit: {
      type: Function,
      required: true,
    }
  },
  data() {
    return {
      email: '',
      firstName: '',
      address: '',
      phone: '',
      password: '',
      confirmPassword: '',
      remember: false,
    }
  },
  methods: {
    submitForm() {
      const formData = {
        email: this.email,
        firstName: this.firstName,
        address: this.address,
        phone: this.phone,
        password: this.password,
        confirmPassword: this.confirmPassword,
        remember: this.remember,
      }
      this.$emit('submit', formData)
    },
  },
}
</script>
