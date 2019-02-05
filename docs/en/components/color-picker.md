### ColorPicker

#### [demo](https://jsrun.net/tehKp/edit)

#### maker
```js
$formCreate.maker.color('颜色','color','#ff7271').props({
        "format":"hex"
    }).props({
        "hue": true
})
```

#### json
```json
{
        type: "ColorPicker",
        field: "color",
        title: "颜色",
        value: '#ff7271',
        props: {
            "alpha": false,
            "hue": true,
            "recommend": false,
            "size":"default",
            "colors":[],
            "format":"hex",
        },
        validate:[],
}
```

#### Parameter Description

reference:[iview2.x](http://v2.iviewui.com/components/color-picker#API) | [iview3.x](https://www.iviewui.com/components/color-picker#API)

##### ColorPicker props

| Property  | Description                                                  | Type    | Default                                     |
| --------- | ------------------------------------------------------------ | ------- | ------------------------------------------- |
| disabled  | Set picker to disable.                                       | Boolean | false                                       |
| alpha     | Whether to display the alpha slider.                         | Boolean | false                                       |
| hue       | Whether to display the hue slider.                           | Boolean | true                                        |
| recommend | Whether to display the color presets.                        | Boolean | false                                       |
| colors    | Customize color presets.                                     | Array   | []                                          |
| format    | Color format, Optional value: hsl, hsv, hex, rgb             | String  | When opening alpha is rgb, the other is hex |
| size      | The size of the component. Optional value: `large`, `small`, `default` or leave blank. | String  | -                                           |

##### ColorPicker events

| Event Name    | Description                                     | Return Value       |
| ------------- | ----------------------------------------------- | ------------------ |
| change        | Triggers when input value changes.              | color value        |
| active-change | Triggers when the current active color changes. | active color value |
| open-change   | Emitted when dropdown show or hide.             | true / false       |