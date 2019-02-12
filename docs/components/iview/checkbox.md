### Checkbox 多选框

#### [在线预览](https://jsrun.net/JehKp/edit)

#### maker 快速生成
```js
$formCreate.maker.checkbox('标签','label',["1","2","3"]).options([
        {value:"1",label:"好用",disabled:true},
        {value:"2",label:"方便",disabled:false},
        {value:"3",label:"实用",disabled:false},
        {value:"4",label:"有效",disabled:false},
])
```

#### json 规则
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

#### 参数说明

参考:[iview2.x](http://v2.iviewui.com/components/checkbox#API) | [iview3.x](https://www.iviewui.com/components/checkbox#API)



##### 规则 rule

| **字段名** | **说明** | **字段类型** | **默认值** |
| :--- | :--- | :--- | :--- |
| type | 元素类型 | String | - |
| field | 字段名称 | String | - |
| title | 字段别名 | String | - |
| value | 字段值 | Array | - |
| options | 可选参数 | Array | - |
| props | 元素配置 | Object | - |
| event | 元素事件 | Object | - |
| validate | 验证规则 | Array | - |

##### 可选参数 Options

| **字段名** | **说明** | **字段类型** | **是否必填** | **默认值** |
| :--- | :--- | :--- | :--- | :--- |
| value | 参数值 | String,Number | true | - |
| label | 字段别名 | String | true | - |
| disabled | 设置为禁用状态 | Boolean | false | false |

##### 元素配置 props

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| size | 多选框组的尺寸，可选值为 large、small、default 或者不设置 | String | false | - |

##### 事件扩展 event

| 事件名称 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| change | 只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发 | Function | false | - |


