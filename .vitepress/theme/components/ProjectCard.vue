<script setup lang="ts">
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue"
import { computed } from "vue"
export interface Project {
  name: string
  link: string
  icon?: string
  developer?: string
  details: string
}

const props = defineProps<Project>()

/**
 * 绝对路径的链接，用于向用户展示
 */
const absLink = computed(() => new URL(props.link, location.href).href)
</script>

<template>
  <VPLink
    class="ProjectCard"
    :href="link"
    :no-icon="true"
    :tag="link ? 'a' : 'div'"
    :alt="name">
    <article class="box">
      <div class="head">
        <img class="icon" :src="icon" :alt="icon" />
        <div class="headRight">
          <span class="name" v-html="name"></span>
          <span class="link" :title="absLink">{{ absLink }}</span>
        </div>
      </div>
      <p v-if="details" class="details" v-html="details"></p>
    </article>
  </VPLink>
</template>

<style scoped lang="scss">
.ProjectCard {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);

  // 去除a标签样式的影响
  font-weight: normal;
  color: unset;
  text-decoration: unset;
  text-underline-offset: unset;
  transition: opacity;
  transition: border-color 0.25s;
}
a.ProjectCard:hover {
  color: unset;
  border-color: var(--vp-c-brand-1);
}
.box {
  padding: 16px;
  .head {
    display: flex;
    .icon {
      width: 40px;
      height: 40px;
    }
    .headRight {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 16px;
      flex: 1;
      overflow: hidden;
      .name {
        font-weight: 600;
        font-size: 16px;
      }
      .link {
        width: 100%;
        font-size: 14px;
        color: var(--vp-c-text-2);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .details {
    margin: 0;
    color: var(--vp-c-text-1);
  }
}
</style>
