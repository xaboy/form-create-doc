# Checkbox 多选框

#### Maker
```js
$formCreate.maker.checkbox('标签','label',["1","2","3"]).options([
    {value:"1",label:"好用",disabled:true},
    {value:"2",label:"方便",disabled:false},
    {value:"3",label:"实用",disabled:false},
    {value:"4",label:"有效",disabled:false},
])
```

#### JSON
```json
{
    type:"checkbox",
    title:"标签",
    field:"label",
    value:["1","2","3"],
    options:[
        {value:"1",label:"好用",disabled:true},
        {value:"2",label:"方便",disabled:false},
        {value:"3",label:"实用",disabled:false},
        {value:"4",label:"有效",disabled:false},
    ]
}
```

参考:[Element_Checkbox](http://element-cn.eleme.io/#/zh-CN/component/checkbox)

**value** :`Array`


#### options

| **字段名** | **说明** | **字段类型** | **是否必填** | **默认值** |
| :--- | :--- | :--- | :--- | :--- |
| value | 参数值 | String,Number | true | - |
| label | 字段别名 | String | true | - |
| disabled | 设置为禁用状态 | Boolean | false | false |

#### props

| 参数       | 说明                                                         | 类型    | 可选值                | 默认值  |
| ---------- | ------------------------------------------------------------ | ------- | --------------------- | ------- |
| size       | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效 | string  | medium / small / mini | —       |
| disabled   | 是否禁用                                                     | boolean | —                     | false   |
| min        | 可被勾选的 checkbox 的最小数量                               | number  | —                     | —       |
| max        | 可被勾选的 checkbox 的最大数量                               | number  | —                     | —       |
| text-color | 按钮形式的 Checkbox 激活时的文本颜色                         | string  | —                     | #ffffff |
| fill       | 按钮形式的 Checkbox 激活时的填充色和边框色                   | string  | —                     | #409EFF |

#### on 事件

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 当绑定值变化时触发的事件 | 更新后的值 |
