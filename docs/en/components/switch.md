### Switch

#### [demo](https://jsrun.net/dehKp/edit)

#### maker
```js
$formCreate.maker.switch('是否上架','is_show','1').slot({
        open:"上架",
        close:"下架",
    }).props({
        "trueValue":"1",
        "falseValue":"0",
})
```

#### json
```json
{
        type:"switch",
        title:"是否上架",
        field:"is_show",
        value:"1",
        props: {
            "size":"default",
            "disabled":false,
            "trueValue":"1",
            "falseValue":"0",
        },
        slot: {
            open:"上架",
            close:"下架",
        },
        validate:[],
}
```

#### Parameter Description

reference:[iview2.x](http://v2.iviewui.com/components/switch#API) | [iview3.x](https://www.iviewui.com/components/switch#API)

##### Switch props

| Property    | Description                                                  | Type                    | Default |
| ----------- | ------------------------------------------------------------ | ----------------------- | ------- |
| size        | Set the size to `large`, `small` or `default` to use large/small size of switch, by default the switch's size is medium. It is recommended that if you use 2 characters, set the switch size to large. | String                  | -       |
| disabled    | Disabled state of Switch.                                    | Boolean                 | false   |
| true-value  | Value of the switch if it's checked.                         | String, Number, Boolean | true    |
| false-value | Value of the switch if it's not checked.                     | String, Number, Boolean | false   |

##### Switch slot

| Name  | Description                              |
| ----- | ---------------------------------------- |
| open  | Customize content when state is opening. |
| close | Customize content when state is closed.  |

##### Switch events

| Event Name | Description                                   | Return Value  |
| ---------- | --------------------------------------------- | ------------- |
| change     | Emitted when the state of the switch changed. | true \| false |


