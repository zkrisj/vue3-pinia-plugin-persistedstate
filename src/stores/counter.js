import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const count2 = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
    count2.value++
  }

  return { count, count2, doubleCount, increment }
}, {
  // persist: true,
  persist: [
    {
      paths: ['count'],
      storage: localStorage,
    },
    {
      paths: ['count2'],
      storage: sessionStorage,
    },
  ],
})
