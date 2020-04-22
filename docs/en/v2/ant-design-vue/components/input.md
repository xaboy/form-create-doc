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
    props: {
        "type": "text",
    },
    validate:[
        { required: true, message: '请输入goods_name', trigger: 'blur' },
    ],
}
```

参考:[Ant-design-vue_Input](https://www.antdv.com/components/input-cn/)

**value** :`String`

#### props

| 参数        | 说明                                                         | 类型         | 默认值    |
| :---------- | :----------------------------------------------------------- | :----------- | :-------- |
| addonAfter  | 带标签的 input，设置后置标签                                 | string\|slot |           |
| addonBefore | 带标签的 input，设置前置标签                                 | string\|slot |           |
| disabled    | 是否禁用状态，默认为 false                                   | boolean      | false     |
| id          | 输入框的 id                                                  | string       |           |
| maxLength   | 最大长度                                                     | number       |           |
| prefix      | 带有前缀图标的 input                                         | string\|slot |           |
| size        | 控件大小。注：标准表单内的输入框大小限制为 `large`。可选 `large` `default` `small` | string       | `default` |
| suffix      | 带有后缀图标的 input                                         | string\|slot |           |
| **type**    | text，textarea,search 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | string       | `text`    |
| allowClear  | 可以点击清除图标删除内容                                     | boolean      |           |



### Input 事件

| 事件名称   | 说明                   | 回调参数    |
| :--------- | :--------------------- | :---------- |
| change     | 输入框内容变化时的回调 | function(e) |
| pressEnter | 按下回车的回调         | function(e) |

### TextArea

| 参数         | 说明                                                         | 类型            | 默认值 |
| :----------- | :----------------------------------------------------------- | :-------------- | :----- |
| autosize     | 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }` | boolean\|object | false  |
| defaultValue | 输入框默认内容                                               | string          |        |
| allowClear   | 可以点击清除图标删除内容                                     | boolean         |        |

### TextArea 事件

| 事件名称   | 说明           | 回调参数    |
| :--------- | :------------- | :---------- |
| pressEnter | 按下回车的回调 | function(e) |



#### Search

| 参数        | 说明                                                    | 类型          | 默认值 |
| :---------- | :------------------------------------------------------ | :------------ | :----- |
| enterButton | 是否有确认按钮，可设为按钮文字。该属性会与 addon 冲突。 | boolean\|slot | false  |
| loading     | 搜索 loading                                            | boolean       |        |

### Search 事件

| 事件名称 | 说明                         | 回调参数               |
| :------- | :--------------------------- | :--------------------- |
| search   | 点击搜索或按下回车键时的回调 | function(value, event) |

其余属性和 Input 一致。