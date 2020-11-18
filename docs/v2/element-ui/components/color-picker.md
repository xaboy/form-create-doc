# ColorPicker 颜色选择框

#### Maker
```js
$formCreate.maker.color('颜色','color','#ff7271')
```

#### JSON
```json
{
    type: "ColorPicker",
    field: "color",
    title: "颜色",
    value: '#ff7271',
}
```

参考:[Element_ColorPicker](http://element-cn.eleme.io/#/zh-CN/component/color-picker)

**value** :`String`


#### props

| 参数         | 说明                      | 类型    | 可选值                | 默认值                                                |
| ------------ | ------------------------- | ------- | --------------------- | ----------------------------------------------------- |
| disabled     | 是否禁用                  | boolean | —                     | false                                                 |
| size         | 尺寸                      | string  | —                     | medium / small / mini                                 |
| showAlpha   | 是否支持透明度选择        | boolean | —                     | false                                                 |
| colorFormat | 写入 v-model 的颜色的格式 | string  | hsl / hsv / hex / rgb | hex（show-alpha 为 false）/ rgb（show-alpha 为 true） |
| popperClass | ColorPicker 下拉框的类名  | string  | —                     | —                                                     |
| predefine    | 预定义颜色                | array   | —                     | —                                                     |

#### on 事件

| 事件名称      | 说明                               | 回调参数         |
| ------------- | ---------------------------------- | ---------------- |
| change        | 当绑定值变化时触发                 | 当前值           |
| active-change | 面板中当前显示的颜色发生改变时触发 | 当前显示的颜色值 |
