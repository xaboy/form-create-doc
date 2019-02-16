### Slider 滑块

#### maker 快速生成
```js
$formCreate.maker.slider('滑块','slider',[0,52]).props({
        "min": 0,
        "max": 100,
        "range": true
})
```

#### json 规则
```json
{
        type:"slider",
        field:"slider",
        title:"滑块",
        value:[0,52],
        props:{
            min: 0,
            max: 100,
            range: true,
        }
}
```

#### 参数说明

参考:[Element_Slider](http://element-cn.eleme.io/#/zh-CN/component/slider)



##### 规则 rule

| 字段名 | 说明 | 字段类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 元素类型 | String | - |
| field | 字段名称 | String | - |
| title | 字段别名 | String | - |
| value | 滑块选定的值。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字 | Number ,Array | - |
| props | 元素配置 | Object | - |
| event | 元素事件 | Object | - |
| validate | 验证规则 | Array | - |

##### 元素配置 props

| 参数                | 说明                                                   | 类型            | 可选值                        | 默认值 |
| ------------------- | ------------------------------------------------------ | --------------- | ----------------------------- | ------ |
| min                 | 最小值                                                 | number          | —                             | 0      |
| max                 | 最大值                                                 | number          | —                             | 100    |
| disabled            | 是否禁用                                               | boolean         | —                             | false  |
| step                | 步长                                                   | number          | —                             | 1      |
| showInput          | 是否显示输入框，仅在非范围选择时有效                   | boolean         | —                             | false  |
| showInputControls | 在显示输入框的情况下，是否显示输入框的控制按钮         | boolean         | —                             | true   |
| inputSize          | 输入框的尺寸                                           | string          | large / medium / small / mini | small  |
| showStops          | 是否显示间断点                                         | boolean         | —                             | false  |
| showTooltip        | 是否显示 tooltip                                       | boolean         | —                             | true   |
| formatTooltip      | 格式化 tooltip message                                 | function(value) | —                             | —      |
| range               | 是否为范围选择                                         | boolean         | —                             | false  |
| vertical            | 是否竖向模式                                           | boolean         | —                             | false  |
| height              | Slider 高度，竖向模式时必填                            | string          | —                             | —      |
| label               | 屏幕阅读器标签                                         | string          | —                             | —      |
| debounce            | 输入时的去抖延迟，毫秒，仅在`show-input`等于true时有效 | number          | —                             | 300    |
| tooltipClass       | tooltip 的自定义类名                                   | string          | —                             | —      |

#### 事件扩展 event

| 事件名称 | 说明                                               | 回调参数   |
| -------- | -------------------------------------------------- | ---------- |
| change   | 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发） | 改变后的值 |


