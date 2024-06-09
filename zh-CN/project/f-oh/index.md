---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
# titleTemplate: false
title: F-OH

hero:
  name: F-OH
  text: OpenHarmony 平台上 FOSS 的应用中心
  # tagline: OpenHarmony 平台上 FOSS（Free and Open Source Software，自由开源软件）的应用中心，并提供下载安装支持
  image:
    # 暂时只能使用public目录内的资源
    src: /images/logo.svg
    alt: F-OH
  actions:
    - theme: brand
      text: 下载
      link: https://gitee.com/westinyang/f-oh/releases
    - theme: alt
      text: 上传应用
      link: ./upload.html
    - theme: alt
      text: 在 Gitee 上查看
      link: https://gitee.com/westinyang/f-oh
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/westinyang/f-oh

features:
  - icon: 🚄
    title: 开源
    details: 开源软件
  - icon: 🏆
    title: 自由
    details: 自由软件
---

<script setup lang="ts">
  import Home from '@@/project/f-oh/Home.vue'
  import data from './data'
</script>

<Home :data="data" />

<!-- 由于 home 布局没有 Markdown 的样式，所以要手动添加一个样式 -->
<div class="vp-doc external-link-icon-enabled">

## 视频演示

- [F-OH：OpenHarmony 自由开源软件的应用市场终于诞生啦~ 空前绝后~](https://www.bilibili.com/video/BV1dM411N7CG)
- [F-OH OpenHarmony应用市场 V1.1：更新应用、沉浸状态栏、新图标](https://www.bilibili.com/video/BV1ig4y1u7dD)
- [F-OH OpenHarmony应用市场 V1.2：内嵌浏览器、清空缓存、大量更新兼容优化](https://www.bilibili.com/video/BV1LP411S79y)
- [F-OH OpenHarmony应用市场 V1.3：新增应用详情，可查看开发者等信息](https://www.bilibili.com/video/BV1Th4y1Z7sm)

## 许可声明

- 本项目是以 GPL v3 许可开源，你可以根据自由软件基金会发布的 [GNU 通用公共许可证](https://www.gnu.org/licenses/gpl.html) 的条款重新分配和/或对其进行修改
- 应用图标出处：<https://www.flaticon.com/free-icon/ellipse_4674229>
- 底部图标出处：<https://gitee.com/openharmony/applications_app_samples>
- 其他图标出处：<https://www.flaticon.com/packs/basic-user-interface-147>

</div>
