### Switch 开关

#### maker 快速生成
```js
$formCreate.maker.switch('是否上架','is_show','1').props({
        activeValue:"1",
        inactiveValue:"0",
})
```

#### json 规则
```json
{
        type:"switch",
        title:"是否上架",
        field:"is_show",
        value:"1",
        props: {
            activeValue:"1", 
            inactiveValue:"0", 
        },
}
```

#### 参数说明

参考:[Element_Switch](http://element-cn.eleme.io/#/zh-CN/component/switch)



##### 规则 rule

| 字段名 | 说明 | 字段类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 元素类型 | String | - |
| field | 字段名称 | String | - |
| title | 字段别名 | String | - |
| value | 字段值 | String,Number,Array | - |
| props | 元素配置 | Object | - |
| event | 元素事件 | Object | - |
| validate | 验证规则 | Array | - |

##### 元素配置 props

| 参数                | 说明                                                         | 类型                      | 可选值 | 默认值  |
| ------------------- | ------------------------------------------------------------ | ------------------------- | ------ | ------- |
| disabled            | 是否禁用                                                     | boolean                   | —      | false   |
| width               | switch 的宽度（像素）                                        | number                    | —      | 40      |
| active-icon-class   | switch 打开时所显示图标的类名，设置此项会忽略 `active-text`  | string                    | —      | —       |
| inactive-icon-class | switch 关闭时所显示图标的类名，设置此项会忽略 `inactive-text` | string                    | —      | —       |
| active-text         | switch 打开时的文字描述                                      | string                    | —      | —       |
| inactive-text       | switch 关闭时的文字描述                                      | string                    | —      | —       |
| active-value        | switch 打开时的值                                            | boolean / string / number | —      | true    |
| inactive-value      | switch 关闭时的值                                            | boolean / string / number | —      | false   |
| active-color        | switch 打开时的背景色                                        | string                    | —      | #409EFF |
| inactive-color      | switch 关闭时的背景色                                        | string                    | —      | #C0CCDA |
| name                | switch 对应的 name 属性                                      | string                    | —      | —       |

##### 事件扩展 event

| 事件名称 | 说明                            | 回调参数   |
| -------- | ------------------------------- | ---------- |
| change   | switch 状态发生变化时的回调函数 | 新状态的值 |




