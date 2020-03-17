# DatePicker 日期选择器

#### [在线预览](https://jsrun.pro/HehKp/edit)

#### Maker
```js
maker.date('活动日期','section_day',['2018-02-20', new Date()]).props({
        "type": "datetimerange",
        "placeholder":"请选择活动日期"
})
```

#### JSON
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

参考:[iview2.x](http://v2.iviewui.com/components/date-picker#API) | [iview3.x](https://www.iviewui.com/components/date-picker#API)

**value**: `String | Array`

#### props

| 属性                | 说明                                                         | 类型                        | 默认值                                                       |
| :------------------ | :----------------------------------------------------------- | :-------------------------- | :----------------------------------------------------------- |
| type                | 显示类型，可选值为 `date`、`daterange`、`datetime`、`datetimerange`、`year`、`month` | String                      | date                                                         |
| format              | 展示的日期格式                                               | Date | **date \| daterange**： yyyy-MM-dd**datetime \| datetimerange**： yyyy-MM-dd HH:mm:ss**year**：yyyy**month**：yyyy-MM |
| placement           | 日期选择器出现的位置，可选值为`top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end`，2.12.0 版本开始支持自动识别 | String                      | bottom-start                                                 |
| placeholder         | 占位文本                                                     | String                      | 空                                                           |
| options             | 选择器额外配置，比如不可选日期与快捷选项，具体项详见下表     | Object                      | -                                                            |
| split-panels        | 开启后，左右面板不联动，仅在 `daterange` 和 `datetimerange` 下可用。 | Boolean                     | false                                                        |
| multiple            | 开启后，可以选择多个日期，仅在 `date` 下可用。               | Boolean                     | false                                                        |
| show-week-numbers   | 开启后，可以显示星期数。                                     | Boolean                     | false                                                        |
| start-date          | 设置默认显示的起始日期。                                     | Date                        | -                                                            |
| confirm             | 是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭 | Boolean                     | false                                                        |
| open                | 手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用 | Boolean                     | null                                                         |
| size                | 尺寸，可选值为`large`、`small`、`default`或者不设置          | String                      | -                                                            |
| disabled            | 是否禁用选择器                                               | Boolean                     | false                                                        |
| clearable           | 是否显示清除按钮                                             | Boolean                     | true                                                         |
| readonly            | 完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效 | Boolean                     | false                                                        |
| editable            | 文本框是否可以输入，只在没有使用 slot 时有效                 | Boolean                     | true                                                         |
| transfer            | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean                     | false                                                        |
| element-id          | 给表单元素设置 `id`，详见 Form 用法。                        | String                      | -                                                            |
| time-picker-options | 可以在 type 为 datetime 和 datetimerange 下，配置 TimePicker 的属性，比如时间间隔 steps：`:time-picker-options="{steps: [1, 10, 10]}"` | Object                      | {}                                                           |
| separator 3.3.0     | 两个日期间的分隔符                                           | String                      | -                                                            |

#### Props.options

选择器额外配置

| 属性         | 说明                                                         | 类型     | 默认值 |
| :----------- | :----------------------------------------------------------- | :------- | :----- |
| shortcuts    | 设置快捷选项，每项内容：**text \| String**：显示的文案**value \| Function**：返回指定的日期，如需自己控制逻辑，可不设置，并使用 onClick 回调**onClick \| Function**：点击时的回调，参数为当前日期选择器的 Vue 实例，当需要自定义复杂操作时，可以使用 | Array    | -      |
| disabledDate | 设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天 | Function | -      |

#### events



| 事件名                | 说明                                                        | 返回值                                                       |
| :-------------------- | :---------------------------------------------------------- | :----------------------------------------------------------- |
| on-change             | 日期发生变化时触发                                          | 返回两个值，已经格式化后的日期，比如 2016-01-01，和当前的日期类型，比如 date |
| on-open-change        | 弹出日历和关闭日历时触发                                    | true \| false                                                |
| on-ok                 | 在 confirm 模式下有效，点击确定按钮时触发                   | -                                                            |
| on-clear              | 在 confirm 模式或 clearable = true 时有效，在清空日期时触发 | -                                                            |
| on-clickoutside 3.4.0 | 点击外部关闭下拉菜单时触发                                  | event                                                        |