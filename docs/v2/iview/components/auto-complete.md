# AutoComplete 自动生成

#### [在线预览](http://jsrun.pro/TnhKp/edit)

#### Maker

```js
maker.auto('自动完成', 'auto', 'xaboy').props({
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

#### JSON

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
         ],
         "clearable": true
     }
}
```



参考:[iview2.x](http://v2.iviewui.com/components/auto-complete#API) | [iview3.x](https://www.iviewui.com/components/auto-complete#API)


**value** :`String | Number`

#### props


| 属性          | 说明                                                         | 类型                | 默认值 |
| :------------ | :----------------------------------------------------------- | :------------------ | :----- |
| data          | 自动完成的数据源                                             | Array               | []     |
| clearable     | 是否可以清空选项                                             | Boolean             | false  |
| disabled      | 是否禁用                                                     | Boolean             | false  |
| placeholder   | 占位文本                                                     | String              | -      |
| size          | 输入框尺寸，可选值为 `large`、`small`、`default` 或者不设置  | String              | -      |
| icon          | 输入框尾部图标                                               | String              | -      |
| filter-method | 是否根据输入项进行筛选。当其为一个函数时，会接收 `value` 和 `option` 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false | Function \| Boolean | false  |
| placement     | 弹窗的展开方向，可选值为 `bottom` 和 `top`，2.12.0 版本开始支持自动识别 | String              | bottom |
| transfer      | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean             | false  |
| element-id    | 给表单元素设置 `id`，详见 Form 用法。                        | String              | -      |

#### events


| 事件名         | 说明                                              | 返回值 |
| :------------- | :------------------------------------------------ | :----- |
| on-change      | 选中 option，或 input 的 value 变化时，调用此函数 | value  |
| on-select      | 被选中时调用，参数为选中项的 value 值             | value  |
| on-search      | 搜索补全项的时候调用                              | query  |
| on-focus       | 聚焦时触发                                        | event  |
| on-blur        | 失焦时触发                                        | event  |
| on-clear 3.3.0 | 清空时触发                                        | 无     |