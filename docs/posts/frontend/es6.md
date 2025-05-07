---
title: ES6学习总结
date: 2025-05-06
excerpt: 阮一峰的ES6文档的学习总结
tags: [es6, javascript]
---

## Module
一个模块就是一个文件。默认文件内定义的变量、函数、类是对外不可见的。
借助于模块提供的export关键字可以导出模块内成员。import可以导入其他模块的成员。

export default是export的一个特例，相当与导出了一个名称为default的成员。

## 异步
将部分耗时的任务丢给其他线程或者微任务队列或者宏任务队列，不阻塞同步代码的执行。

setTimeout 将异步任务丢到宏任务队列中，等待当前的同步代码执行完毕再执行，因此观察到的现象就是
没有阻塞，后续的同步代码得以先执行。

new Promise((resolve, reject) => {}).then(() => {}) 可以通过Promise的then函数将任务完成的回调任务
丢到微任务队列中，等待当前的同步代码先执行。

以上是实现异步的全部方案 将部分代码放到同步代码后去执行。

存在回调地狱和调用链过长的问题，我们希望是以同步的方式写异步代码？

如果可以将一个任务分为多个阶段，除第一个阶段外，后续的阶段应该在微任务中触发执行。并且每个子任务执行结束
后可以检查其状态，根据执行状态来决定是否继续执行后续的子任务。

将每个子任务包装为一个Promise对象，在子任务执行完毕的回调then触发下一个子任务的执行。

结合generator和Promise实现async/await。这个可以实现同步的方式写异步代码。
```js
const job = async function() {
	let val1 = await job1()
	console.log(val1)
	let val2 = await job2()
	console.log(val2)
	let val3 = await job3()
	console.log(val3)
}
```
上述有3个异步的子任务，但是我们像写同步代码一样定义任务的执行和执行返回，并打印返回数据，接着执行后续的子任务。
并不需要嵌套或者链接回调。

```js
const trunk = function(fn) {
	return function(delay) {
		return function(callback) {
			fn.call(this, delay, callback)
		}
	}
}

const job = function(delay, callback) {
	new Promise((resolve, reject) {
		setTimeout(() => {
			callback()
			resolve("job done")
		}, delay)
	})
}

const gen = function*() {
	yield trunk(job)(1000)(() => {})
	yield trunk(job)(2000)(() => {})
}

const co = function(gen) {
	if (typeof gen !== 'function') {return}
	gen = gen()
	const next = function() {
		const {value, done} = gen.next()
		if (done) {return}
		value.then(val => {
			console.log(val)
			next()
		})
		.then(err => {
			console.error(err)
			return
		})
	}
	next()
}
```

- 将任务定义为生成器
- 子任务返回一个Promise
- 需要一个生成器的自动执行器
