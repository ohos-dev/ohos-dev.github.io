
import FOHLogo from "@@/project/f-oh/images/logo.svg"
import { FOHHomeData } from "@@/project/f-oh/data.interfaces"

export default <FOHHomeData>{
  projects: [
    {
      name: "F-OH",
      link: ".",
      icon: FOHLogo,
      details: "F-OH OpenHarmony 移动端",
    },
    {
      name: "F-OH Data",
      link: "http://170.178.208.105:3000/ohos-dev/F-OH-Data",
      icon: FOHLogo,
      details: "F-OH 所有应用程序的元数据，开发者在这里PR提交自己的应用",
    },
    {
      name: "F-OH Server",
      link: "https://gitee.com/ohos-dev/f-oh-server",
      icon: FOHLogo,
      details: "F-OH 服务器，提供接口服务、平台管理等（待开发）",
    },
    {
      name: "F-OH Website",
      link: "https://gitee.com/ohos-dev/f-oh-website",
      icon: FOHLogo,
      details: "F-OH 网站，包含文档、博客、精选应用等（待开发）",
    },
  ],
  derivativeProjects: [
    {
      name: "F-OH Web",
      link: "https://gitee.com/ohos-dev/F-OH-Web",
      icon: FOHLogo,
      details:
        "使用 Bootstrap + Flask 实现的前后端一体的 F-OH Web 版，并提供接口、应用上传和管理等功能，目前主要由 @myyauyau 来维护",
    },
    {
      name: "F-OH PWA",
      link: "https://gitee.com/ohos-dev/F-OH-PWA",
      icon: FOHLogo,
      details:
        "F-OH 的第三方 PWA 版本，并提供基于 Tauri 的客户端，目前主要由 @Jesse205 来维护",
    },
  ],
  seriesProjectsText: "系列项目",
  derivativeProjectsText: "衍生项目",
}