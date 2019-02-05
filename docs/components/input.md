### Input 输入框

#### [在线预览](https://jsrun.net/7ehKp/edit)

#### maker 快速生成
```js
$formCreate.maker.input('商品名称','goods_name').props({
        placeholder:'请输入商品名称'
    }).validate([
        { required: true, message: '请输入商品名称', trigger: 'blur' }
])
```


#### json 规则
```json
{
        type:"input",
        title:"商品名称",
        field:"goods_name",
        value:"iphone 7",
        col:{
        	span:12,
        	labelWidth:150
        },
        props: {
            "type": "text",
        },
        validate:[
            { required: true, message: '请输入goods_name', trigger: 'blur' },
        ],
}
```

#### 参数说明

参考:[iview2.x](http://v2.iviewui.com/components/input#API) | [iview3.x](https://www.iviewui.com/components/input#API)



##### 规则 rule

| 字段名 | 说明 | 字段类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 元素类型 | String | - |
| field | 字段名称 | String | - |
| title | 字段别名 | String | - |
| value | 字段值 | String,Number | - |
| props | 元素配置 | Object | - |
| event | 元素事件 | Object | - |
| validate | 验证规则 | Array | - |

##### 元素配置 props

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 输入框类型，可选值为 text、password、textarea、url、email、date | String | true | 'input' |
| clearable | 是否显示清空按钮 | Boolean | true | false |
| disabled | 设置输入框为禁用状态 | Boolean | true | false |
| readonly | 设置输入框为只读 | Boolean | false | false |
| rows | 文本域默认行数，仅在 textarea 类型下有效 | Number,Boolean | false | 4 |
| autosize | 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 } | Boolean | false | false |
| number | 将用户的输入转换为 Number 类型 | Boolean | false | false |
| autofocus | 自动获取焦点 | Boolean | false | false |
| autocomplete | 原生的自动完成功能，可选值为 off 和 on | String | false | 'off' |
| placeholder | 占位文本 | String,Boolean | false | - |
| size | 输入框尺寸，可选值为large、small、default或者不设置 | Boolean | false | 'default' |
| spellcheck | 原生的 spellcheck 属性 | Boolean | false | false |



##### 事件扩展 event

| 事件名称 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| enter | 按下回车键时触发 | Function | false | - |
| click | 设置 icon 属性后，点击图标时触发 | Function | false | - |
| change | 数据改变时触发 | Function | false | - |
| focus | 输入框聚焦时触发 | Function | false | - |
| blur | 输入框失去焦点时触发 | Function | false | - |
| keyup | 原生的 keyup 事件 | Function | false | - |
| keydown | 原生的 keydown 事件 | Function | false | - |
| keypress | 原生的 keypress 事件 | Function | false | - |


