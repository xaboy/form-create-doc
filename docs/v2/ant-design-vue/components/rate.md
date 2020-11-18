# Rate 评分

#### Maker
```js
$formCreate.maker.rate('推荐级别','rate',2)
    .props({
        count: 10
    })
    .validate([{required:true,type:'number',min:3, message: '请大于3颗星',trigger:'change'}])
```

#### JSON
```json
{
    type:"rate",
    field:"rate",
    title:"推荐级别",
    value:3.5,
    props:{
        count: 10,
    },
    validate:[
        {required:true,type:'number',min:3, message: '请大于3颗星',trigger:'change'}
    ]
}
```

参考:[Ant-desing-vue_Rate](https://www.antdv.com/components/rate-cn/)

**value** :`Number`

#### props

| 属性       | 说明                   | 类型                       | 默认值                 |
| :--------- | :--------------------- | :------------------------- | :--------------------- |
| allowClear | 是否允许再次点击后清除 | boolean                    | true                   |
| allowHalf  | 是否允许半选           | boolean                    | false                  |
| autoFocus  | 自动获取焦点           | boolean                    | false                  |
| character  | 自定义字符             | String or slot="character" | `<Icon type="star" />` |
| count      | star 总数              | number                     | 5                      |
| disabled   | 只读，无法进行交互     | boolean                    | false                  |
| tooltips   | 自定义每项的提示信息   | string[]                   | -                      |



#### on 事件

| 事件名称    | 说明                     | 回调参数                |
| :---------- | :----------------------- | :---------------------- |
| blur        | 失去焦点时的回调         | Function()              |
| change      | 选择时的回调             | Function(value: number) |
| focus       | 获取焦点时的回调         | Function()              |
| hoverChange | 鼠标经过时数值变化的回调 | Function(value: number) |
| keydown     | 按键回调                 | Function(event)         |