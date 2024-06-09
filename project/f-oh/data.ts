import FOHLogo from '@@/project/f-oh/images/logo.svg'
import { FOHHomeData } from '@@/project/f-oh/data.interfaces'
import { withBase } from 'vitepress'

export default (<FOHHomeData>{
  projects: [
    {
      name: 'F-OH',
      link: withBase('/project/f-oh/'),
      icon: FOHLogo,
      details: 'F-OH for OpenHarmony',
    },
    {
      name: 'F-OH Data',
      link: 'https://gitee.com/westinyang/f-oh-data',
      icon: FOHLogo,
      details: 'F-OH Metadata for all apps where developers PR submit their apps',
    },
    {
      name: 'F-OH Server',
      link: 'https://gitee.com/westinyang/f-oh/blob/master/F-OH-Server.md',
      icon: FOHLogo,
      details: 'F-OH server to provide interface services, platform management, etc. (to be developed)',
    },
    {
      name: 'F-OH Website',
      link: 'https://gitee.com/westinyang/f-oh/blob/master/F-OH-Web.md',
      icon: FOHLogo,
      details: 'F-OH website with documentation, blog, selected applications, etc. (to be developed)',
    },
  ],

  derivativeProjects: [
    {
      name: 'F-OH Web',
      link: 'https://gitee.com/meowtechopensource/F-OH-Web',
      icon: FOHLogo,
      details:
        'Using Bootstrap + Flask to realize the front and back end of the one of the F-OH Web version, and provide interfaces, application uploads and management, etc., at present mainly by @myyauyau to maintain the',
    },
    {
      name: 'F-OH PWA',
      link: 'https://gitee.com/Jesse205/F-OH-PWA',
      icon: FOHLogo,
      details:
        'A third-party PWA version of F-OH with a Tauri-based client, currently maintained primarily by @Jesse205',
    },
  ],
  seriesProjectsText: 'Series of projects',
  derivativeProjectsText: 'Derivative projects',
}) satisfies FOHHomeData
