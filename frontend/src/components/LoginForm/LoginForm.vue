<template>
  <form class="w-full max-w-lg mx-auto space-y-6" @submit.prevent="submitForm">
    <input type="hidden" name="remember" value="true">
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <label for="email-address" class="sr-only">Email address</label>
        <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" v-model="email">
      </div>
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Password
        </label>
        <label for="password" class="sr-only">Password</label>
        <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" v-model="password">
      </div>
    </div>
    <div class="text-sm">
      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
        Forgot your password?
      </a>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" v-model="remember">
        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
          Remember me
        </label>
      </div>
    </div>
    <div>
      <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
        Sign in
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  props: {
    onSubmit: {
      type: Function,
      required: true,
    }
  },
  data() {
    return {
      email: '',
      password: '',
      remember: false,
    }
  },
  methods: {
    submitForm() {
      const { email, password, remember } = this
      this.onSubmit({ email, password, remember })
    }
  }
}
</script>
