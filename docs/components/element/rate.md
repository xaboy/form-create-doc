### Rate 评分

#### maker 快速生成
```js
$formCreate.maker.rate('推荐级别','rate',2)
        .props({
            max: 10
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
            max: 10,
        },
        validate:[
            {required:true,type:'number',min:3, message: '请大于3颗星',trigger:'change'}
        ]
}
```

#### 参数说明
参考:[Element_Rate](http://element-cn.eleme.io/#/zh-CN/component/rate)



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

| 参数                     | 说明                                                         | 类型    | 可选值 | 默认值                                                   |
| ------------------------ | ------------------------------------------------------------ | ------- | ------ | -------------------------------------------------------- |
| max                      | 最大分值                                                     | number  | —      | 5                                                        |
| disabled                 | 是否为只读                                                   | boolean | —      | false                                                    |
| allow-half               | 是否允许半选                                                 | boolean | —      | false                                                    |
| low-threshold            | 低分和中等分数的界限值，值本身被划分在低分中                 | number  | —      | 2                                                        |
| high-threshold           | 高分和中等分数的界限值，值本身被划分在高分中                 | number  | —      | 4                                                        |
| colors                   | icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色      | array   | —      | ['#F7BA2A', '#F7BA2A', '#F7BA2A']                        |
| void-color               | 未选中 icon 的颜色                                           | string  | —      | #C6D1DE                                                  |
| disabled-void-color      | 只读时未选中 icon 的颜色                                     | string  | —      | #EFF2F7                                                  |
| icon-classes             | icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名      | array   | —      | ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'] |
| void-icon-class          | 未选中 icon 的类名                                           | string  | —      | el-icon-star-off                                         |
| disabled-void-icon-class | 只读时未选中 icon 的类名                                     | string  | —      | el-icon-star-on                                          |
| show-text                | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容 | boolean | —      | false                                                    |
| show-score               | 是否显示当前分数，show-score 和 show-text 不能同时为真       | boolean | —      | false                                                    |
| text-color               | 辅助文字的颜色                                               | string  | —      | #1F2D3D                                                  |
| texts                    | 辅助文字数组                                                 | array   | —      | ['极差', '失望', '一般', '满意', '惊喜']                 |
| score-template           | 分数显示模板                                                 | string  | —      | {value}                                                  |



##### 事件扩展 event

| 事件名称 | 说明           | 回调参数     |
| -------- | -------------- | ------------ |
| change   | 分值改变时触发 | 改变后的分值 |

