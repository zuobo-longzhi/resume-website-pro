# 郑慕松前端简历网站

这是一个可直接部署、可编辑的静态前端简历网站包。

## 文件结构

```text
resume-website-pro/
├─ index.html              # 网站主页，可直接编辑简历内容
├─ css/style.css           # 全站样式，颜色和布局主要在这里修改
├─ js/main.js              # 移动端菜单、滚动动画、导航高亮
├─ assets/resume.pdf       # PDF 简历，Hero 区按钮可下载
├─ images/avatar.svg       # 头像占位图，可替换成个人照片
├─ images/favicon.svg      # 网站图标
└─ README.md               # 使用说明
```

## 本地预览

双击 `index.html` 即可打开。也可以使用 VS Code 的 Live Server 插件预览。

## 修改内容

- 修改姓名、经历、课程、联系方式：编辑 `index.html`
- 修改主色调、圆角、阴影：编辑 `css/style.css` 中的 `:root` 变量
- 替换头像：将个人照片放入 `images/`，然后把 `index.html` 里的 `images/avatar.svg` 改成你的照片路径
- 替换 PDF：把新的 PDF 放到 `assets/resume.pdf`

## 部署方式

### GitHub Pages

1. 新建 GitHub 仓库并上传本文件夹内容。
2. 打开仓库 Settings -> Pages。
3. Source 选择 `Deploy from a branch`，分支选择 `main`，目录选择 `/root`。
4. 保存后等待生成访问链接。

### 服务器 / 宝塔 / Nginx

把整个文件夹上传到站点根目录，确保 `index.html` 位于根目录即可。

## 已包含功能

- Sticky Header 粘性导航
- 移动端汉堡菜单
- 单页长滚动布局
- Hero 首屏与下载 PDF 按钮
- 技能标签云与熟悉度展示
- 时间线经历卡片
- 实习详情折叠面板
- 课程网格与悬浮效果
- Intersection Observer 滚动淡入动画
- 滚动时导航自动高亮
- SEO meta 标签与语义化 HTML
