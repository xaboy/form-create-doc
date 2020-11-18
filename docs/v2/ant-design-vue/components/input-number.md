# InputNumber 数字输入框

#### Maker
```js
$formCreate.maker.number('排序','sort',0)
```

#### JSON
```json
{
    type: "InputNumber",
    field: "price",
    title: "价格",
    value: 1,
    props: {
        precision:2
    },
}
```

参考:[Ant-design-vue_InputNumber](https://www.antdv.com/components/input-number-cn/)

**value** :`Number`

#### props

| 成员             | 说明                                                       | 类型                                      | 默认值    |
| :--------------- | :--------------------------------------------------------- | :---------------------------------------- | :-------- |
| autoFocus        | 自动获取焦点                                               | boolean                                   | false     |
| disabled         | 禁用                                                       | boolean                                   | false     |
| formatter        | 指定输入框展示值的格式                                     | function(value: number \| string): string | -         |
| max              | 最大值                                                     | number                                    | Infinity  |
| min              | 最小值                                                     | number                                    | -Infinity |
| parser           | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 | function( string): number                 | -         |
| precision        | 数值精度                                                   | number                                    | -         |
| decimalSeparator | 小数点                                                     | string                                    | -         |
| size             | 输入框大小                                                 | string                                    | 无        |
| step             | 每次改变步数，可以为小数                                   | number\|string                            | 1         |



#### on 事件

| 事件名称   | 说明           | 回调参数                          |
| :--------- | :------------- | :-------------------------------- |
| change     | 变化回调       | Function(value: number \| string) |
| pressEnter | 按下回车的回调 | function(e)                       |



