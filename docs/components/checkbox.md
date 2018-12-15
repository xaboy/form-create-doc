### Checkbox 多选框

#### [在线预览](https://jsrun.net/JehKp/edit)

#### 举例:
```js
{
        type:"checkbox",
        title:"标签",
        field:"label",
        value:[
            "1","2","3"
        ],
        options:[
            {value:"1",label:"好用",disabled:true},
            {value:"2",label:"方便",disabled:false},
            {value:"3",label:"实用",disabled:false},
            {value:"4",label:"有效",disabled:false},
        ],
}
```

#### maker快速生成:
```js
$formCreate.maker.checkbox('标签','label',["1","2","3"]).options([
        {value:"1",label:"好用",disabled:true},
        {value:"2",label:"方便",disabled:false},
        {value:"3",label:"实用",disabled:false},
        {value:"4",label:"有效",disabled:false},
])
```

#### json 生成规则
```json
{
        type:"checkbox",//必填!
        //label名称
        title:"标签",//必填!
        //字段名称
        field:"label",//必填!
        //input值
        value:[
            "1","2","3"
        ],
        //可选参数
        options:[
            {value:"1",label:"好用",disabled:true},
            {value:"2",label:"方便",disabled:false},
            {value:"3",label:"实用",disabled:false},
            {value:"4",label:"有效",disabled:false},
        ],//必填!
        props: {
        	//多选框组的尺寸，可选值为 large、small、default 或者不设置
            "size":"default",
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
| value | 字段值 | Array | false | - |
| options | 可选参数 | Array | true | - |
| props | 元素配置 | Object | false | - |
| event | 元素事件 | Object | false | - |
| validate | 验证规则 | Array | false | - |

##### 可选参数 Options:

| **字段名** | **说明** | **字段类型** | **是否必填** | **默认值** |
| :--- | :--- | :--- | :--- | :--- |
| value | 参数值 | String,Number | true | - |
| label | 字段别名 | String | true | - |
| disabled | 设置为禁用状态 | Boolean | false | false |

##### 元素配置 props:

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| size | 多选框组的尺寸，可选值为 large、small、default 或者不设置 | String | false | - |

##### 事件扩展 event:

| 事件名称 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| change | 只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发 | Function | false | - |

---



