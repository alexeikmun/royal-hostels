<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    open: boolean
}>()
const emits = defineEmits(['closeModal'])
</script>

<template>
    <div v-show="open">
        <div
            ref="content"
            class="fixed transition-all duration-700 overflow-hidden flex items-center justify-center w-full h-full top-0 right-0 z-[1000] animate-slide-right"
        >
            <div
            class="fixed inset-0 z-100 bg-transparent"
            @click="$emit('closeModal')"
            ></div>
            <div 
            class="bg-white w-[80%] h-full absolute right-0 top-0"
            style="box-shadow: -2px 2px 20px 2px #d2d2d2"
            >
                
                <slot></slot>
            </div>
        </div>
    </div>
</template>