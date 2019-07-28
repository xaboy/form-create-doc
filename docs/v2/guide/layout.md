# 自定义布局

通过设置生成规则的`col`配置项可以实现组件的布局

[iview Col](/v2/iview/col) | [element-ui Col](/v2/element-ui/col)

示例1:
![col12.png](/img/col12.png)

```js
[
	{
		type:'input',
		field:'test-1',
		title:'col-12',
		value:'',
		col:{
			span:12
		}
	},
	{
		type:'input',
		field:'test-2',
		title:'col-12',
		value:'',
		col:{
			span:12
		}
	}
]
```


示例2:
>示例中使用的是 ElementUI

当没有设置`col`时默认为`{span:24}`

![row24.png](/img/row24.png)

```js
[
	{
	    type: 'el-row',
	    native: true,
	    children: [
	        {
	            type: 'el-col',
	            props: {
	                span: 12
	            },
	            children: [
	            	{
	            		type:'datePicker',
	            		title: '活动日期',
	            		field: 'section_day',
	            		value: ['2018-02-20 12:12:12', '2018-03-20 12:12:12'],
	            		props:{
	            			type:'datetimerange'
	            		}

	            	},
	            	{
	            		type:'timePicker',
	            		title: '活动时间',
	            		field: 'section_time',
	            		value: ['11:11:11', '22:22:22'],
	            		props:{
	            			isRange: true,
	                    	placeholder: "请选择活动时间"
	            		}

	            	},
	            ]
	        },
	        {
	            type: 'el-col',
	            props: {
	                span: 12
	            },
	            children: [
	            	{
	            		type:'inputNumber',
	            		title: '排序',
	            		field: 'sort',
	            		value: 0,
	            		props:{
	            			precision: 2
	            		},
	            		col:{
	            			span: 12
	            		},
	            		validate: [{require: true, type: 'number', min: 10}]
	            	},
	            	{
	            		type:'colorPicker',
	            		title: '颜色',
	            		field: 'color',
	            		value: '#ff7271',
	            		props:{
	            			hue: true,
	            			format: 'hex'
	            		},
	            		col:{
	            			span: 12
	            		}
	            	},
	            ]
	        }
	    ]
	}
]
```