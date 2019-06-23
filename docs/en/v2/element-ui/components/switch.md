# Switch 开关

#### Maker
```js
$formCreate.maker.switch('是否上架','is_show','1').props({
    activeValue:"1",
    inactiveValue:"0",
})
```

#### Maker
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

参考:[Element_Switch](http://element-cn.eleme.io/#/zh-CN/component/switch)

**value** :`Number | String`

#### props

| 参数                | 说明                                                         | 类型                      | 可选值 | 默认值  |
| ------------------- | ------------------------------------------------------------ | ------------------------- | ------ | ------- |
| disabled            | 是否禁用                                                     | boolean                   | —      | false   |
| width               | switch 的宽度（像素）                                        | number                    | —      | 40      |
| activeIconClass   | switch 打开时所显示图标的类名，设置此项会忽略 `active-text`  | string                    | —      | —       |
| inactiveIconClass | switch 关闭时所显示图标的类名，设置此项会忽略 `inactive-text` | string                    | —      | —       |
| activeText         | switch 打开时的文字描述                                      | string                    | —      | —       |
| inactiveText       | switch 关闭时的文字描述                                      | string                    | —      | —       |
| activeValue        | switch 打开时的值                                            | boolean / string / number | —      | true    |
| inactiveValue      | switch 关闭时的值                                            | boolean / string / number | —      | false   |
| activeColor        | switch 打开时的背景色                                        | string                    | —      | #409EFF |
| inactiveColor      | switch 关闭时的背景色                                        | string                    | —      | #C0CCDA |
| name                | switch 对应的 name 属性                                      | string                    | —      | —       |

#### event

| 事件名称 | 说明                            | 回调参数   |
| -------- | ------------------------------- | ---------- |
| change   | switch 状态发生变化时的回调函数 | 新状态的值 |




