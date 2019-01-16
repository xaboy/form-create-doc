### DatePicker

#### [demo](https://jsrun.net/HehKp/edit)

#### maker
```js
$formCreate.maker.date('活动日期','section_day',['2018-02-20', new Date()]).props({
        "type": "datetimerange",
        "placeholder":"请选择活动日期"
})
```

#### json
```json
{
        type: "DatePicker",
        field: "section_day",
        title: "活动日期",
        value: ['2018-02-20', new Date()],
        props: {
            "type": "datetimerange",
            "format": "yyyy-MM-dd HH:mm:ss",
            "placement": "bottom-start",
            "placeholder":"请选择获得时间",
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

reference:[iview2.x](http://v2.iviewui.com/components/date-picker#API) | [iview3.x](https://www.iviewui.com/components/date-picker#API)



##### DatePicker props

| Property            | Description                                                  | Type                        | Default                                                      |
| ------------------- | ------------------------------------------------------------ | --------------------------- | ------------------------------------------------------------ |
| type                | Display type. Optional value: `date`, `daterange`, `datetime`, `datetimerange`, `year`、`month` | String                      | date                                                         |
| format              | The date format that displays.                               | [ Date](javascript:void(0)) | **date \| daterange**： yyyy-MM-dd**datetime \| datetimerange**： yyyy-MM-dd HH:mm:ss**year**：yyyy**month**：yyyy-MM |
| placement           | The direction DatePicker displays. Optional value: `top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end`, supports automatic recognition after 2.12.0 | String                      | bottom-start                                                 |
| placeholder         | Place holder.                                                | String                      | -                                                            |
| options             | Extra configurations of DatePicker, such as disabling date, or shortcuts. For more details, see the table below. | Object                      | -                                                            |
| splitPanels        | When open it, the left and right panels are not interconnected during the switching year and month. Only work in `daterange` and `datetimerange` type. | Boolean                     | false                                                        |
| multiple            | When open it, you can select multiple dates. Only work in `date` type. | Boolean                     | false                                                        |
| showWeekNumbers   | When open it, you can display the numbers of week.           | Boolean                     | false                                                        |
| startDate          | Set the start date of the default display.                   | Date                        | -                                                            |
| confirm             | Display the control panel at the bottom of the DatePicker or not. If enabled, DatePicker won't close actively but wait user to confirm. | Boolean                     | false                                                        |
| open                | Control the display status of DatePicker manually. Set true to display, false to hide. DatePicker won't close actively after using this component. We suggest you to use it with slot, confirm and related events. | Boolean                     | null                                                         |
| size                | The size of the component. Optional value: `large`, `small`, `default` or leave blank. | String                      | -                                                            |
| disabled            | Disable DatePicker or not.                                   | Boolean                     | false                                                        |
| clearable           | Show the clear button or not.                                | Boolean                     | true                                                         |
| readonly            | Totally readonly. DatePicker won't be shown if enabled. It only works without setting open prop. | Boolean                     | false                                                        |
| editable            | Enable inputting into textbox. Only works without slot.      | Boolean                     | true                                                         |
| transfer            | Whether to append the layer in body. When used in Tabs or a fixed Table column, suggests adding this property, it will not be affected by the parent style, resulting in better results. | Boolean                     | false                                                        |
| timePickerOptions | TimePicker attributes can be configured under the type datetime and datetimerange, such as steps: `:time-picker-options="{steps: [1, 10, 10]}"` | Object                      | {}                                                           |

##### DatePicker events

| Event Name  | Description                                                  | Return Value                                                 |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| change      | Emit when date is changed.                                   | Return two values, formatted date like 2016-01-01, and the current date type, such as date. |
| openChange | Emit when open / close the calendar.                         | true \| false                                                |
| ok          | Works on confirm mode. Emit when clicking ok button.         | -                                                            |
| clear       | Works on confirm mode or clearable = true mode. Emit when date is cleared. | -                                                            |


