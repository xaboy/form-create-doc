### Checkbox

#### [demo](https://jsrun.net/JehKp/edit)

#### Example
#### maker
```js
$formCreate.maker.checkbox('标签','label',["1","2","3"]).options([
        {value:"1",label:"好用",disabled:true},
        {value:"2",label:"方便",disabled:false},
        {value:"3",label:"实用",disabled:false},
        {value:"4",label:"有效",disabled:false},
])
```

#### json
```json
{
        type:"checkbox",
        title:"标签",
        field:"label",
        value:[
            "1","2","3"
        ],
        options:[
            {value:"1",label:"好用",disabled:true},
            {value:"2",label:"方便",disabled:false},
            {value:"3",label:"实用",disabled:false},
            {value:"4",label:"有效",disabled:false},
        ],
        props: {
            "size":"default",
        },
        validate:[],
}
```

#### Parameter Description

reference:[iview2.x](http://v2.iviewui.com/components/checkbox#API) | [iview3.x](https://www.iviewui.com/components/checkbox#API)



##### Checkbox props

| Property | Description                                                  | Type                        | Default |
| -------- | ------------------------------------------------------------ | --------------------------- | ------- |
| value    | Only works when used alone. Use v-model to enable two-way binding. | Boolean                     | false   |
| label    | Only works when combined with other components. The combination will judge the selected state automatically if current selection's value prop is set. | String \| Number \| Boolean | -       |
| disabled | Disable current selection or not.                            | Boolean                     | false   |

##### Checkbox props

| Property | Description                                                  | Type   | Default |
| -------- | ------------------------------------------------------------ | ------ | ------- |
| size     | The size of the CheckboxGroup. Optional value: `large`, `small`, `default` or leave empty. | String | -       |

##### Checkbox events

| Event Name | Description                                                  | Return Value |
| ---------- | ------------------------------------------------------------ | ------------ |
| change     | Emit when the state of the selection is changed. Selected array will be returned. It won't be emitted if outer data is changed. | [...]        |