import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { editLinkPattern, organizationCreatedDate } from '../theme/constants'
import { ThemeConfig } from '../theme/ts/config.interfaces'

export const link = '/zh-CN/'
export const config: LocaleSpecificConfig<ThemeConfig> = {
  lang: 'zh-CN',
  description: 'OpenHarmony 开发者社区，非官方阵地，为 OpenHarmony 的未来而创建，Peace & Love。',
  themeConfig: {
    outlineTitle: '本页内容',
    lastUpdatedText: '更新时间',
    darkModeSwitchLabel: '深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    viewLabel: '查看',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    nav: [
      { text: '主页', link },
      {
        text: '项目',
        items: [
          { text: '项目概览', link: `${link}project/` },
          { text: 'F-OH', link: `${link}project/f-oh/` },
        ],
      },
    ],
    footer: {
      message: `组织创建于：${organizationCreatedDate}`,
    },
    editLink: {
      pattern: editLinkPattern,
      text: '在 Gitee 上编辑此页面',
    },
    sidebar: {
      [`${link}project/`]: [
        {
          text: '项目',
          link: `${link}project/`,
          items: [
            {
              text: 'F-OH',
              link: `${link}project/f-oh/`,
              collapsed: true,
              items: [{ text: '上传应用', link: `${link}project/f-oh/upload.html` }],
            },
          ],
        },
      ],
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索',
          },
          modal: {
            displayDetails: '显示详情信息',
            resetButtonTitle: '清空内容',
            backButtonTitle: '关闭搜索',
            noResultsText: '未找到相关内容',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '进入',
              navigateText: '导航',
              navigateUpKeyAriaLabel: '向上',
              navigateDownKeyAriaLabel: '向下',
              closeText: '关闭',
              closeKeyAriaLabel: '退出',
            },
          },
        },
      },
    },
  },
}
