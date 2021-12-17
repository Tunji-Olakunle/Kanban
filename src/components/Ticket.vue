<script setup>
import { ref } from "vue"

const props = defineProps({
    ticket: Object,
})
</script>

<template>
    <div 
    class="bg-white p-3 mb-3 
        shadow-md border-r border-l border-b 
        border-gray-300 
        flex flex-col-reverse 
        space-y-2 space-y-reverse hover:cursor-move rounded-md
        relative "
        
    >
        <div class="text-gray-700 text-sm font-bold">{{ ticket.title }}</div>
	    <div class=" text-gray-400 text-sm">{{ ticket.author }} <span class="block font-medium">{{ ticket.created_at }}</span></div>
		<div class="text-gray-400 text-sm flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-400 font-semibold pl-1">
                {{ ticket.comments_count }}
            </span>
            
        </div>
		<div class="absolute top-3 right-4 text-sm font-semibold 
         px-3 rounded-full"

         :class="{'bg-green-100 text-green-700': ticket.level ==='Medium Level',
                'bg-yellow-100 text-yellow-700': ticket.level ==='Low Level',
                'bg-red-100 text-red-700': ticket.level ==='High Level'}"
         >
            {{ ticket.level }}
         </div>  
    </div>
</template>
