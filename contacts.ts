import FOHLogo from "./public/images/logo.svg"
import GiteeLogo from "./images/gitee.svg"
import BilibiliLogo from "./images/bilibili.png"
import QQLogo from "./images/qq.webp"
import { Project } from "@/components/ProjectCard.vue"
export default <Project[]>[
    {

        name: "码云组织",
        link: "https://gitee.com/ohos-dev",
        icon: GiteeLogo,
    },
    {

        name: "加入组织",
        link: "https://gitee.com/ohos-dev",
        details: "点击组织首页右上角的“申请加入组织”按钮",
        icon: GiteeLogo,
    },
    {

        name: "哔哩哔哩",
        link: "https://space.bilibili.com/74433635",
        icon: BilibiliLogo,
    },
    {

        name: "企鹅群组",
        link: "https://qun.qq.com/",
        icon: QQLogo,
        details: "752399947"
    },

]