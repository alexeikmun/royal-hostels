<template>
  <transition name="modal">
    <div v-if="show" class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50" @click.self="$emit('close')">
      <div class="relative bg-white rounded-lg shadow-lg p-4 max-w-4xl  overflow-auto w-1/2 h-9/10" @click.stop>
        <div class="inline-flex flex-row-reverse w-full">
          <button @click="$emit('close')">&times;</button>
        </div>
        <div class="flex justify-between items-center p-2 border-b border-gray-300 text-lg font-bold">
          <slot name="header"></slot>
        </div>
        <div class="p-4 max-h-96 overflow-y-auto scrollbar-hide">
          <slot name="body"></slot>
        </div>
        <div class="flex justify-end items-center w-full p-2 border-t border-gray-300">
          <slot name="footer">
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    // Close the modal when the Escape key is pressed
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        emit('close');
      }
    };

    // Add a listener for the Escape key
    window.addEventListener('keydown', handleKeyDown);

    // Remove the listener when the component is unmounted
    const beforeUnmount = () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

    return { beforeUnmount };
  },
};
</script>


