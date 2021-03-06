# JS 使用和基本编程

## 写代码

请完成以下文件中的编码需求：

- [查看 `clone.js`](./clone.js)
- [查看 `get-host.js`](./get-host.js)
- [查看 `get-sum.js`](./get-sum.js)

## 方法论

如果你有一定的开发经验，并且追求代码的质量。  
那么你一定知道一些实践技巧，简答 3 ～ 10 条即可。

例如：

> 面向对象编程，代码逻辑可以内聚。
> 禁止使用 var，不可变数据用 const 声明，可变数据用 let 声明。

答：

- 重要变量或方法书写注释，可以采用 jsdoc 形式的注释方式
- 常量可以使用全大写加下划线方式命名
- 尽量使用 `===` 符号
- 浮点数不要直接进行相等比较
- 使用工具代替约定来保证代码质量，如 eslint、prettier 等
- 循环遍历拼接字符串时如果项比较多可以使用数组来代替直接字符串相加
- 利用立即执行函数表达式包裹代码，避免暴露过多的全局变量
- 构造函数的方法添加到原型上，避免每一个实例都保存一份
- 单页面应用的组件卸载时需要注意清除定时器等，避免内存泄漏

## 请问以下代码做了什么事情

```js
const getLoglevel = () => {
  return localStorage.loglevel ?? 'INFO'
}
```

答：

- 获取存储在浏览器本地 localStorage 中的 loglevel 属性的值，如果没有则返回 `'INFO'`。
