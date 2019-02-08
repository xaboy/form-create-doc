### AutoComplete 自动生成



#### maker 快速生成

```js
maker.auto('自动完成', 'auto', 'xaboy').props({
	fetchSuggestions: function (queryString, cb) {
		cb([
			{value: queryString}, {value: queryString + queryString}
		]);
	}
}).emitPrefix('xaboy').emit(['change'])
```

#### json 规则

```json
{
    type: "autoComplete",
    title: "自动完成",
    field: "auto",
    value: "xaboy",
    props: {
    	"fetchSuggestions": function (queryString, cb) {
			cb([
				{value: queryString}, {value: queryString + queryString}
			]);
		}
	}
}
```

#### 参数说明

参考:[Element_AutoComplete](http://element-cn.eleme.io/#/zh-CN/component/input)



##### 规则 rule

| 字段名   | 说明     | 字段类型  | 默认值 |
| :------- | :------- | :------- | :----- |
| type     | 元素类型 | String   | -      |
| field    | 字段名称 | String   | -      |
| title    | 字段别名 | String   | -      |
| value    | 字段的值 | String   | -      |
| props    | 元素配置 | Object   | -      |
| event    | 元素事件 | Object   | -      |
| validate | 验证规则 | Array    | -      |



##### 元素配置 props

| 参数                | 说明                                                         | 类型                            | 可选值                                                       | 默认值       |
| ------------------- | ------------------------------------------------------------ | ------------------------------- | ------------------------------------------------------------ | ------------ |
| placeholder         | 输入框占位文本                                               | string                          | —                                                            | —            |
| disabled            | 禁用                                                         | boolean                         | —                                                            | false        |
| valueKey            | 输入建议对象中用于显示的键名                                 | string                          | —                                                            | value        |
| debounce            | 获取输入建议的去抖延时                                       | number                          | —                                                            | 300          |
| placement           | 菜单弹出位置                                                 | string                          | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-start |
| fetchSuggestions    | 返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它 | Function(queryString, callback) | —                                                            | —            |
| popperClass         | Autocomplete 下拉列表的类名                                  | string                          | —                                                            | —            |
| triggerOnFocus      | 是否在输入框 focus 时显示建议列表                            | boolean                         | —                                                            | true         |
| name                | 原生属性                                                     | string                          | —                                                            | —            |
| selectWhenUnmatched | 在输入没有任何匹配建议的情况下，按下回车是否触发 `select`事件 | boolean                         | —                                                            | false        |
| label               | 输入框关联的label文字                                        | string                          | —                                                            | —            |
| prefixIcon          | 输入框头部图标                                               | string                          | —                                                            | —            |
| suffixIcon          | 输入框尾部图标                                               | string                          | —                                                            | —            |
| hideLoading         | 是否隐藏远程加载时的加载图标                                 | boolean                         | —                                                            | false        |
| popperAppendToBody  | 是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false | boolean                         | -                                                            | true         |



##### 事件扩展 event

| 事件名称 | 说明                 | 回调参数   |
| -------- | -------------------- | ---------- |
| select   | 点击选中建议项时触发 | 选中建议项 |

