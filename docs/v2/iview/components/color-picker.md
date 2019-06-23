# ColorPicker 颜色选择框

#### [在线预览](https://jsrun.net/tehKp/edit)

#### Maker
```js
maker.color('颜色','color','#ff7271').props({
        "format":"hex"
    }).props({
        "hue": true
})
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

参考:[iview2.x](http://v2.iviewui.com/components/color-picker#API) | [iview3.x](https://www.iviewui.com/components/color-picker#API)

**value**: `String`

#### props


| 属性      | 说明                                                | 类型    | 默认值                          |
| :-------- | :-------------------------------------------------- | :------ | :------------------------------ |
| disabled  | 是否禁用                                            | Boolean | false                           |
| editable  | 是否可以输入色值                                    | Boolean | true                            |
| alpha     | 是否支持透明度选择                                  | Boolean | false                           |
| hue       | 是否支持色彩选择                                    | Boolean | true                            |
| recommend | 是否显示推荐的颜色预设                              | Boolean | false                           |
| colors    | 自定义颜色预设                                      | Array   | []                              |
| format    | 颜色的格式，可选值为 hsl、hsv、hex、rgb             | String  | 开启 alpha 时为 rgb，其它为 hex |
| size      | 尺寸，可选值为`large`、`small`、`default`或者不设置 | String  | -                               |

#### events


| 事件名           | 说明                               | 返回值           |
| :--------------- | :--------------------------------- | :--------------- |
| on-change        | 当绑定值变化时触发                 | 当前值           |
| on-active-change | 面板中当前显示的颜色发生改变时触发 | 当前显示的颜色值 |
| on-open-change   | 下拉框展开或收起时触发             | true / false     |