---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
# titleTemplate: false
title: F-OH

hero:
  name: F-OH
  text: Application Store for FOSS on the OpenHarmony Platform
  image:
    # For the time being, we can only use resources in the public directory
    src: /images/logo.svg
    alt: F-OH
  actions:
    - theme: brand
      text: Donload
      link: https://gitee.com/ohos-dev/foh/releases
    - theme: alt
      text: Upload Apps
      link: ./upload.html
    - theme: alt
      text: View on Gitee
      link: https://gitee.com/ohos-dev/f-oh
    - theme: alt
      text: View on GitHub
      link: https://github.com/ohos-dev/f-oh

features:
  - icon: 🚄
    title: Co-Building
    details: More Developers Participate in OHOS Open Source Application Co-Building
  - icon: 🏆
    title: Ecology and Impact
    details: Expanding the ecosystem and reach of OHOS systems and applications
  - icon: 🌍
    title: 国产化
    details: OHOS 在未来的国产化技术覆盖领域中全面绽放
---

<script setup lang="ts">
  import Home from '@@/project/f-oh/Home.vue'
</script>

<Home />

<!-- 由于 home 布局没有 Markdown 的样式，所以要手动添加一个样式 -->
<div class="vp-doc external-link-icon-enabled container">

## Video

- [F-OH：OpenHarmony 自由开源软件的应用市场终于诞生啦~ 空前绝后~](https://www.bilibili.com/video/BV1dM411N7CG)
- [F-OH OpenHarmony应用市场 V1.1：更新应用、沉浸状态栏、新图标](https://www.bilibili.com/video/BV1ig4y1u7dD)
- [F-OH OpenHarmony应用市场 V1.2：内嵌浏览器、清空缓存、大量更新兼容优化](https://www.bilibili.com/video/BV1LP411S79y)
- [F-OH OpenHarmony应用市场 V1.3：新增应用详情，可查看开发者等信息](https://www.bilibili.com/video/BV1Th4y1Z7sm)

## License

- 本项目是以 GPL v3 许可开源，你可以根据自由软件基金会发布的 [GNU 通用公共许可证](https://www.gnu.org/licenses/gpl.html) 的条款重新分配和/或对其进行修改
- 应用图标出处：<https://www.flaticon.com/free-icon/ellipse_4674229>
- 底部图标出处：<https://gitee.com/openharmony/applications_app_samples>
- 其他图标出处：<https://www.flaticon.com/packs/basic-user-interface-147>

</div>
