### ColorPicker 颜色选择框

#### [在线预览](https://jsrun.net/tehKp/edit)

#### 示例
```js
{
        type: "ColorPicker",
        field: "color",
        title: "颜色",
        value: '#ff7271', 
}
```

#### maker 快速生成
```js
$formCreate.maker.color('颜色','color','#ff7271').props({
        "format":"hex"
    }).props({
        "hue": true
})
```

#### json 规则
```json
{
        type: "ColorPicker",//必填!
        field: "color",//必填!
        title: "颜色",//必填!
        //input值
        value: '#ff7271',
        props: {
        	//是否支持透明度选择
            "alpha": false,
            //是否支持色彩选择
            "hue": true,
            //是否显示推荐的颜色预设
            "recommend": false,
            //尺寸，可选值为large、small、default或者不设置
            "size":"default",
            //自定义颜色预设
            "colors":[],
            //颜色的格式，可选值为 hsl、hsv、hex、rgb,开启 alpha 时为 rgb，其它为 hex
            "format":"hex",
        },
        validate:[],
}
```

#### 参数说明

参考:[iview2.x](http://v2.iviewui.com/components/color-picker#API) | [iview3.x](https://www.iviewui.com/components/color-picker#API)





##### 规则 rule

| **字段名** | **说明** | **字段类型** | **是否必填** | **默认值** |
| :--- | :--- | :--- | :--- | :--- |
| type | 元素类型 | String | true | - |
| field | 字段名称 | String | true | - |
| title | 字段别名 | String | true | - |
| value | 字段值 | String | false | - |
| props | 元素配置 | Object | false | - |
| event | 元素事件 | Object | false | - |
| validate | 验证规则 | Array | false | - |

##### 元素配置 props

| 字段名 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| alpha | 是否支持透明度选择 | Boolean | false | false |
| hue | 是否支持色彩选择 | Boolean | false | true |
| recommend | 是否显示推荐的颜色预设 | Boolean | false | false |
| size | 尺寸，可选值为large、small、default或者不设置 | String | false | - |
| colors | 自定义颜色预设 | Array | false | - |
| format | 颜色的格式，可选值为 hsl、hsv、hex、rgb,开启 alpha 时为 rgb，其它为 hex | String | false | 'hex' |

##### 事件扩展 event

| 事件名称 | 说明 | 字段类型 | 是否必填 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| change | 当绑定值变化时触发，返回当前值 | Function | false | - |
| active-change | 聚焦时触发 面板中当前显示的颜色发生改变时触发 | Function | false | - |


