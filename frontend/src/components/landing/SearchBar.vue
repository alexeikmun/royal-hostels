<script lang="ts" setup>
import { Ref, ref, watchEffect, onBeforeMount, computed } from 'vue';
import {
  MagnifyingGlassIcon,
  UserPlusIcon,
  GlobeAsiaAustraliaIcon,
} from '@heroicons/vue/24/outline';
import { PlusIcon, MinusIcon } from '@heroicons/vue/24/solid';
import { useStore } from '@nanostores/vue';
import { $search } from '../../store/searchStore';
import { propertyApi } from '../../api/ApiBuilder';
import ModalSmall from '../Modal/ModalSmall.vue';
import LocationCombobox from './LocationCombobox.vue';
import DatePicker from './DatePicker.vue';
import dummyData from '../../data/dummy.data';
import { searchApi } from '../../api/searchApi';

interface DatesRange {
  start: string;
  end: string;
}
interface Payload {
  dates: DatesRange;
  guests: number;
  location: string;
}

enum AddOrSubtractGuest {
  ADD = 'add',
  SUBTRACT = 'subtract',
}

const payload: Ref<Payload> = ref({
  guests: 0,
  dates: {
    start: '',
    end: '',
  },
  location: '',
});

const locations = ref([]);

const city = computed(() => {
  return payload.value.location.split(',')[0].trim();
});

onBeforeMount(() => {
  const params = new URLSearchParams();
  params.append('query', '');

  searchApi.searchLocations(params).then(data => {
    locations.value = data;
  });
});

watchEffect(() => {
  console.log('search:effect', payload.value.location);
});

watchEffect(() => {
  console.log('search:city', city.value);
});

const modalIsOpen = ref(false);

const updateDatedRange = (range: DatesRange) => {
  payload.value.dates = range;
};

const handleShowOrHideModal = (show: boolean) => {
  modalIsOpen.value = show;
};

const handleAddOrSubtractGuest = (operation: string) => {
  payload.value.guests =
    operation === AddOrSubtractGuest.ADD
      ? payload.value.guests + 1
      : payload.value.guests > 0
      ? payload.value.guests - 1
      : 0;
};

const performSearch = () => {
  console.log('search:click', payload.value);
  $search.set(payload.value);

  const param = new URLSearchParams();
  param.append('query', city.value);

  searchApi.searchHostels(param).then(data => {
    propertyApi.dataStore.set(data);
  });
};
</script>

<template>
  <div class="h-[120px] flex justify-center items-center relative mx-5">
    <div
      class="w-full flex justify-center items-center h-[80%] bg-transparent rounded-2xl shadow-md border-2 border-gray-100 hover:shadow-xl transition-all"
    >
      <div
        class="flex justify-around items-center bg-white p-2 w-[35%] rounded-full mr-3 h-[70%] border-2 border-gray-200"
      >
        <GlobeAsiaAustraliaIcon class="h-8 w-8 text-orange-600" />
        <LocationCombobox
          :modelValue="payload.location"
          :options="locations"
          @update:modelValue="value => (payload.location = value)"
        />
      </div>
      <!-- TICKET #11 -->
      <button
        class="group flex justify-center items-center bg-white p-2 w-[35%] rounded-full mr-3 h-[70%] transition-all border-2 border-gray-200"
      >
        <DatePicker @updateDatedRange="updateDatedRange" />
      </button>
      <button
        class="group flex justify-center items-center bg-white p-2 w-[17%] rounded-full mr-3 h-[70%] hover:bg-orange-600 transition-all border-2 border-gray-200 hover:border-0"
        @click="handleShowOrHideModal(true)"
      >
        <UserPlusIcon class="h-6 w-6 text-orange-600 group-hover:text-white" />
        <p class="text-gray-400 ml-3 group-hover:text-white">Guests</p>
        <p
          v-if="payload.guests > 0"
          class="text-gray-500 ml-2 group-hover:text-white"
        >
          {{ payload.guests }}
        </p>
      </button>
      <button
        @click="performSearch"
        class="group flex justify-center items-center hover:bg-orange-400 p-2 w-[50px] h-[50px] rounded-full mr-3 bg-orange-600 transition-all"
      >
        <MagnifyingGlassIcon class="h-6 w-6 text-white" />
      </button>
    </div>
    <ModalSmall
      title="Number of guests"
      :isOpen="modalIsOpen"
      @closeModal="handleShowOrHideModal(false)"
    >
      <div class="flex w-[200px] justify-start items-center">
        <h3>Guests</h3>
        <div
          class="flex justify-center items-center ml-5 border-orange-400 rounded-full shadow-lg"
        >
          <button
            class="bg-orange-500 rounded-l-full h-full p-2"
            @click="handleAddOrSubtractGuest(AddOrSubtractGuest.SUBTRACT)"
          >
            <MinusIcon class="w-3 h-3 text-white" />
          </button>
          <p class="ml-2 mr-2 w-10 text-center">{{ payload.guests }}</p>
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
