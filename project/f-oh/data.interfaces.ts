import { Project } from "@/components/ProjectCard.vue"

export interface FOHHomeData {
  projects: Project[]
  derivativeProjects: Project[]
  seriesProjectsText: string
  derivativeProjectsText: string
}
