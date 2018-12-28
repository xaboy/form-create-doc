### Rate 评分

#### [在线预览](https://jsrun.net/CehKp/edit)

#### 举例:
```js
{
        type:"rate",
        field:"rate",
        title:"推荐级别",
        value:3.5,
        props:{
            "count": 10,
            "allowHalf": false,
        },
        validate:[
            {required:true,type:'number',min:3, message: '请大于3颗星',trigger:'change'}
        ]
}
```

#### maker快速生成:
```js
$formCreate.maker.rate('推荐级别','rate',2)
        .props({
            "count": 10,
            "allowHalf": false
        })
        .validate([{required:true,type:'number',min:3, message: '请大于3颗星',trigger:'change'}])
```

#### json 生成规则
```json
{
        type:"rate",
        field:"rate",
        title:"推荐级别",
        value:3.5,
        props:{
            "count": 10, //star 总数
            "allowHalf": true, //是否允许半选
            "disabled": false, //是否只读，无法进行交互
            "showText": true, //是否显示提示文字
            "clearable": true, //是否可以取消选择
        },
        validate:[
            {required:true,type:'number',min:3, message: '请大于3颗星',trigger:'change'}
        ]
}
```

#### 参数说明
##### 基本规则 rule:

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 元素类型 | String | true | - |
| field | 字段名称 | String | true | - |
| title | 字段别名 | String | true | - |
| value | 字段值 | Number | false | 0 |
| props | 元素配置 | Object | false | - |
| event | 元素事件 | Object | false | - |
| validate | 验证规则 | Array | false | - |

#####  元素配置 props:

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| count | star 总数 | Number | false | 5 |
| allowHalf | 是否允许半选 | Boolean | false | false |
| disabled | 是否只读，无法进行交互 | Boolean | false | false |
| showText | 是否显示提示文字 | Boolean | false | false |
| clearable | 是否可以取消选择 | Boolean | false | false |

##### 事件扩展 event:

| 事件名称 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| change | 评分改变时触发 | Function | false | - |


