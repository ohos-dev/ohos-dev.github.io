<script setup lang="ts">
import { Project } from "@/components/ProjectCard.vue"
import ProjectCards from "@/components/ProjectCards.vue"
import FOHLogo from "./images/logo.svg"

const projects: Project[] = [
  {
    name: "F-OH",
    link: ".",
    icon: FOHLogo,
    details: "F-OH OpenHarmony 移动端",
  },
  {
    name: "F-OH Data",
    link: "http://170.178.208.105:3000/ohos-dev/F-OH-Data",
    icon: FOHLogo,
    details: "F-OH 所有应用程序的元数据，开发者在这里PR提交自己的应用",
  },
  {
    name: "F-OH Server",
    link: "https://gitee.com/ohos-dev/f-oh-server",
    icon: FOHLogo,
    details: "F-OH 服务器，提供接口服务、平台管理等（待开发）",
  },
  {
    name: "F-OH Website",
    link: "https://gitee.com/ohos-dev/f-oh-website",
    icon: FOHLogo,
    details: "F-OH 网站，包含文档、博客、精选应用等（待开发）",
  },
]

const derivativeProjects: Project[] = [
  {
    name: "F-OH Web",
    link: "https://gitee.com/ohos-dev/F-OH-Web",
    icon: FOHLogo,
    details:
      "使用 Bootstrap + Flask 实现的前后端一体的 F-OH Web 版，并提供接口、应用上传和管理等功能，目前主要由 @myyauyau 来维护",
  },
  {
    name: "F-OH PWA",
    link: "https://gitee.com/ohos-dev/F-OH-PWA",
    icon: FOHLogo,
    details:
      "F-OH 的第三方 PWA 版本，并提供基于 Tauri 的客户端，目前主要由 @Jesse205 来维护",
  },
]
</script>

<template>
  <div class="container vp-doc">
    <h2>系列项目</h2>
    <ProjectCards :projects="projects" />
    <h2>衍生项目</h2>
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
