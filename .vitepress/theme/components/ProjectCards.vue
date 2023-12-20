<script setup lang="ts">
import { computed } from 'vue'
import ProjectCard, { Project } from '@/components/ProjectCard.vue'
const props = defineProps<{
  projects: Project[]
}>()
const grid = computed(() => {
  const length = props.projects.length

  if (!length) {
    return
  } else if (length === 2) {
    return 'grid-2'
  } else if (length === 3) {
    return 'grid-3'
  } else if (length % 3 === 0) {
    return 'grid-6'
  } else if (length > 3) {
    return 'grid-4'
  }
})
</script>
<template>
  <div class="ProjectCards">
    <div class="items">
      <div v-for="project in projects" :key="project.name" class="item" :class="[grid]">
        <ProjectCard v-bind="project" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .item.grid-2,
  .item.grid-4,
  .item.grid-6 {
    width: calc(100% / 2);
  }
}

@media (min-width: 768px) {
  .item.grid-2,
  .item.grid-4 {
    width: calc(100% / 2);
  }

  .item.grid-3,
  .item.grid-6 {
    width: calc(100% / 3);
  }
}

@media (min-width: 960px) {
  .item.grid-4 {
    width: calc(100% / 4);
  }
}
</style>
