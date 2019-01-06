### InputNumber 数字输入框

#### [在线预览](https://jsrun.net/xehKp/edit)

#### 示例
```js
{
        type: "InputNumber",
        field: "price",
        title: "价格",
        value: 1,
        props: {
            "precision":2 
        },
}
```

#### maker 快速生成
```js
$formCreate.maker.number('排序','sort',0)
```

#### json 规则
```json
{
        type: "InputNumber",//必填!
        field: "sort",//必填!
        title: "排序",//必填!
        //input值
        value: 1,
        props: {
        	//最大值
            "max": undefined,
            //最小值
            "min": undefined,
            //每次改变的步伐，可以是小数
            "step": 1,
            //输入框尺寸，可选值为large、small、default或者不填
            "size":"default",
            //设置禁用状态
            "disabled":false,
            //是否设置为只读
            "readonly":false,
            //是否可编辑
            "editable":true,
            //数值精度
            "precision":0,
        },
        validate:[],
}
```

#### 参数说明

参考:[iview2.x](http://v2.iviewui.com/components/input-number#API) | [iview3.x](https://www.iviewui.com/components/input-number#API)



##### 规则 rule

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 元素类型 | String | true | - |
| field | 字段名称 | String | true | - |
| title | 字段别名 | String | true | - |
| value | 字段值 | String,Number | false | - |
| props | 元素配置 | Object | true | - |
| event | 元素事件 | Object | false | - |
| validate | 验证规则 | Array | false | - |

##### 元素配置 props

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| max | 最大值 | Number | false | - |
| min | 最小值 | Number | false | - |
| step | 每次改变的步伐，可以是小数 | Number | false | 1 |
| size | 输入框尺寸，可选值为large、small、default或者不填 | String | false | - |
| disabled | 设置禁用状态 | Boolean | false | false |
| readonly | 是否设置为只读 | Boolean | false | false |
| editable | 是否可编辑 | Boolean | false | true |
| precision | 数值精度 | Number | false | - |

##### 事件扩展 event

| 事件名称 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| change | 数值改变时的回调，返回当前值 | Function | false | - |
| focus | 聚焦时触发 | Function | false | - |
| blur | 失焦时触发 | Function | false | - |



