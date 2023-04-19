
<script setup lang="ts">
  import { XMarkIcon } from '@heroicons/vue/24/outline'
  import { defineEmits, ref, defineProps } from 'vue';
  interface ModalProps {
    isOpen: boolean;
    title?: string;
  }

  const emits = defineEmits(['closeModal']);

  const modalProps = defineProps <{
    title: string;
    isOpen: boolean;
  }>();

  const title = ref(modalProps.title);

</script>

<template>
  <div v-show="isOpen">
    <div
      class="fixed inset-0 z-10 bg-gray-500 bg-opacity-75"
      @click="$emit('closeModal')"
    ></div>
    <div
      class="inset-0 z-10 flex justify-center items-center"
    >
      <div
        class="absolute top-10 bottom-10 overflow-y-auto z-20 bg-white rounded-2xl shadow-lg p-6 mx-4 md:max-w-screen-md animate-fade border-2 border-gray-200"
      >
        <div class="flex justify-between text-center items-center mb-4">
          <h2 class="text-2xl font-bold sm:text-3xl">{{ title }}</h2>
          <button 
            class="hover:text-gray-700" 
            @click="$emit('closeModal')"
          >
            <XMarkIcon class="w-5 h-5 text-black" />
          </button>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>