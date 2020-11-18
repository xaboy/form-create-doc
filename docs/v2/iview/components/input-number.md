# InputNumber 数字输入框

#### [在线预览](https://jsrun.pro/xehKp/edit)

#### Maker
```js
maker.number('排序','sort',0)
```

#### JSON
```json
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

参考:[iview2.x](http://v2.iviewui.com/components/input-number#API) | [iview3.x](https://www.iviewui.com/components/input-number#API)

**value**: `Number`

#### props

| 属性          | 说明                                                       | 类型     | 默认值    |
| :------------ | :--------------------------------------------------------- | :------- | :-------- |
| max           | 最大值                                                     | Number   | Infinity  |
| min           | 最小值                                                     | Number   | -Infinity |
| step          | 每次改变的步伐，可以是小数                                 | Number   | 1         |
| size          | 输入框尺寸，可选值为`large`、`small`、`default`或者不填    | String   | -         |
| disabled      | 设置禁用状态                                               | Boolean  | false     |
| placeholder   | 占位文本                                                   | String   | -         |
| formatter     | 指定输入框展示值的格式                                     | Function | -         |
| parser        | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 | Function | -         |
| readonly      | 是否设置为只读                                             | Boolean  | false     |
| editable      | 是否可编辑                                                 | Boolean  | true      |
| precision     | 数值精度                                                   | Number   | -         |
| element-id    | 给表单元素设置 `id`，详见 Form 用法。                      | String   | -         |
| active-change | 是否实时响应数据，设置为 false 时，只会在失焦时更改数据    | Boolean  | true      |

#### on 事件

| 事件名    | 说明                         | 返回值 |
| :-------- | :--------------------------- | :----- |
| on-change | 数值改变时的回调，返回当前值 | 当前值 |
| on-focus  | 聚焦时触发                   | event  |
| on-blur   | 失焦时触发                   | -      |