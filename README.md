# 区块链医疗联盟-医院端-前端

![logo](logo.svg)

## 简介

本项目为区块链医疗项目医院端模块的前端部分，后端部分见[这个项目](#)。

## 接口文档

接口文档见[这个文件](API.md)。

## 协作方式

项目采用双分支维护方式，常设分支为 `master`（主分支） 与 `development`（开发分支）。

- `master`（主分支）：确定已稳定的分支，代码可保证在生产环境正常运行
- `development`（开发分支）：新功能开发分支，代码的稳定性有待测试

**这两个分支一般禁止直接进行推送，只能通过分支合并贡献代码。**

### 日常开发流程

1. 确定一个**具体**功能的需求
2. 为该功能开一个新分支
3. 为该功能编写代码并提交到新分支
4. 编写完成后进行代码审查与功能测试
5. 初步确定新功能符合预期，没有 BUG 后，合并到 `development` 分支
6. 删除该功能开发分支

### `master` 分支更新流程

1. 对 `development` 分支相对 `master` 修改的部分进行前后端联合测试
2. 修复所有发现的 `development` 分支的 BUG
3. 确定 `development` 分支的代码没有明显 BUG 后，合并到 `master` 分支

### BUG 修复流程

1. **确定该 BUG 存在的分支，以最老的分支为修复起点** 
   - 例如：在主分支上就存在该 BUG，那么开发分支上肯定也存在该 BUG（除非所在模块重构了），因此以主分支为基础开一个 BUG 修复分支进行修复
2. 在 BUG 修复分支修复该 BUG 
3. 经测试确定 BUG 修复完毕后，对所有存在 BUG 的分支都进行合并
4. 删除该 BUG 修复分支

## 使用组件

项目主要使用以下组件：

- create-react-app@最新版本
- react@最新版本
- react-dom@最新版本
- redux@最新版本
- react-redux@最新版本
- **react-router@3.2.1**

关于 react-router，因为我刚开始学的是版本 3，在我学会用之后不久就出了 4，3 和 4 是互相不兼容的，写法差别巨大。我更喜欢用 3，所以这里用的也是 3。在查阅资料的时候注意区分。

## 运行方法

1. 安装 Node.js 最新版本，LTS 与 Stable 均可
2. 克隆本项目
3. 命令行进入项目根目录，并执行 `npm install`，时间可能较长，请耐心等待
4. 在 `npm install` 执行完成后，输入 `npm start` 即可开始运行，此时应当自动弹出浏览器窗口
5. 如果没有弹出窗口，打开 `http://localhost:3000`

## 部署方法

1. 安装 Node.js 最新版本，LTS 与 Stable 均可
2. 克隆本项目
3. 命令行进入项目根目录，并执行 `npm install`，时间可能较长，请耐心等待
4. 在 `npm install` 执行完成后，输入 `npm run build` 并耐心等待
5. 在构建完成后，在项目根目录应当有 `build` 文件夹
6. 配置静态服务器指向 `build` 文件夹即可

### 静态服务器配置方法

React 应用的静态服务器配置方法比较特殊。如果按照传统配置方法在浏览器刷新页面后会出现 `404 Not Found`。这主要是由 React 采取前端路由导致。

我们需要让静态服务器先根据路由查找有没有对应的静态文件，如果没有就返回 `index.html` 让 React Router 来进行前端路由匹配。

以 Nginx 为例，我们需要在配置文件中这么写

```nginx
location / {
         root        /path/to/build;
         try_files   $uri $uri/ /index.html;
}
```

其他配置方法见[官方文档](https://facebook.github.io/create-react-app/docs/deployment)。