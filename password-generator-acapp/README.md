## Vite打包后如何适配AcApp

①将JS文件中的全部代码括起来当成一个函数
```ts
const myfunc = function(myappid, AcWingOS) {
    打包后的JS文件代码......
}
```
②JS文件开头添加下方代码
```ts
export class Acapp {
	constructor(id, AcWingOS) {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        AcWingOS.api.window.resize(100 * vh / vw, 90);
		myfunc(id, AcWingOS);
	}
}
```
③搜索root，将其中root进行替换。
一个是createRoot附近的root
