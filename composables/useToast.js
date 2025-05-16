import { ref } from 'vue';

// Estado para los toast
const toasts = ref([]);

// Contador para IDs únicos
let id = 0;

export function useToast() {
  // Función para mostrar un toast
  const mostrarToast = (mensaje, tipo = 'info', duracion = 3000) => {
    const toast = {
      id: id++,
      mensaje,
      tipo,
      duracion
    };
    
    toasts.value.push(toast);
    
    // Eliminar el toast después de la duración especificada
    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== toast.id);
    }, duracion);
  };
  
  return {
    toasts,
    mostrarToast
  };
}