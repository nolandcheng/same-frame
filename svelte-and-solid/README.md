# Svelte And Solid

前端 js 框架的变化实在太快了，即使是单一框架每个大版本也都会迎来较大的改变，而对于我个人而言，Vue 和 React 太熟悉了，熟悉到我快以为 js 或者说前端就应该是这样子，但很显然这种想法太过狭隘了，因此我选择去熟悉 Svelte 和 Solid

这二者都是非常优秀的 js 新秀框架，他们都有着无虚拟 DOM 与更好的性能的共同特点，相较于如今市面上使用率更高的的 Vue 和 React 而言，了解它们的基本运行逻辑和语法能更有利于我们适应接下来前端的变化。

**由于我有 Vue 和 React 项目的开发经验，因此在写这篇文档时不会太细致的去描写一些十分基础的概念**

## 1. 介绍

我现在对这两个框架并不熟悉，于是这里只记录点最初印象的异同

### Sevlte

- 无虚拟 dom
- 组件独立打包

### Solid

- 无虚拟 dom
- 具有单向数据流、读/写隔离和不可变接口（同 React）

## 2. 安装/启动

现在创建简单的 dome 项目，由于我们的目的仍然是项目开发，所以即使是熟悉语法，这里也不选择采用 script 的引用方式。

**为了方便快捷，整个项目我都将采用 yarn 工具进行安装。**

创建我们的项目，出于学习和尽快熟悉的目的，本项目暂不选择支持 TypeScript。

```sql
// Svelte:
1.yarn create svelte my-svelte
2.yarn install

// Solid:
1.yarn create solid my-solid
2.yarn install
```

可以看到，二者的安装方式十分相似，皆是安装的最简单的 demo 项目,不带有任何多余的插件，开箱即用。

启动命令很简单，创建后可前往项目查看：

- [my-svelte](my-svelte/README.md)
- [my-solid](my-solid/README.md)

## 3. 路由
