<template>
  {{ countStore.count }}
  <hr>
  {{ countStore.doubleCount }}
  <hr>
  <button @click="countStore.increment">increment</button>
</template>
<script setup>
  import { useCounterStore } from "./stores/counter"
  const countStore = useCounterStore()
</script>
<style>
</style>