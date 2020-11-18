# Rate 评分

#### [在线预览](https://jsrun.pro/CehKp/edit)

#### Maker
```js
maker.rate('推荐级别','rate',2)
    .props({
        "count": 10,
        "allowHalf": false
    })
    .validate([{required:true,type:'number',min:3, message: '请大于3颗星',trigger:'change'}])
```

#### JSON
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

参考:[iview2.x](http://v2.iviewui.com/components/rate#API) | [iview3.x](https://www.iviewui.com/components/rate#API)

**value**: `Number`

#### props

| 属性        | 说明                                        | 类型    | 默认值 |
| :---------- | :------------------------------------------ | :------ | :----- |
| count       | star 总数                                   | Number  | 5      |
| allow-half  | 是否允许半选                                | Boolean | false  |
| disabled    | 是否只读，无法进行交互                      | Boolean | false  |
| show-text   | 是否显示提示文字                            | Boolean | false  |
| clearable   | 是否可以取消选择                            | Boolean | false  |
| character   | 自定义字符                                  | String  | -      |
| icon        | 使用图标                                    | String  | -      |
| custom-icon | 使用自定义图标                              | String  | -      |

#### on 事件

 
| 事件名    | 说明           | 返回值 |
| :-------- | :------------- | :----- |
| on-change | 评分改变时触发 | value  |