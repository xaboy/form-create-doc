# 修改默认按钮

本文将介绍如何使用自定义组件按钮代替默认按钮

### 隐藏默认按钮

首先通过设置全局配置隐藏默认的提交按钮和重置按钮
```js
{
  submitBtn: false,
  resetBtn: false
}
```


### 生成自定义按钮组件
>示例中使用的是 ElementUI

![default-button.png](/img/default-button.png)

```js
[
	{
		type: 'input',
		field: 'field-1',
		title: 'test',
		value: 'test submit',
		col: {
			span:6
		}

	},
	{
		type: 'el-button',
		on: {
			click: function(){
				//TODO 提交表单
				$f.submit();
				//或者
				$f.resetFields();
			}
	    },
		col: {
			span:3,
			push: 1
		},
		children: ['submit']

	}
]
```