### TimePicker 时间选择器

#### [在线预览](https://jsrun.net/GehKp/edit)

#### 举例:
```js
{  
        type: "TimePicker",
        field: "section_time",
        title: "活动时间",
        value: [], 
        props: {
            "type": "timerange",
            "placeholder":"请选择获得时间", 
        },
}
```

#### maker快速生成:
```js
$formCreate.maker.time('活动时间','section_time').props({
        "type":"timerange",
        "placeholder":"请选择活动时间"
})
```

#### json 生成规则
```json
{
        type: "TimePicker",//必填!
        field: "section_time",//必填!
        title: "活动时间",//必填!
        //input值, type为timerange value为数组 [start_value,end_value]
        value: [],
        props: {
            //显示类型，可选值为 time、timerange
            "type": "timerange", //必填!
            //展示的时间格式
            "format": "HH:mm:ss",
            //下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。
            "steps": [],
            //时间选择器出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end
            "placement": "bottom-start",
            //占位文本
            "placeholder":"请选择活动时间",
            //是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭
            "confirm":false,
            //尺寸，可选值为large、small、default或者不设置
            "size":"default",
            //是否禁用选择器
            "disabled":false,
            //是否显示清除按钮
            "clearable":true,
            //完全只读，开启后不会弹出选择器
            "readonly":false,
            //文本框是否可以输入
            "editable":false,
        },
        validate:[],
}
```

#### 参数说明
##### 基本规则 rule:

| **字段名** | **说明** | **字段类型** | **是否必填** | **默认值** |
| :--- | :--- | :--- | :--- | :--- |
| type | 元素类型 | String | true | - |
| field | 字段名称 | String | true | - |
| title | 字段别名 | String | true | - |
| value | 字段值,当props.type设置为timerange时value为数组 \[开始时间,结束时间\] | String,Number,Date,Array | false | - |
| props | 元素配置 | Object | true | - |
| event | 元素事件 | Object | false | - |
| validate | 验证规则 | Array | false | - |


##### 元素配置 props:

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 显示类型，可选值为 time、timerange | String | true | - |
| format | 展示的时间格式,例如 'HH:mm:ss' | String | false | 'HH:mm:ss' |
| steps | 下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 \[1, 15\] 时，分钟会显示：00、15、30、45。 | Number | false | - |
| placement | 时间选择器出现的位置，可选值为top,top-start,top-end,bottom,bottom-start,bottom-end,left,left-start,left-end,right,right-start,right-end | String | false | - |
| placeholder | 占位文本 | String | false | - |
| confirm | 是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭 | Boolean | false | false |
| size | 尺寸，可选值为large、small、default或者不设置 | String | false | - |
| disabled | 是否禁用选择器 | Boolean | false | false |
| clearable | 是否显示清除按钮 | Boolean | false | true |
| readonly | 完全只读，开启后不会弹出选择器 | Boolean | false | false |
| editable | 文本框是否可以输入 | Boolean | false | false |


##### 事件扩展 event:

| 事件名称 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| change | 时间发生变化时触发 已经格式化后的时间，比如 09:41:00 | Function | false | - |
| open-change | 弹出浮层和关闭浮层时触发 true 或 false | Function | false | - |
| clear | 在清空日期时触发 | Function | false | - |


