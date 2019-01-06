### TimePicker

#### [demo](https://jsrun.net/GehKp/edit)

#### maker
```js
$formCreate.maker.time('活动时间','section_time').props({
        "type":"timerange",
        "placeholder":"请选择活动时间"
})
```

#### json
```json
{
        type: "TimePicker",
        field: "section_time",
        title: "活动时间",
        value: [],
        props: {
            "type": "timerange",
            "format": "HH:mm:ss",
            "steps": [],
            "placement": "bottom-start",
            "placeholder":"请选择活动时间",
            "confirm":false,
            "size":"default",
            "disabled":false,
            "clearable":true,
            "readonly":false,
            "editable":false,
        },
        validate:[],
}
```

#### Parameter Description

reference:[iview2.x](http://v2.iviewui.com/components/time-picker#API) | [iview3.x](https://www.iviewui.com/components/time-picker#API)




##### TimePicker props

| Property    | Description                                                  | Type                        | Default      |
| ----------- | ------------------------------------------------------------ | --------------------------- | ------------ |
| type        | The type of the picker. Optional value: `time`, `timerange`  | String                      | time         |
| format      | Time format that is displayed.                               | [ Date](javascript:void(0)) | HH:mm:ss     |
| steps       | Interval of hours, minutes, and seconds. For example, set [1, 15], the minutes will be displayed as 00, 15, 30, 45. | Array                       | []           |
| placement   | The direction time picker displays. Optional value: `top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end`, supports automatic recognition after 2.12.0 | String                      | bottom-start |
| placeholder | Placeholder                                                  | String                      |              |
| confirm     | Show confirm panel on the bottom or not.                     | Boolean                     | false        |
| open        | Use this prop to control TimePicker's display manually. true: display, false: hide. TimePicker won't close automatically if you use this prop. We suggest you using it with slot, confirm and related events. | Boolean                     | null         |
| size        | The size of TimePicker. Optional value: `large`, `small`, `default` or leave empty. | String                      | -            |
| disabled    | Disable the picker or not.                                   | Boolean                     | false        |
| clearable   | Show clear button or not.                                    | Boolean                     | true         |
| readonly    | Readonly. If is set to true, the picker won't display. It only works when open prop is not set. | Boolean                     | false        |
| editable    | Text box is editable or not. It only works when slot is not set. | Boolean                     | true         |
| transfer    | Whether to append the layer in body. When used in Tabs or a fixed Table column, suggests adding this property, it will not be affected by the parent style, resulting in better results. | Boolean                     | false        |

##### TimePicker events

| Event Name  | Description                           | Return Value                        |
| ----------- | ------------------------------------- | ----------------------------------- |
| change      | Emitted when selected time changes.   | Formatted time string like 09:41:00 |
| open-change | Emitted when picker is open or close. | true \| false                       |
| ok          | Emitted when OK button is clicked.    | -                                   |
| clear       | Emitted when date is cleared.         | -                                   |

