### Radio 单选框

#### [在线预览](https://jsrun.net/cehKp/edit)

#### maker 快速生成
```js
$formCreate.maker.radio('是否包邮','is_postage','0').options([
        {value:"0",label:"不包邮",disabled:false},
        {value:"1",label:"包邮",disabled:false},
        {value:"2",label:"未知",disabled:true},
])
```

#### json 规则
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

#### 参数说明

参考:[iview2.x](http://v2.iviewui.com/components/radio#API) | [iview3.x](https://www.iviewui.com/components/radio#API)



##### 规则 rule

| **字段名** | **说明** | **字段类型** | **默认值** |
| :--- | :--- | :--- | :--- |
| type | 元素类型 | String | - |
| field | 字段名称 | String | - |
| title | 字段别名 | String | - |
| value | 字段值 | String,Number | - |
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
| type | 可选值为 button 或不填，为 button 时使用按钮样式 | String | false | - |
| size | 单选框的尺寸，可选值为 large、small、default 或者不设置 | String | false | - |
| vertical | 是否垂直排列，按钮样式下无效 | Boolean | false | false |

##### 事件扩展 event

| 事件名称 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| change | 在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发 | Function | false | - |


