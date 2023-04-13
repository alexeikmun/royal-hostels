
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
      class="fixed inset-0 z-100 z-100"
      @click="$emit('closeModal')"
    ></div>
    <div
      class="inset-0 z-100 flex justify-center items-center"
    >
      <div
        class="absolute bg-white rounded-2xl shadow-lg p-6 mx-4 md:max-w-screen-md top-[85%] right-[14%] animate-fade border-2 border-gray-200"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-medium">{{ title }}</h2>
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