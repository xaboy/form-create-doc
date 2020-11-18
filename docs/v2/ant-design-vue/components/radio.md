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

参考:[Ant-design-vue_Radio](https://www.antdv.com/components/radio-cn/)

**value** :`String | Number`


#### options

| **字段名** | **说明** | **字段类型** | **是否必填** | **默认值** |
| :--- | :--- | :--- | :--- | :--- |
| value | 参数值 | String,Number | true | - |
| label | 字段别名 | String | true | - |
| disabled | 设置为禁用状态 | Boolean | false | false |

#### props

| 参数        | 说明                                                   | 类型                                                         | 默认值    |
| :---------- | :----------------------------------------------------- | :----------------------------------------------------------- | :-------- |
| disabled    | 禁选所有子单选器                                       | boolean                                                      | false     |
| name        | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性 | string                                                       | -         |
| options     | 以配置形式设置子元素                                   | string[] \| Array<{ label: string value: string disabled?: boolean }> | -         |
| size        | 大小，只对按钮样式生效                                 | `large` | `default` | `small`                                | `default` |
| buttonStyle | RadioButton 的风格样式，目前有描边和填色两种风格       | `outline` | `solid`                                          | `outline` |

#### on 事件

| 事件名称 | 说明                 | 回调参数          |
| -------- | -------------------- | ----------------- |
| change   | 选项变化时的回调函数 | Function(e:Event) |

