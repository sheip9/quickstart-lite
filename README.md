原项目https://github.com/linkease/nas-packages-luci/tree/main/luci/luci-app-quickstart

砍了在菜单的NAS列表，以及主页的磁盘信息、下载服务、存储服务、远程域名（硬路由没这些），让界面更简洁

sed -i '$a src-git quickstart_lite https://github.com/sheip9/quickstart-lite' feeds.conf.default

![](https://raw.githubusercontent.com/sheip9/luci-app-quickstart-lite/main/screenshot.png)
