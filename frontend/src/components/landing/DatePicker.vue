<script lang="ts" setup>
    import { ref, Ref, onMounted } from 'vue'
    import { DatePicker }  from 'v-calendar'
    import moment from 'moment'
    import { CalendarDaysIcon,ArrowUpIcon, ArrowDownIcon } from '@heroicons/vue/24/solid'
    import 'v-calendar/dist/style.css'

    const range = ref({
        start: new Date(),
        end: new Date(),
    });

</script>
 
<template>
    <DatePicker v-model="range" :columns="2" :min-date="new Date()" is-range color="orange">
        <template #default="{ inputEvents, inputValue }">
            <div class="group flex divide-x">
                <div class="w-[50%] flex">
                    <label class="button groupItem flex" for="start">
                            <CalendarDaysIcon class="h-6 w-6 text-orange-600"/>
                            <ArrowUpIcon class="h-6 w-4 text-orange-600"/>
                    </label>
                    <input :value="inputValue.start" v-on="inputEvents.start" class="w-[70%] md:flex xs:hidden xs:text-xs lg:text-base text-gray-500" groupItem>
                </div>
                <div class="w-[50%] flex">
                    <label class="button groupItem flex" for="end">
                        <CalendarDaysIcon class="h-6 w-6 text-orange-600"/>
                        <ArrowDownIcon class="h-6 w-4 text-orange-600"/>
                    </label>
                    <input :value="inputValue.end" v-on="inputEvents.end" class="w-[70%] xs:hidden md:flex xs:text-xs lg:text-base text-gray-500" groupItem>
                </div>
            </div>
        </template>
    </DatePicker>
</template> 