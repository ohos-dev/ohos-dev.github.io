// https://vitepress.dev/guide/custom-theme
import { h } from "vue"
import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import "./styles/custom.scss"

export default {
  extends: DefaultTheme,
}
