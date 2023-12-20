import { defineConfig } from "vitepress"
import { fileURLToPath, URL } from "node:url"

const base = "/"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OHOS Dev",
  description: "OHOS Dev Website",
  base,
  head: [
    ["link", { rel: "icon", href: `${base}favicon.ico`, sizes: "any" }],
    [
      "link",
      {
        rel: "icon",
        href: `${base}favicon-32x32.png`,
        type: "image/png",
        sizes: "32x32",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: `${base}favicon-16x16.png`,
        type: "image/png",
        sizes: "16x16",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: `${base}images/safari-pinned-tab.svg`,
        color: "#00a6f9",
      },
    ],
  ],
  lastUpdated: true,
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/logo.svg",
    outlineTitle: "本页内容",
    lastUpdatedText: "更新时间",
    darkModeSwitchLabel: "深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    outline: [2, 3],
    nav: [
      { text: "主页", link: "/" },
      {
        text: "项目",
        items: [
          { text: "项目概览", link: "/project/" },
          { text: "F-OH", link: "/project/f-oh/" },
        ],
      },
      {
        text: "项目规范",
        link: "/devguide",
      },
    ],
    footer: {
      message: "组织创建于：2023-02-27",
    },
    editLink: {
      pattern: "https://gitee.com/ohos-dev/ohos-dev/edit/master/:path",
      text: "在 Gitee 上编辑此页面",
    },
    sidebar: {
      "/project/": [
        {
          text: "项目",
          link: "/project/",
          items: [
            {
              text: "F-OH",
              link: "/project/f-oh/",
              collapsed: true,
              items: [{ text: "上传应用", link: "/project/f-oh/upload.html" }],
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z"></path></g></svg>',
        },
        link: "https://gitee.com/ohos-dev",
      },
      { icon: "github", link: "https://github.com/ohos-dev" },
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索",
          },
          modal: {
            displayDetails: "显示详情信息",
            resetButtonTitle: "清空内容",
            backButtonTitle: "关闭搜索",
            noResultsText: "未找到相关内容",
            footer: {
              selectText: "选择",
              selectKeyAriaLabel: "进入",
              navigateText: "导航",
              navigateUpKeyAriaLabel: "向上",
              navigateDownKeyAriaLabel: "向下",
              closeText: "关闭",
              closeKeyAriaLabel: "退出",
            },
          },
        },
      },
    },
    externalLinkIcon: true,
  },
  markdown: {
    lineNumbers: true,
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./theme", import.meta.url)),
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      },
      extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
    },
  },
})
