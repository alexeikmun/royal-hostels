<template>
  <div
    class="inline-flex flex-col justify-center relative text-gray-500 self-start w-[80%] pt-[2px]"
  >
    <div class="relative">
      <input
        class="border-none p-2 pl-1 border-gray-200 bg-white w-full focus:outline-0"
        type="text"
        placeholder="Where to?"
        :value="modelValue"
        @focus="focusInput"
        @blur="blurInput"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <button
        class="hover:text-gray-700 absolute top-[25%] right-0"
        v-if="selectedOption"
        @click="clearSelection"
      >
        <XMarkIcon class="w-5 h-5 text-black" />
      </button>
    </div>
    <ul
      v-show="showOptions"
      class="bg-white border border-gray-100 mt-2 absolute w-[26vw] left-[-15%] top-[110%]"
    >
      <li
        class="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-gray-50 hover:text-gray-900"
        v-for="(option, index) in filteredOptions"
        :key="index"
        @click="handleSelectOption(option)"
      >
        <p>{{ option.city }}, {{ option.country }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect, defineProps, defineEmits } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

const props = defineProps<{
  modelValue: string;
  options: [{ city: string; country: string }];
}>();

const showOptions = ref(false);
const selectedOption = ref(null);

const emits = defineEmits(['update:modelValue']);

const filteredOptions = computed(() => {
  if (props.modelValue !== '') {
    return props.options.filter(option =>
      `${option.city}, ${option.country}`
        .toLowerCase()
        .includes(props.modelValue.toLowerCase()),
    );
  } else {
    return props.options;
  }
});

const handleSelectOption = (option: string) => {
  selectedOption.value = option;
  showOptions.value = true;
  emits('update:modelValue', `${option.city}, ${option.country}`);
  showOptions.value = false;
};

watchEffect(() => {
  if (props.modelValue !== '') {
    showOptions.value = true;
  }
});

const blurInput = () => {
  setTimeout(() => {
    showOptions.value = false;
  }, 300);
};

const focusInput = () => {
  showOptions.value = true;
};

const clearSelection = () => {
  selectedOption.value = null;
  emits('update:modelValue', '');
  showOptions.value = false;
};
</script>
