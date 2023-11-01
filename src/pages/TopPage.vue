<template>
  <div>
    <v-btn @click="increment">プラス</v-btn>
    <p>{{ count }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<style scoped></style>
