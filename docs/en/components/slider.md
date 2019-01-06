### Slider

#### [demo](https://jsrun.net/rehKp/edit)

#### maker
```js
$formCreate.maker.slider('滑块','slider',[0,52]).props({
        "min": 0,
        "max": 100,
        "range": true,
        "showTip":"always"
})
```

#### json
```json
{
     type:"slider",
     field:"slider",
     title:"滑块",
     value:[0,50], 
     props:{
          "min": 0, 
         "max": 100, 
         "step": 1,
         "disabled": false, 
         "range": true,
         "showInput":false, 
         "showStops":true,
          "showTip":"hover", 
         "tipFormat":undefined,
         "inputSize":"small",
     },
     validate:[]
}
```

#### Parameter Description

reference:[iview2.x](http://v2.iviewui.com/components/slider#API) | [iview3.x](https://www.iviewui.com/components/slider#API)

##### Slider props

| Property   | Description                                                  | Type     | Default |
| ---------- | ------------------------------------------------------------ | -------- | ------- |
| min        | The minimum value the slider can slide to.                   | Number   | 0       |
| max        | The maximum value the slider can slide to.                   | Number   | 100     |
| step       | The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . | Number   | 1       |
| disabled   | If true, the slider will not be interactable.                | Boolean  | false   |
| range      | Whether to use the dual thumb mode.                          | Boolean  | false   |
| show-input | Whether to synchronize with InptNumber component, works when range is false. | Boolean  | false   |
| show-stops | Whether to display breakpoints.                              | Boolean  | false   |
| show-tip   | Tooltip display control, Optional value: `hover`（Hover, default）,`always`（Always visible）,`never`（Invisible）. | String   | hover   |
| tip-format | Slider will pass the current value to tip-format and display the returned value in Tooltip. If null, the Tooltip will be hidden. | Function | value   |
| input-size | The size of InputNumber. The value could be `large`, `small`, `default`or none. Only works when show-input is open. | String   | default |

##### Slider events

| Event Name | Description                                                  | Return Value |
| ---------- | ------------------------------------------------------------ | ------------ |
| change     | Emitted when slide button is released. It'll return current selected value. | value        |
| input      | Emitted when value changes. It'll be emitted in real time during sliding. | value        |