# 创建开源项目规范

- Gitee创建的项目默认为私有，私信或群内联系我，我来改为开源可见
- 开源许可：项目发起者决定，无特定要求

## 移动应用类

- 项目命名
  - 建议驼峰式，每个单词首字母大写（特殊词组除外），例如：DeviceInfo
  - 如果是fork的仓库进行二开，保持原仓名称即可，忽略命名要求
- 应用包名
  - 必须以 org.ohosdev. 开头，例如：org.ohosdev.deviceinfo
  - app.json5中的vendor，写ohosdev或自己的名字，默认创建的项目是example
- 应用图标
  - 分辨率 256 * 256 起步，形状最好是圆角方形
- README格式（可参考：[DeviceInfo](https://gitee.com/ohos-dev/device-info)、[BrowserCE](https://gitee.com/ohos-dev/browser-ce)）
    ```md
    ## 项目名称
    应用图标
    ## 项目介绍
    ## 修改说明（可选）
    ## 开发环境
    ## 截图预览
    （[拉取截图.bat](https://gitee.com/ohos-dev/hdc-shell-scripts/blob/master/%E6%8B%89%E5%8F%96%E6%89%8B%E6%9C%BA%E6%88%AA%E5%9B%BE%E7%9B%AE%E5%BD%95.bat)，压缩推荐：[图压](https://tuya.xinxiao.tech)）
    ## 视频演示（可选）
    ```
  - 如有上述未描述到的请自行调整
- 其他规范
  - 尽量发布安装包，方便大家能直接下载hap
  - build-profile.json5 的 `signingConfigs` 无需提交

## 电脑软件类

- 项目命名
  - 建议驼峰式，每个单词首字母大写（特殊词组除外），例如：HapViewer
- README格式
  - 暂无特定规范

## 脚本文档类

- 项目命名
  - 全小写，每个单词间用“-”连接，例如：hdc-shell-scripts
- README格式
  - 暂无特定规范
