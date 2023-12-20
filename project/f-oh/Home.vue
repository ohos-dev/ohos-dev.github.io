<script setup lang="ts">
import ProjectCards from '@/components/ProjectCards.vue'
// import data from "./locales"
import { useData } from 'vitepress'
import { computed } from 'vue'
import { FOHHomeData } from './data.interfaces'

// const { lang } = useData()

// const projects = computed(() => data[lang.value].projects ?? data.en.projects)
// const derivativeProjects = computed(
//   () => data[lang.value].derivativeProjects ?? data.en.derivativeProjects
// )

defineProps<{
  data: FOHHomeData
}>()
</script>

<template>
  <div class="container vp-doc">
    <h2>
      {{ data.seriesProjectsText }}
    </h2>
    <ProjectCards :projects="data.projects" />
    <h2>
      {{ data.derivativeProjectsText }}
    </h2>
    <ProjectCards :projects="data.derivativeProjects" />
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  padding: 0 24px;
  margin: 0 auto;
  max-width: 1152px;
  box-sizing: content-box;
  @media (min-width: 640px) {
    padding: 0 48px;
  }

  @media (min-width: 960px) {
    padding: 0 64px;
  }
}

.container:deep(.VPFeatures) {
  padding: 0;
}
</style>
