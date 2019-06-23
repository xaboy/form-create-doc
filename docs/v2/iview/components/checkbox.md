# Checkbox 多选框

#### [在线预览](https://jsrun.net/JehKp/edit)

#### Maker
```js
maker.checkbox('标签','label',["1","2","3"]).options([
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

参考:[iview2.x](http://v2.iviewui.com/components/checkbox#API) | [iview3.x](https://www.iviewui.com/components/checkbox#API)

**value**: `String | Number | Array`

#### options

| 属性          | 说明                                                         | 类型                        | 默认值 |
| :------------ | :----------------------------------------------------------- | :-------------------------- | :----- |
| value       | 选项值          | String \| Number                 | -  |
| label         | 只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中 | String \| Number \| Boolean | -      |
| disabled      | 是否禁用当前项                                               | Boolean                     | false  |
| indeterminate | 设置 indeterminate 状态，只负责样式控制                      | Boolean                     | false  |
| size          | 多选框的尺寸，可选值为 `large`、`small`、`default` 或者不设置 | String                      | -      |

#### props

| 属性  | 说明                                                         | 类型   | 默认值 |
| :---- | :----------------------------------------------------------- | :----- | :----- |
| size  | 多选框组的尺寸，可选值为 `large`、`small`、`default` 或者不设置 | String | -      |



#### events


| 事件名    | 说明                                                         | 返回值        |
| :-------- | :----------------------------------------------------------- | :------------ |
| on-change | 只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发 | true \| false |