# 成都蓉程智惠科技有限公司官网

官网项目源码，展示成都蓉程智惠科技有限公司的企业数智服务、产业协同平台及政企综合服务。

## 本地运行

需要 Node.js 22 或更高版本。

```bash
npm ci
npm run dev
```

浏览器打开终端显示的本地地址即可预览。生产构建请运行：

```bash
npm run build
```

## 上传到 GitHub

在项目根目录依次执行下面的命令，将当前代码推送到 GitHub：

```bash
git remote add origin https://github.com/Hedlen/official_website.git
git branch -M main
git push -u origin main
```

如果此前已经配置过 `origin`，请先更新远程地址，再执行推送：

```bash
git remote set-url origin https://github.com/Hedlen/official_website.git
git branch -M main
git push -u origin main
```

## 主要目录

- `app/`：页面与样式源码
- `public/`：网站图片、图标等静态资源
- `package.json`：项目依赖和常用脚本
