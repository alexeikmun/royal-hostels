<template>
  <div ref="dropdownRef">
    <slot v-if="toggle" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  props: {
    toggle: Boolean,
  },
  setup(props, { emit }) {
    const dropdownRef = ref<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        // If clicked outside, close the dropdown
        // You can toggle some state here to close the dropdown
      }
    };

    onMounted(() => {
      // Attach event listener on mount
      document.addEventListener('mousedown', handleClickOutside);
    });

    onUnmounted(() => {
      // Detach event listener on unmount
      document.removeEventListener('mousedown', handleClickOutside);
    });

    return {
      dropdownRef,
    };
  },
});
</script>
