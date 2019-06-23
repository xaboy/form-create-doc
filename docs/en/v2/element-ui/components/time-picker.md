# TimePicker 时间选择器

#### Maker
```js
$formCreate.maker.time('活动时间','section_time').props({
  isRange:true
})
```

#### JSON
```json
{
    type: "TimePicker",
    field: "section_time",
    title: "活动时间",
    value: [],
    props: {
        isRange:true
        },
}
```

参考:[Element_TimePicker](http://element-cn.eleme.io/#/zh-CN/component/time-picker)

**value** :`Number | String`

#### props

| 参数              | 说明                                                         | 类型                                  | 可选值                                                       | 默认值               |
| ----------------- | ------------------------------------------------------------ | ------------------------------------- | ------------------------------------------------------------ | -------------------- |
| readonly          | 完全只读                                                     | boolean                               | —                                                            | false                |
| disabled          | 禁用                                                         | boolean                               | —                                                            | false                |
| editable          | 文本框可输入                                                 | boolean                               | —                                                            | true                 |
| clearable         | 是否显示清除按钮                                             | boolean                               | —                                                            | true                 |
| size              | 输入框尺寸                                                   | string                                | medium / small / mini                                        | —                    |
| placeholder       | 非范围选择时的占位内容                                       | string                                | —                                                            | —                    |
| startPlaceholder | 范围选择时开始日期的占位内容                                 | string                                | —                                                            | —                    |
| endPlaceholder   | 范围选择时开始日期的占位内容                                 | string                                | —                                                            | —                    |
| isRange          | 是否为时间范围选择，仅对`<el-time-picker>`有效               | boolean                               | —                                                            | false                |
| arrowControl     | 是否使用箭头进行时间选择，仅对`<el-time-picker>`有效         | boolean                               | —                                                            | false                |
| align             | 对齐方式                                                     | string                                | left / center / right                                        | left                 |
| popperClass      | TimePicker 下拉框的类名                                      | string                                | —                                                            | —                    |
| pickerOptions    | 当前时间日期选择器特有的选项参考下表                         | object                                | —                                                            | {}                   |
| rangeSeparator   | 选择范围时的分隔符                                           | string                                | -                                                            | '-'                  |
| valueFormat      | 可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象 | string                                | 见[日期格式](http://element-cn.eleme.io/#/zh-CN/component/date-picker#ri-qi-ge-shi) | —                    |
| defaultValue     | 可选，选择器打开时默认显示的时间                             | Date(TimePicker) / string(TimeSelect) | 可被`new Date()`解析(TimePicker) / 可选值(TimeSelect)        | —                    |
| name              | 原生属性                                                     | string                                | —                                                            | —                    |
| prefixIcon       | 自定义头部图标的类名                                         | string                                | —                                                            | el-icon-time         |
| clearIcon        | 自定义清空图标的类名                                         | string                                | —                                                            | el-icon-circle-close |

#### Time Select Options

| 参数    | 说明                                 | 类型   | 可选值 | 默认值 |
| ------- | ------------------------------------ | ------ | ------ | ------ |
| start   | 开始时间                             | string | —      | 09:00  |
| end     | 结束时间                             | string | —      | 18:00  |
| step    | 间隔时间                             | string | —      | 00:30  |
| minTime | 最小时间，小于该时间的时间段将被禁用 | string | —      | 00:00  |
| maxTime | 最大时间，大于该时间的时间段将被禁用 | string | —      | —      |

#### Time Picker Options

| 参数            | 说明                                                         | 类型           | 可选值                                    | 默认值     |
| --------------- | ------------------------------------------------------------ | -------------- | ----------------------------------------- | ---------- |
| selectableRange | 可选时间段，例如`'18:30:00 - 20:30:00'`或者传入数组`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']` | string / array | —                                         | —          |
| format          | 时间格式化(TimePicker)                                       | string         | 小时：`HH`，分：`mm`，秒：`ss`，AM/PM `A` | 'HH:mm:ss' |



#### events

| 事件名 | 说明                    | 参数       |
| ------ | ----------------------- | ---------- |
| change | 用户确认选定的值时触发  | 组件绑定值 |
| blur   | 当 input 失去焦点时触发 | 组件实例   |
| focus  | 当 input 获得焦点时触发 | 组件实例   |
