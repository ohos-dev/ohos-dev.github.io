<script setup lang="ts">
import ProjectCards from '@/components/ProjectCards.vue'
import { FOHHomeData } from './data.interfaces'

defineProps<{
  data: FOHHomeData
}>()
</script>

<template>
  <div class="vp-doc">
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
