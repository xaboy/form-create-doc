# Switch 开关

#### [在线预览](https://jsrun.net/dehKp/edit)

#### Maker
```js
maker.switch('是否上架','is_show','1').props({
    "trueValue":"1",
    "falseValue":"0",
    "slot":{
       open:"上架",
       close:"下架",
   }
})
```

#### JSON
```json
{
    type:"switch",
    title:"是否上架",
    field:"is_show",
    value:"1",
    props: {
        "trueValue":"1", 
        "falseValue":"0",
        "slot": {
            open:"上架", 
            close:"下架", 
        }, 
    },
}
```

参考:[iview2.x](http://v2.iviewui.com/components/switch#API) | [iview3.x](https://www.iviewui.com/components/switch#API)

**value**: `String | Number | Boolean`

#### props

| 属性        | 说明                                                         | 类型                    | 默认值 |
| :---------- | :----------------------------------------------------------- | :---------------------- | :----- |
| value       | 指定当前是否选中，可以使用 v-model 双向绑定数据              | Boolean                 | false  |
| size        | 开关的尺寸，可选值为`large`、`small`、`default`或者不写。建议开关如果使用了2个汉字的文字，使用 large。 | String                  | -      |
| disabled    | 禁用开关                                                     | Boolean                 | false  |
| true-value  | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用       | String, Number, Boolean | true   |
| false-value | 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用   | String, Number, Boolean | false  |
| loading     | 加载中的开关                                                 | Boolean                 | false  |
| open | 自定义显示打开时的内容 | String | - |
| close | 自定义显示关闭时的内容 | String | - |

#### events

| 事件名    | 说明                           | 返回值        |
| :-------- | :----------------------------- | :------------ |
| on-change | 开关变化时触发，返回当前的状态 | true \| false |