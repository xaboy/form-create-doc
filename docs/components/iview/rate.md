### Rate 评分

#### [在线预览](https://jsrun.net/CehKp/edit)

#### maker 快速生成
```js
$formCreate.maker.rate('推荐级别','rate',2)
        .props({
            "count": 10,
            "allowHalf": false
        })
        .validate([{required:true,type:'number',min:3, message: '请大于3颗星',trigger:'change'}])
```

#### json 规则
```json
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

#### 参数说明
参考:[iview2.x](http://v2.iviewui.com/components/rate#API) | [iview3.x](https://www.iviewui.com/components/rate#API)



##### 规则 rule

| 字段名 | 说明 | 字段类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 元素类型 | String | - |
| field | 字段名称 | String | - |
| title | 字段别名 | String | - |
| value | 字段值 | Number | 0 |
| props | 元素配置 | Object | - |
| event | 元素事件 | Object | - |
| validate | 验证规则 | Array | - |

#####  元素配置 props

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| count | star 总数 | Number | false | 5 |
| allowHalf | 是否允许半选 | Boolean | false | false |
| disabled | 是否只读，无法进行交互 | Boolean | false | false |
| showText | 是否显示提示文字 | Boolean | false | false |
| clearable | 是否可以取消选择 | Boolean | false | false |

##### 事件扩展 event

| 事件名称 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| change | 评分改变时触发 | Function | false | - |


