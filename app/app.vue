<template>
  <div class="min-h-screen" :class="colorMode.value">
    <div class="theme-toggle">
      <Button variant="ghost" size="icon" @click="toggleDarkMode" class="no-hover">
        <Sun v-if="!isDarkMode" class="h-5 w-5" />
        <Moon v-else class="h-5 w-5" />
      </Button>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { Sun, Moon } from 'lucide-vue-next'
const colorMode = useColorMode()
// 设置默认主题为light
colorMode.preference = 'light'

const isDarkMode = ref(false)

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

onMounted(() => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<style scoped>
.theme-toggle {
  position: relative;
  z-index: 10;
}
</style>