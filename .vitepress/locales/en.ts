import { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { editLinkPattern, organizationCreatedDate } from '../theme/constants'
import { ThemeConfig } from '../theme/ts/config.interfaces'
export const link = '/'

export const config: LocaleSpecificConfig<ThemeConfig> = {
  lang: 'en',
  themeConfig: {
    viewLabel: 'View',
    nav: [
      { text: 'Home', link },
      {
        text: 'Projects',
        items: [
          { text: 'Overview', link: `${link}project/` },
          { text: 'F-OH', link: `${link}project/f-oh/` },
        ],
      },
    ],
    footer: {
      message: `Organization created on: ${organizationCreatedDate}`,
    },
    editLink: {
      pattern: editLinkPattern,
      text: 'Edit on Gitee',
    },
    sidebar: {
      [`${link}project/`]: [
        {
          text: 'Projects',
          link: `${link}project/`,
          items: [
            {
              text: 'F-OH',
              link: `${link}project/f-oh/`,
              collapsed: true,
              items: [{ text: 'Upload Apps', link: `${link}project/f-oh/upload.html` }],
            },
          ],
        },
      ],
    },
  },
}
