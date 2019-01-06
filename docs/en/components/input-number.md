### InputNumber

#### [demo](https://jsrun.net/xehKp/edit)

#### maker
```js
$formCreate.maker.number('排序','sort',0)
```

#### json
```json
{
        type: "InputNumber",
        field: "sort",
        title: "排序",
        value: 1,
        props: {
            "max": undefined,
            "min": undefined,
            "step": 1,
            "size":"default",
            "disabled":false,
            "readonly":false,
            "editable":true,
            "precision":0,
        },
        validate:[],
}
```

#### Parameter Description

reference:[iview2.x](http://v2.iviewui.com/components/input-number#API) | [iview3.x](https://www.iviewui.com/components/input-number#API)

##### InputNumber props

| Property    | Description                                                  | Type     | Default   |
| ----------- | ------------------------------------------------------------ | -------- | --------- |
| max         | Maximum value.                                               | Number   | Infinity  |
| min         | Minimum value.                                               | Number   | -Infinity |
| step        | The step length of each change, can be a decimal number.     | Number   | 1         |
| size        | Size of InputNumber. Optional value: `large`, `small`, `default` or leave blank. | String   | -         |
| disabled    | Set disable status.                                          | Boolean  | false     |
| placeholder | Placeholder.                                                 | String   | -         |
| formatter   | Specifies the format of the value presented.                 | Function | -         |
| parser      | Specifies the value extracted from formatter.                | Function | -         |
| readonly    | Whether to the read-only.                                    | Boolean  | false     |
| editable    | Whether it can be edited.                                    | Boolean  | true      |
| precision   | Precision of input value.                                    | Number   | -         |

##### InputNumber events

| Event Name | Description                                             | Return Value  |
| ---------- | ------------------------------------------------------- | ------------- |
| change     | Callback when number changes. Return the current value. | current value |
| focus      | Trigger on focus.                                       | event         |
| blur       | Trigger on blur.                                        | -             |



