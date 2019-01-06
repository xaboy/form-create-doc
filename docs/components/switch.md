### Switch 开关

#### [在线预览](https://jsrun.net/dehKp/edit)

#### 示例
```js
{
        type:"switch",
        title:"是否上架",
        field:"is_show",
        value:"1",
        props: {
            "trueValue":"1", 
            "falseValue":"0", 
        },
        slot: {
            open:"上架", 
            close:"下架", 
        },
}
```

#### maker 快速生成
```js
$formCreate.maker.switch('是否上架','is_show','1').slot({
        open:"上架",
        close:"下架",
    }).props({
        "trueValue":"1",
        "falseValue":"0",
})
```

#### json 规则
```json
{
        type:"switch",//必填!
        //label名称
        title:"是否上架",//必填!
        //字段名称
        field:"is_show",//必填!
        //input值
        value:"1",
        props: {
        	//开关的尺寸，可选值为large、small、default或者不写。建议开关如果使用了2个汉字的文字，使用 large。
            "size":"default",
            //禁用开关
            "disabled":false,
            //选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
            "trueValue":"1",
            //没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
            "falseValue":"0",
        },
        slot: {
        	//自定义显示打开时的内容
            open:"上架",
            //自定义显示关闭时的内容
            close:"下架",
        },
        validate:[],
}
```

#### 参数说明

参考:[iview2.x](http://v2.iviewui.com/components/switch#API) | [iview3.x](https://www.iviewui.com/components/switch#API)



##### 规则 rule

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 元素类型 | String | true | - |
| field | 字段名称 | String | true | - |
| title | 字段别名 | String | true | - |
| value | 字段值 | String,Number,Array | false | - |
| slot | 自定义显示 | Object | false | - |
| props | 元素配置 | Object | false | - |
| event | 元素事件 | Object | false | - |
| validate | 验证规则 | Array | false | - |

##### 自定义显示 slot

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| open | 自定义显示打开时的内容 | String | false | - |
| close | 自定义显示关闭时的内容 | String | false | - |

##### 元素配置 props

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| trueValue | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 | Boolean,Number,String | false | '1' |
| falseValue | 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 | Boolean,Number,String | false | '0' |
| size | 开关的尺寸，可选值为large、small、default或者不写。建议开关如果使用了2个汉字的文字，使用 large。 | String | false | - |
| disabled | 禁用开关 | Boolean | false | false |

##### 事件扩展 event

| 事件名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| change | 开关变化时触发，返回当前的状态 0 或 1 | Function | false | - |


