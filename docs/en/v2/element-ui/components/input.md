# Input 输入框

#### Maker
```js
$formCreate.maker.input('商品名称','goods_name').props({
        placeholder:'请输入商品名称'
    }).validate([
        { required: true, message: '请输入商品名称', trigger: 'blur' }
])
```


#### JSON
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

参考:[Element_Input](http://element-cn.eleme.io/#/zh-CN/component/input)

**value** :`String`


#### props

| 参数           | 说明                                                         | 类型             | 可选值                                                       | 默认值 |
| -------------- | ------------------------------------------------------------ | ---------------- | ------------------------------------------------------------ | ------ |
| type           | 类型                                                         | string           | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text   |
| maxlength      | 原生属性，最大输入长度                                       | number           | —                                                            | —      |
| minlength      | 原生属性，最小输入长度                                       | number           | —                                                            | —      |
| placeholder    | 输入框占位文本                                               | string           | —                                                            | —      |
| clearable      | 是否可清空                                                   | boolean          | —                                                            | false  |
| disabled       | 禁用                                                         | boolean          | —                                                            | false  |
| size           | 输入框尺寸，只在 `type!="textarea"` 时有效                   | string           | medium / small / mini                                        | —      |
| prefixIcon    | 输入框头部图标                                               | string           | —                                                            | —      |
| suffixIcon    | 输入框尾部图标                                               | string           | —                                                            | —      |
| rows           | 输入框行数，只对 `type="textarea"` 有效                      | number           | —                                                            | 2      |
| autosize       | 自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 } | boolean / object | —                                                            | false  |
| autocomplete   | 原生属性，自动补全                                           | string           | on, off                                                      | off    |
| autoComplete  | 下个主版本弃用                                               | string           | on, off                                                      | off    |
| name           | 原生属性                                                     | string           | —                                                            | —      |
| readonly       | 原生属性，是否只读                                           | boolean          | —                                                            | false  |
| max            | 原生属性，设置最大值                                         | —                | —                                                            | —      |
| min            | 原生属性，设置最小值                                         | —                | —                                                            | —      |
| step           | 原生属性，设置输入字段的合法数字间隔                         | —                | —                                                            | —      |
| resize         | 控制是否能被用户缩放                                         | string           | none, both, horizontal, vertical                             | —      |
| autofocus      | 原生属性，自动获取焦点                                       | boolean          | true, false                                                  | false  |
| form           | 原生属性                                                     | string           | —                                                            | —      |
| label          | 输入框关联的label文字                                        | string           | —                                                            | —      |
| tabindex       | 输入框的tabindex                                             | string           | -                                                            | -      |
| validateEvent | 输入时是否触发表单的校验                                     | boolean          | -                                                            | true   |



#### events

| 事件名称 | 说明                                          | 回调参数                  |
| -------- | --------------------------------------------- | ------------------------- |
| blur     | 在 Input 失去焦点时触发                       | (event: Event)            |
| focus    | 在 Input 获得焦点时触发                       | (event: Event)            |
| change   | 在 Input 值改变时触发                         | (value: string \| number) |
| clear    | 在点击由 `clearable` 属性生成的清空按钮时触发 | —                         |

