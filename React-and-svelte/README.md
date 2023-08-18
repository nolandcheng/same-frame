# React And Svelte

前端 js 框架的变化实在太快了，即使是单一框架每个大版本也都会迎来较大的改变，而对于我个人而言，Vue 太熟悉了，熟悉到我快以为 js 或者说前端就应该是 Vue 的样子，但很显然这种想法太过狭隘了，因此我选择去熟悉 React 和 Svelte。

这二者都是非常优秀的 js 框架，React 是老牌的 js 框架，甚至很多特色在 Vue3 中也能看到它的影子；而 Svelte 则是 js 框架中以灵活简洁而著称的新秀，在 Vue 使用率更高的今天，了解它们的基本运行逻辑和语法能更有利于我们适应接下来前端的变化。

## 1.介绍

我现在对这两个框架并不熟悉，于是这里只记录点最初印象的异同

### React

- UI 组件：页面或者说项目由一个个组件拼接而成，组件可进行复用。
- 单向数据流：数据的传输自顶而下，对它进行修改也只会有单方面影响。
- JSX：JavaScript 的一个类似 XML 的扩展，可以在 js 中书写 html 代码。
- Hooks：16.8 新增的特性，优化渲染、更好的拆分和复用组件。
- Facebook 专门团队维护。

### Sevlte

- 无虚拟 dom：不同于以往框架的规则。
- 灵活独立：组件独立打包

## 2.安装/启动

先不考虑功能更全的如 next.js 的框架，现在只是创建简单的 dome 项目。

**为了方便快捷，整个项目我都将采用 yarn 进行安装**，所以也就不用考虑全局安装比如`create-react-app`等脚手架工具了

创建我们的项目

```sql
yarn create react-app my-react
yarn create svelte my-svelte
```

启动命令很简单，可前往项目查看：

- [my-react](my-react/README.md)
- [my-svelte](my-svelte/README.md)

出于学习和尽快熟悉的目的，本项目暂不选择支持 TypeScript。

项目异同：

1. 二者皆是安装的最简单的 demo 项目,不带有任何多余的框架，开箱即用。
2. React 项目是基于 webpack 配置的，而 Svelte 则是基于 vite 配置的。
3. 与 Vue 项目大同小异，不过多赘述。

## 3. 数据
