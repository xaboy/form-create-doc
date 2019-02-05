### AutoComplete 自动生成

#### [在线预览](http://jsrun.net/TnhKp/edit)

#### maker 快速生成

```js
$formCreate.maker.auto('自动完成', 'auto', 'xaboy').props({
	data: [
		'xaboy',
		'xian',
		'github'
	],
	filterMethod: (value, option) => {
		return option.toUpperCase().indexOf(value.toUpperCase()) !== -1
	}
})
```

#### json 规则

```json
{
     type:"autoComplete",
     field:"auto",
     title:"自动完成",
     value:'xaboy',
     props:{
         "data": [
             'xaboy',
             'xian',
             'github'
         ], //自动完成的数据源
         "clearable": true
     }
}
```

#### 参数说明

参考:[iview2.x](http://v2.iviewui.com/components/auto-complete#API) | [iview3.x](https://www.iviewui.com/components/auto-complete#API)



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

| 属性          | 说明                                                         | 类型                | 默认值 |
| ------------- | ------------------------------------------------------------ | ------------------- | ------ |
| data          | 自动完成的数据源                                             | Array               | []     |
| clearable     | 是否可以清空选项                                             | Boolean             | false  |
| disabled      | 是否禁用                                                     | Boolean             | false  |
| placeholder   | 占位文本                                                     | String              | -      |
| size          | 输入框尺寸，可选值为 `large`、`small`、`default` 或者不设置  | String              | -      |
| icon          | 输入框尾部图标                                               | String              | -      |
| filterMethod | 是否根据输入项进行筛选。当其为一个函数时，会接收 `value` 和 `option` 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false | Function \| Boolean | false  |
| placement     | 弹窗的展开方向，可选值为 `bottom` 和 `top`，2.12.0 版本开始支持自动识别 | String              | bottom |
| transfer      | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean             | false  |



##### 事件扩展 event

| 事件名    | 说明                                              | 返回值 |
| --------- | ------------------------------------------------- | ------ |
| change | 选中 option，或 input 的 value 变化时，调用此函数 | value  |
| select | 被选中时调用，参数为选中项的 value 值             | value  |
| search | 搜索补全项的时候调用                              | query  |
| focus  | 聚焦时触发                                        | event  |
| blur   | 失焦时触发                                        | event  |





