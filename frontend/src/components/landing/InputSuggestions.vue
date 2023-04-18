<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import dataDummy from '../../dummy.data.json'
const inputValue = ref('')
const openSuggestion = ref(false)

const dataSuggestions = computed(() => inputValue.value !== '' ? dataDummy.places.filter(place => place.toLowerCase().includes(inputValue.value.toLowerCase())) : dataDummy.places )

const hancleSelectSuggestion = (placeSelected: string) => {
    openSuggestion.value = true
    inputValue.value = placeSelected
    openSuggestion.value = false
}

watchEffect(() => {
    if(inputValue.value !== '') {
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
                <input v-model="inputValue"
                type="text"
                class="p-2 pl-1 border-gray-200 bg-white w-full focus-visible:outline-none" placeholder="Where to?" 
                @focus="focusInput"
                @blur="blurInput"
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