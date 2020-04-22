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

参考:[Ant-design-vue_Checkbox](https://www.antdv.com/components/checkbox-cn/)

**value** :`Array`


#### options

| **字段名** | **说明** | **字段类型** | **是否必填** | **默认值** |
| :--- | :--- | :--- | :--- | :--- |
| value | 参数值 | String,Number | true | - |
| label | 字段别名 | String | true | - |
| disabled | 设置为禁用状态 | Boolean | false | false |



#### props

|              |                                                              |                                                              |        |
| :----------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----- |
| 参数         | 说明                                                         | 类型                                                         | 默认值 |
| defaultValue | 默认选中的选项                                               | string[]                                                     | []     |
| disabled     | 整组失效                                                     | boolean                                                      | false  |
| name         | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string                                                       | -      |
| options      | 指定可选项，可以通过 slot="label" slot-scope="option" 定制`label` | string[] \| Array<{ label: string value: string disabled?: boolean, indeterminate?: boolean, onChange?: function }> | []     |
| value        | 指定选中的选项                                               | string[]                                                     | []     |



#### events

| 事件名称 | 说明           | 回调参数               |
| :------- | :------------- | :--------------------- |
| change   | 变化时回调函数 | Function(checkedValue) |