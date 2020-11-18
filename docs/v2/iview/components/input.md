# Input 输入框

#### [在线预览](https://jsrun.pro/7ehKp/edit)

#### Maker
```js
maker.input('商品名称','goods_name').props({
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

参考:[iview2.x](http://v2.iviewui.com/components/input#API) | [iview3.x](https://www.iviewui.com/components/input#API)

**value**: `String`

#### props

| 属性         | 说明                                                         | 类型              | 默认值 |
| :----------- | :----------------------------------------------------------- | :---------------- | :----- |
| type         | 输入框类型，可选值为 `text`、`password`、`textarea`、`url`、`email`、`date`、`number`、`tel` | String            | text   |
| size         | 输入框尺寸，可选值为`large`、`small`、`default`或者不设置    | String            | -      |
| placeholder  | 占位文本                                                     | String            | -      |
| clearable    | 是否显示清空按钮                                             | Boolean           | false  |
| disabled     | 设置输入框为禁用状态                                         | Boolean           | false  |
| readonly     | 设置输入框为只读                                             | Boolean           | false  |
| maxlength    | 最大输入长度                                                 | Number            | -      |
| icon         | 输入框尾部图标，仅在 text 类型下有效                         | String            | -      |
| prefix       | 输入框头部图标                                               | String            | -      |
| suffix       | 输入框尾部图标                                               | String            | -      |
| search       | 是否显示为搜索型输入框                                       | Boolean           | false  |
| enter-button | 开启 search 时可用，是否有确认按钮，可设为按钮文字           | Boolean \| String | false  |
| rows         | 文本域默认行数，仅在 textarea 类型下有效                     | Number            | 2      |
| autosize     | 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 } | Boolean \| Object | false  |
| number       | 将用户的输入转换为 Number 类型                               | Boolean           | false  |
| autofocus    | 自动获取焦点                                                 | Boolean           | false  |
| autocomplete | 原生的自动完成功能                                           | String            | off    |
| element-id   | 给表单元素设置 `id`，详见 Form 用法。                        | String            | -      |
| spellcheck   | 原生的 spellcheck 属性                                       | Boolean           | false  |
| wrap         | 原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效 | String            | soft   |

#### on 事件

| 事件名         | 说明                                           | 返回值 |
| :------------- | :--------------------------------------------- | :----- |
| on-enter       | 按下回车键时触发                               | 无     |
| on-click       | 设置 icon 属性后，点击图标时触发               | 无     |
| on-change      | 数据改变时触发                                 | event  |
| on-focus       | 输入框聚焦时触发                               | 无     |
| on-blur        | 输入框失去焦点时触发                           | 无     |
| on-keyup       | 原生的 keyup 事件                              | event  |
| on-keydown     | 原生的 keydown 事件                            | event  |
| on-keypress    | 原生的 keypress 事件                           | event  |
| on-search      | 开启 search 时可用，点击搜索或按下回车键时触发 | value  |
| on-clear 3.4.0 | 开启 clearable 时可用，点击清空按钮时触发      | 无     |