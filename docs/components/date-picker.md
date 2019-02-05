### DatePicker 日期选择器

#### [在线预览](https://jsrun.net/HehKp/edit)

#### maker 快速生成
```js
$formCreate.maker.date('活动日期','section_day',['2018-02-20', new Date()]).props({
        "type": "datetimerange",
        "placeholder":"请选择活动日期"
})
```

#### json 规则
```json
{
        type: "DatePicker",
        field: "section_day",
        title: "活动日期",
        value: ['2018-02-20', new Date()], 
        props: {
            "type": "datetimerange",
            "format": "yyyy-MM-dd HH:mm:ss", 
            "placeholder":"请选择活动日期", 
        }
}
```

#### 参数说明

参考:[iview2.x](http://v2.iviewui.com/components/date-picker#API) | [iview3.x](https://www.iviewui.com/components/date-picker#API)



##### 规则 rule

| 字段名 | 说明 | 字段类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 元素类型 | String | - |
| field | 字段名称 | String | - |
| title | 字段别名 | String | - |
| value | 字段值,当props.type设置为daterange,datetimerange时value为数组 \[开始日期,结束日期\] | String,Number,Date,Array | - |
| props | 元素配置 | Object | - |
| event | 元素事件 | Object | - |
| validate | 验证规则 | Array | - |

##### 元素配置 props

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 显示类型，可选值为 date、daterange、datetime、datetimerange、year、month | String | true | - |
| format | 展示的日期格式,例如:yyyy-MM-dd HH:mm:ss | String | false | 'yyyy-MM-dd HH:mm:ss' |
| placement | 日期选择器出现的位置，可选值为top,top-start,top-end,bottom,bottom-start,bottom-end,left,left-start,left-end,right,right-start,right-end | String | false | - |
| placeholder | 占位文本 | String | false | - |
| confirm | 是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭 | Boolean | false | false |
| size | 尺寸，可选值为large、small、default或者不设置 | String | false | - |
| clearable | 是否显示清除按钮 | Boolean | false | true |
| disabled | 是否禁用选择器 | Boolean | false | false |
| readonly | 完全只读，开启后不会弹出选择器 | Boolean | false | false |
| editable | 文本框是否可以输入 | Boolean | false | false |

##### 事件扩展 event

| 事件名称 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| change | 日期发生变化时触发,已经格式化后的日期，比如 2018-02-20 | Function | false | - |
| open-change | 弹出日历和关闭日历时触发 true 或 false | Function | false | - |
| clear | 在 confirm 模式或 clearable = true 时有效，在清空日期时触发 | Function | false\` | - |


