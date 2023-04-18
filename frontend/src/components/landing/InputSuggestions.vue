<script setup lang="ts">
import { ref, computed, watchEffect, defineProps, defineEmits } from 'vue'
import dataDummy from '../../dummy.data.json'
const openSuggestion = ref(false)

const props = defineProps<{
    modelValue: string;
}>();

const emits = defineEmits(['update:modelValue'])

const dataSuggestions = computed(() => props.modelValue !== '' ? dataDummy.places.filter(place => place.toLowerCase().includes(props.modelValue.toLowerCase())) : dataDummy.places )

const hancleSelectSuggestion = (placeSelected: string) => {
    openSuggestion.value = true
    emits('update:modelValue', placeSelected)
    openSuggestion.value = false
}

watchEffect(() => {
    if(props.modelValue !== '') {
        openSuggestion.value = true
    }
})

const blurInput = () => {
    setTimeout(() => {
        openSuggestion.value = false
    }, 300)
}

const focusInput = () => {
    openSuggestion.value = true
}

</script>
<template>
        <div class="inline-flex flex-col justify-center relative text-gray-500 self-start w-[80%] pt-[2px]">
            <div class="relative">
                <input
                type="text"
                class="p-2 pl-1 border-gray-200 bg-white w-full focus-visible:outline-none" placeholder="Where to?" 
                @focus="focusInput"
                @blur="blurInput"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                />
            </div>
            <ul
            v-show="openSuggestion"
            class="bg-white border border-gray-100 w-full mt-2 absolute w-[26vw] left-[-15%] top-[110%]"
            >
                <li
                v-for="place in dataSuggestions"
                class="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-gray-50 hover:text-gray-900"
                @click="hancleSelectSuggestion(place)"
                >
                    <p>{{ place }}  </p>
                </li>
            </ul>
        </div>
</template>