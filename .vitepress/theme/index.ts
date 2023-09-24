// https://vitepress.dev/guide/custom-theme
import { h } from "vue"
import { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme-without-fonts"
import "./styles/custom.scss"
import Layout from "./Layout.vue"
import ProjectCard from "./components/ProjectCard.vue"

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp(ctx) {
    const { app } = ctx
    app.component("ProjectCard", ProjectCard)
  },
} as Theme
