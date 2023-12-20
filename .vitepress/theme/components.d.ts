import ProjectCard from './components/ProjectCard.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ProjectCard: typeof ProjectCard
  }
}
