<script setup lang="ts">
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue"
import FOHIcon from "@/assets/images/foh.svg"
import GieeIcon from "@/assets/images/gitee.svg"
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
const absLink = computed(() => {
  if (!import.meta.env.SSR) {
    return new URL(props.link, location.href).href
  }
})

interface DestinationConfig {
  icon: string
  name: string
}
/**
 * 目的地配置
 */
const destinationConfig = computed<DestinationConfig | null>(() => {
  if (!import.meta.env.SSR && absLink.value) {
    switch (new URL(absLink.value).hostname) {
      case "gitee.com": {
        return {
          icon: GieeIcon,
          name: "Gitee",
        }
      }
      case "170.178.208.105": {
        return {
          icon: FOHIcon,
          name: "OHOS Dev",
        }
      }
    }
  }
  return null
})

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
        <img class="icon" :src="icon" />
        <div class="headRight">
          <span class="name" v-html="name"></span>
          <span class="link" :title="absLink">{{ absLink }}</span>
        </div>
      </div>
      <p v-if="details" class="details" v-html="details"></p>
      <div class="space"></div>
      <div class="foot">
        <template v-if="destinationConfig">
          <img class="icon" :src="destinationConfig.icon" />
          <span class="name">{{ destinationConfig.name }}</span>
        </template>
        <span v-else class="name">查看</span>
        <span class="openIcon" />
      </div>
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
  transition: border-color 0.25s;

  // 去除a标签样式的影响
  font-weight: normal;
  color: unset;
  text-decoration: unset;
  text-underline-offset: unset;

  * {
    line-height: normal;
  }
}
a.ProjectCard:hover {
  color: unset;
  border-color: var(--vp-c-brand-1);
}
.box {
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;

  .head {
    display: flex;
    margin-bottom: 16px;
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
    font-size: 14px;
  }
  .space {
    flex-grow: 1;
    -webkit-box-flex: 1;
  }
  .foot {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    opacity: 0.5;
    margin-top: 8px;
    transition: opacity 0.25s;
    .icon {
      height: 14px;
      width: 14px;
    }
    .name {
      margin-left: 4px;
      font-size: 12px;
      line-height: normal;
    }
    .openIcon {
      margin-left: 4px;
      width: 11px;
      height: 11px;
      transition: transform 0.25s;
      background-color: currentColor;
      -webkit-mask-image: url("@/assets/images/right.svg");
      mask-image: url("@/assets/images/right.svg");
    }
  }
  &:hover {
    .foot {
      opacity: 0.8;
      .openIcon {
        transform: translateX(4px);
      }
    }
  }
}
</style>
