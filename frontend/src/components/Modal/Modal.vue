<template>
  <transition name="modal">
    <div
      v-if="show"
      class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 animate-fade"
      @click.self="$emit('close')"
    >
      <div
        :class="`relative bg-white rounded-lg shadow-lg max-w-4xl overflow-auto h-9/10 p-10 ${customClass}`"
        @click.stop
      >
        <div class="inline-flex flex-row-reverse w-full">
          <button @click="$emit('close')">&times;</button>
        </div>
        <div
          class="flex justify-between items-center border-b border-gray-300 text-lg font-bold"
        >
          <slot name="header"></slot>
        </div>
        <div class="py-2 max-h-full overflow-y-auto scrollbar-hide">
          <slot name="body"></slot>
        </div>
        <div
          class="flex justify-end items-center w-full border-t border-gray-300"
        >
          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps<{
  show: Boolean;
  customClass: string;
}>();
const emit = defineEmits(['close']);
const handleKeyDown = (event: any) => {
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
</script>
