# 晚安 2022

## 使用的技术

语言：TypeScript

Api 调用：Axios

全局状态管理：Recoil

## 项目结构

见文件结构，组件可细拆也可不拆分。

### 样式相关

为了降低 css 重名的问题，可以选择使用 css module。

## TODO

- [X] 切图
- [X] OAuth
- [X] Api

## Issues

- [X] 自适应过程中样式出错
- [X] 访问 /launch 路径时返回键会被扣掉, 此处需要优化

待补充

## 开发指南

该项目使用 [Create React App](https://github.com/facebook/create-react-app) 构建

### 依赖版本

- Node.js = 18.12.1
- 1 <= yarn <2

```bash
yarn install
```

### 实时预览

```bash
yarn start
```

该项目会运行在 <http://localhost:3000>

### 代码提交

使用 `git cz` 命令来帮助撰写规范的 Commit message
