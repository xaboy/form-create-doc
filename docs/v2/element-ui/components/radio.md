# Radio 单选框

#### Maker
```js
$formCreate.maker.radio('是否包邮','is_postage','0').options([
    {value:"0",label:"不包邮",disabled:false},
    {value:"1",label:"包邮",disabled:false},
    {value:"2",label:"未知",disabled:true},
])
```

#### JSON
```json
{
    type:"radio",
    title:"是否包邮",
    field:"is_postage",
    value:"0",
    options:[
        {value:"0",label:"不包邮",disabled:false},
        {value:"1",label:"包邮",disabled:true},
    ],
}
```

参考:[Element_Radio](http://element-cn.eleme.io/#/zh-CN/component/radio)

**value** :`String | Number`


#### options

| **字段名** | **说明** | **字段类型** | **是否必填** | **默认值** |
| :--- | :--- | :--- | :--- | :--- |
| value | 参数值 | String,Number | true | - |
| label | 字段别名 | String | true | - |
| disabled | 设置为禁用状态 | Boolean | false | false |

#### props

| 参数       | 说明                                                       | 类型    | 可选值                | 默认值  |
| ---------- | ---------------------------------------------------------- | ------- | --------------------- | ------- |
| size       | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效 | string  | medium / small / mini | —       |
| disabled   | 是否禁用                                                   | boolean | —                     | false   |
| textColor | 按钮形式的 Radio 激活时的文本颜色                          | string  | —                     | #ffffff |
| fill       | 按钮形式的 Radio 激活时的填充色和边框色                    | string  | —                     | #409EFF |

#### on 事件

| 事件名称 | 说明                   | 回调参数              |
| -------- | ---------------------- | --------------------- |
| change   | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

