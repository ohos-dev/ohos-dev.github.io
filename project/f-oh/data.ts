import FOHLogo from "@@/project/f-oh/images/logo.svg"
import { FOHHomeData } from "@@/project/f-oh/data.interfaces"

export default <FOHHomeData>{
  projects: [
    {
      name: "F-OH",
      link: ".",
      icon: FOHLogo,
      details: "F-OH for OpenHarmony",
    },
    {
      name: "F-OH Data",
      link: "http://170.178.208.105:3000/ohos-dev/F-OH-Data",
      icon: FOHLogo,
      details:
        "F-OH Metadata for all apps where developers PR submit their apps",
    },
    {
      name: "F-OH Server",
      link: "https://gitee.com/ohos-dev/f-oh-server",
      icon: FOHLogo,
      details:
        "F-OH server to provide interface services, platform management, etc. (to be developed)",
    },
    {
      name: "F-OH Website",
      link: "https://gitee.com/ohos-dev/f-oh-website",
      icon: FOHLogo,
      details:
        "F-OH website with documentation, blog, selected applications, etc. (to be developed)",
    },
  ],

  derivativeProjects: [
    {
      name: "F-OH Web",
      link: "https://gitee.com/ohos-dev/F-OH-Web",
      icon: FOHLogo,
      details:
        "Using Bootstrap + Flask to realize the front and back end of the one of the F-OH Web version, and provide interfaces, application uploads and management, etc., at present mainly by @myyauyau to maintain the",
    },
    {
      name: "F-OH PWA",
      link: "https://gitee.com/ohos-dev/F-OH-PWA",
      icon: FOHLogo,
      details:
        "A third-party PWA version of F-OH with a Tauri-based client, currently maintained primarily by @Jesse205",
    },
  ],
  seriesProjectsText: "Series of projects",
  derivativeProjectsText: "Derivative projects",
}
