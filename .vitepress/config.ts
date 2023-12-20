import { DefaultTheme, defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { base, editLinkPattern, organizationCreatedDate } from './constants'
import { config as englishConfig } from './locales/en'
import { config as zhCNConfig, link as zhCNLink } from './locales/zhCN'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'OHOS Dev',
  description:
    'OpenHarmony Developer Community, Unofficial Position Created for the Future of OpenHarmony, Peace & Love.',
  base,
  head: [
    ['link', { rel: 'icon', href: `${base}favicon.ico`, sizes: 'any' }],
    [
      'link',
      {
        rel: 'icon',
        href: `${base}favicon-32x32.png`,
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        href: `${base}favicon-16x16.png`,
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: `${base}images/safari-pinned-tab.svg`,
        color: '#00a6f9',
      },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/images/logo_light_oh.svg',
      dark: '/images/logo_dark_oh.svg',
    },
    outline: [2, 3],

    editLink: {
      pattern: 'https://gitee.com/ohos-dev/ohos-dev/edit/master/:path',
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z"></path></g></svg>',
        },
        link: 'https://gitee.com/ohos-dev',
      },
      { icon: 'github', link: 'https://github.com/ohos-dev' },
    ],
    search: {
      provider: 'local',
    },
    externalLinkIcon: true,
  },

  markdown: {
    lineNumbers: true,
  },
  vite: {
    resolve: {
      alias: {
        '@@': fileURLToPath(new URL('../', import.meta.url)),
        '@': fileURLToPath(new URL('./theme', import.meta.url)),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
      extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },
  },

  locales: {
    root: { label: 'English', ...englishConfig },
    'zh-CN': { label: '简体中文', link: zhCNLink, ...zhCNConfig },
  },
})
