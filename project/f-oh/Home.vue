<script setup lang="ts">
import ProjectCards from "@/components/ProjectCards.vue"
import data from "./i18n"
import { useData } from "vitepress"
import { computed } from "vue"

const { lang } = useData()

const projects = computed(() => data[lang.value].projects ?? data.en.projects)
const derivativeProjects = computed(
  () => data[lang.value].derivativeProjects ?? data.en.derivativeProjects
)
</script>

<template>
  <div class="container vp-doc">
    <h2>
      {{ data[lang].seriesProjectsText ?? data.en.seriesProjectsText }}
    </h2>
    <ProjectCards :projects="projects" />
    <h2>
      {{ data[lang].derivativeProjectsText ?? data.en.derivativeProjectsText }}
    </h2>
    <ProjectCards :projects="derivativeProjects" />
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
