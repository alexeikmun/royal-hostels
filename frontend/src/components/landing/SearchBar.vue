
<script lang="ts" setup>
import { ref } from 'vue';
import { MagnifyingGlassIcon, UserPlusIcon, GlobeAsiaAustraliaIcon } from '@heroicons/vue/24/outline'
import { UserCircleIcon, PlusIcon, MinusIcon } from '@heroicons/vue/24/solid'
import ModalSmall from '../../common/ModalSmall.vue';

enum AddOrSubtractGuest {
    ADD = 'add',
    SUBTRACT = 'subtract'
}
let numberOfGuests = ref(0)
let modalIsOpen = ref(false);

const handleShowOrHideModal = (show: boolean) => {
    console.log("OPEN");
    modalIsOpen.value = show
}

const handleAddOrSubtractGuest = (operation: string) => {
    numberOfGuests.value = operation === AddOrSubtractGuest.ADD ? 
        numberOfGuests.value + 1 
        : 
        numberOfGuests.value > 0 ? 
            numberOfGuests.value - 1
            :
            0
}
</script>

<template>
    <div class="w-full h-[120px] flex justify-center items-center relative">
        <div class="w-[85%] flex justify-center items-center h-[80%] bg-transparent rounded-2xl shadow-md border-2 border-gray-100 hover:shadow-xl transition-all">
            <div class="flex justify-around items-center bg-white p-2 w-[35%] rounded-full mr-3 h-[70%] border-2 border-gray-200">
                <GlobeAsiaAustraliaIcon class="h-8 w-8 text-orange-600"/>
                <input 
                type="text" 
                placeholder="Where to?" 
                class="bg-transparent w-[80%] ml-3 focus-visible:outline-none h-full text-md"
                >
            </div>
            <!-- TICKET #11 -->
            <button 
            class="group flex justify-center items-center bg-white p-2 w-[35%] rounded-full mr-3 h-[70%] transition-all border-2 border-gray-200"
            >
                <p class="text-gray-400 ml-3">Dates range (TODO)</p>
            </button>
            <button 
            class="group flex justify-center items-center bg-white p-2 w-[17%] rounded-full mr-3 h-[70%] hover:bg-orange-600 transition-all border-2 border-gray-200 hover:border-0"
            @click="handleShowOrHideModal(true)"
            >
                <UserPlusIcon class="h-6 w-6 text-orange-600 group-hover:text-white"/>
                <p class="text-gray-400 ml-3 group-hover:text-white">Guests</p>
                <p v-if="numberOfGuests > 0" class="text-gray-900 ml-2 group-hover:text-white">+{{ numberOfGuests }}</p>
            </button>
            <button 
            class="group flex justify-center items-center hover:bg-orange-400 p-2 w-[50px] h-[50px] rounded-full mr-3 h-[60%] bg-orange-600 transition-all"
            >
                <MagnifyingGlassIcon class="h-6 w-6 text-white"/>
            </button>
        </div>
        <ModalSmall 
            title="Number of guests"
            :isOpen="modalIsOpen"
            @closeModal="handleShowOrHideModal(false)"
        >
            <div class="flex w-[200px] justify-start items-center">
                <h3>Guests</h3>
                <div class="flex justify-center items-center ml-5 border-orange-400 rounded-full shadow-lg">
                    <button 
                    class=" bg-orange-500 rounded-l-full h-full p-2"
                    @click="handleAddOrSubtractGuest(AddOrSubtractGuest.SUBTRACT)"
                    >
                        <MinusIcon class="w-3 h-3 text-white" />
                    </button>
                    <p class="ml-2 mr-2 w-10 text-center">{{ numberOfGuests }}</p>
                    <button 
                    class="bg-orange-500 rounded-r-full h-full p-2"
                    @click="handleAddOrSubtractGuest(AddOrSubtractGuest.ADD)"
                    >
                        <PlusIcon class="w-3 h-3 text-white" />
                    </button>
                </div>
            </div>
        </ModalSmall>
    </div>
</template>
