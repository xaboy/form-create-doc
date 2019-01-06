### Radio

#### [demo](https://jsrun.net/cehKp/edit)

#### maker
```js
$formCreate.maker.radio('是否包邮','is_postage','0').options([
        {value:"0",label:"不包邮",disabled:false},
        {value:"1",label:"包邮",disabled:false},
        {value:"2",label:"未知",disabled:true},
])
```

#### json
```json
radioRule :
{
        type:"radio",
        title:"是否包邮",
        field:"is_postage",
        value:"0",
        options:[
            {value:"0",label:"不包邮",disabled:false},
            {value:"1",label:"包邮",disabled:true},
        ],
        props: {
            "type":undefined,
            "size":"default",
            "vertical":false,
        },
        validate:[],
}
```

#### Parameter Description

reference:[iview2.x](http://v2.iviewui.com/components/radio#API) | [iview3.x](https://www.iviewui.com/components/radio#API)

##### Radio props

| Property | Description                                                  | Type    | Default |
| -------- | ------------------------------------------------------------ | ------- | ------- |
| type     | Optional value: button or leave empty. If set to button, button type is applied. | String  | -       |
| size     | The size of the RadioGroup. Optional value: `large`, `small`, `default` or leave empty. | String  | -       |
| vertical | Arrange vertically or not. It'll be ignored in button type.  | Boolean | false   |



##### Options props

| Property | Description                                                  | Type             | Return Value |
| -------- | ------------------------------------------------------------ | ---------------- | ------------ |
| value    | Only works when Radio is used alone. Use `v-model` to enable a two-way binding. | Boolean          | false        |
| label    | Only works when Radios are combined by RadioGroup. Assign selected Radio's value, and it'll automatically judge which is selected. | String \| Number | -            |
| disabled | Disable current option or not.                               | Boolean          | false        |



##### Radio events

| Event Name | Description                                                  | Return Value |
| ---------- | ------------------------------------------------------------ | ------------ |
| change     | Emit when selection's status is changed. Return current selected option. It won't be emitted when you change the status by modifying external data. | ...          |


