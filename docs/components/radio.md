### Radio 单选框

#### [在线预览](https://jsrun.net/cehKp/edit)

#### 举例:
```js
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

#### maker快速生成:
```js
$formCreate.maker.radio('是否包邮','is_postage','0').options([
        {value:"0",label:"不包邮",disabled:false},
        {value:"1",label:"包邮",disabled:false},
        {value:"2",label:"未知",disabled:true},
])
```

#### json 生成规则
```json
radioRule :
{
        type:"radio",//必填!
        //label名称
        title:"是否包邮",//必填!
        //字段名称
        field:"is_postage",//必填!
        //input值
        value:"0",
        //可选参数
        options:[
            {value:"0",label:"不包邮",disabled:false},
            {value:"1",label:"包邮",disabled:true},
        ],//必填!
        props: {
        	//可选值为 button 或不填，为 button 时使用按钮样式
            "type":undefined,
            //单选框的尺寸，可选值为 large、small、default 或者不设置
            "size":"default",
            //是否垂直排列，按钮样式下无效
            "vertical":false,
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
| value | 字段值 | String,Number | false | - |
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
| type | 可选值为 button 或不填，为 button 时使用按钮样式 | String | false | - |
| size | 单选框的尺寸，可选值为 large、small、default 或者不设置 | String | false | - |
| vertical | 是否垂直排列，按钮样式下无效 | Boolean | false | false |

##### 事件扩展 event:

| 事件名称 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| change | 在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发 | Function | false | - |

---



