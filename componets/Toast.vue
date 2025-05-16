<template>
  <div class="fixed bottom-4 right-4 z-50">
    <div 
      v-for="toast in toasts" 
      :key="toast.id" 
      :class="[
        'mb-2 p-4 rounded-lg shadow-lg max-w-md text-white transform transition-all duration-300 ease-in-out',
        { 
          'bg-blue-500': toast.tipo === 'info',
          'bg-green-500': toast.tipo === 'success',
          'bg-red-500': toast.tipo === 'error',
          'bg-yellow-500': toast.tipo === 'warning'
        }
      ]"
    >
      {{ toast.mensaje }}
    </div>
  </div>
</template>

<script setup>
import { useToast } from '~/composables/useToast';

const { toasts } = useToast();
</script>