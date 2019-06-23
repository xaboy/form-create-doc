# Slider 滑块

#### [在线预览](https://jsrun.net/rehKp/edit)

#### Maker
```js
maker.slider('滑块','slider',[0,52]).props({
    "min": 0,
    "max": 100,
    "range": true,
    "showTip":"always"
})
```

#### JSON
```json
{
    type:"slider",
    field:"slider",
    title:"滑块",
    value:[0,52],
    props:{
        "min": 0,
        "max": 100,
        "range": true,
    }
}
```

参考:[iview2.x](http://v2.iviewui.com/components/slider#API) | [iview3.x](https://www.iviewui.com/components/slider#API)

**value**: `Number|Array`

#### props

| 属性                | 说明                                                         | 类型            | 默认值  |
| :------------------ | :----------------------------------------------------------- | :-------------- | :------ |
| min                 | 最小值                                                       | Number          | 0       |
| max                 | 最大值                                                       | Number          | 100     |
| step                | 步长，取值建议能被（max - min）整除                          | Number          | 1       |
| disabled            | 是否禁用滑块                                                 | Boolean         | false   |
| range               | 是否开启双滑块模式                                           | Boolean         | false   |
| show-input          | 是否显示数字输入框，仅在单滑块模式下有效                     | Boolean         | false   |
| show-stops          | 是否显示间断点，建议在 step 不密集时使用                     | Boolean         | false   |
| show-tip            | 提示的显示控制，可选值为 `hover`（悬停，默认）、`always`（总是可见）、`never`（不可见） | String          | hover   |
| tip-format          | Slider 会把当前值传给 `tip-format`，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip | Function        | value   |
| input-size          | 数字输入框的尺寸，可选值为`large`、`small`、`default`或者不填，仅在开启 show-input 时有效 | String          | default |
| active-change 3.4.0 | 同 InputNumber 的 active-change                              | Boolean         | true    |

#### events

| 事件名    | 说明                                                       | 返回值 |
| :-------- | :--------------------------------------------------------- | :----- |
| on-change | 在松开滑动时触发，返回当前的选值，在滑动过程中不会触发     | value  |
| on-input  | 滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发 | value  |