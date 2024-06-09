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
      text: Download
      link: https://gitee.com/westinyang/f-oh/releases
    - theme: alt
      text: Upload Apps
      link: ./upload.html
    - theme: alt
      text: View on Gitee
      link: https://gitee.com/westinyang/f-oh
    - theme: alt
      text: View on GitHub
      link: https://github.com/westinyang/f-oh

features:
  - icon: 🚄
    title: Open source
    details: Open source application
  - icon: 🏆
    title: Free
    details: Free application
---

<script setup lang="ts">
  import Home from '@@/project/f-oh/Home.vue'
  import data from './data'
</script>

<Home :data="data" />

<!-- 由于 home 布局没有 Markdown 的样式，所以要手动添加一个样式 -->
<div class="vp-doc external-link-icon-enabled">

## Video

- [F-OH：OpenHarmony 自由开源软件的应用市场终于诞生啦~ 空前绝后~](https://www.bilibili.com/video/BV1dM411N7CG)
- [F-OH OpenHarmony应用市场 V1.1：更新应用、沉浸状态栏、新图标](https://www.bilibili.com/video/BV1ig4y1u7dD)
- [F-OH OpenHarmony应用市场 V1.2：内嵌浏览器、清空缓存、大量更新兼容优化](https://www.bilibili.com/video/BV1LP411S79y)
- [F-OH OpenHarmony应用市场 V1.3：新增应用详情，可查看开发者等信息](https://www.bilibili.com/video/BV1Th4y1Z7sm)

## License

- This project is open source under the GPL v3 license, which you may redistribute and/or modify under the terms of the [GNU General Public License](https://www.gnu.org/licenses/gpl.html) issued by the Free Software Foundation.
- Application icons provenance:<https://www.flaticon.com/free-icon/ellipse_4674229>
- Bottom icons provenance:<https://gitee.com/openharmony/applications_app_samples>
- Other icons provenance:<https://www.flaticon.com/packs/basic-user-interface-147>

</div>
